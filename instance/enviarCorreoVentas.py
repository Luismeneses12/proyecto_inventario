import sqlite3
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_correo_ventas():
    # 1. Rutas de la base de datos y el archivo de forma absoluta
    rutas_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), "inventario.db")
    conexion = sqlite3.connect(rutas_db)
    cursor = conexion.cursor()

    # 2. 🌟 CONSULTA INNER JOIN CORREGIDA (Sin comas intermedias y nombres exactos de modelos)
    cursor.execute("""
        SELECT 
            u.nombre, 
            u.correo, 
            p.nombre AS nombre_producto, 
            v.cantidad, 
            v.total, 
            inf.direccionEnvio, 
            inf.telefonoContacto, 
            inf.fechaEntrega, 
            inf.fechaCompra,
            val.identificadorInformeVenta
        FROM validacionInformeVentas val
        INNER JOIN informacionVentas inf ON val.identificadorInformeVenta = inf.identificadorInformeVenta
        INNER JOIN venta v ON inf.idVentas = v.identificador
        INNER JOIN usuario u ON v.usuario_identificador = u.identificador
        INNER JOIN producto p ON v.producto_identificador = p.identificador
        WHERE val.valorEnviado = 0
    """)
    registros = cursor.fetchall()

    remitente = "scriptspythonemail@gmail.com"
    contraseña = "dbhy pxxk wcrw rblb"
    
    if registros:
        print(f"📧 Se encontraron {len(registros)} correos de ventas pendientes por enviar.")

        # 🌟 CORREGIDO: El bucle FOR debe ir DENTRO del 'with' para mantener la sesión de Gmail activa
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(remitente, contraseña)

            for nombre, correo, producto, cantidad, total, direccion, telefono, fecha_entrega, fecha_compra, id_informe_venta in registros:

                mensaje = MIMEMultipart()
                mensaje['Subject'] = f"Gracias {nombre} por tu compra en Aguacateoliga"
                mensaje['From'] = remitente
                mensaje['To'] = correo 

                cuerpo = f"""HOLA GRACIAS POR TU COMPRA: {nombre}
------------------------------------------
Fecha de compra: {fecha_compra}
Correo de contacto: {correo}

Detalle de tu pedido:
- Producto: {producto}
- Cantidad: {cantidad}
- Valor total: ${total}
------------------------------------------
Dirección de envío: {direccion}
Teléfono de contacto: {telefono}
Fecha estimada de entrega: {fecha_entrega}

Para actualizar o cambiar la fecha o dirección de entrega, 
por favor comunícate de inmediato al número: 3198231711.

¡Gracias por apoyar a la Aguacateoliga!
"""
                mensaje.attach(MIMEText(cuerpo, 'plain', 'utf-8'))

                try:
                    smtp.send_message(mensaje)
                    print(f"✅ Correo enviado con éxito a: {correo}")

                    # Actualizamos el estado a 1 usando la clave foránea del informe procesado
                    cursor.execute("""
                        UPDATE validacionInformeVentas
                        SET valorEnviado = 1
                        WHERE identificadorInformeVenta = ?
                    """, (id_informe_venta,))
                    conexion.commit()
                    print(f"💾 Base de datos actualizada: Informe ID {id_informe_venta} marcado como enviado.")
                    
                except Exception as e:
                    print(f"❌ Error al enviar correo a {correo}: {e}")

    else:
        print("🏁 No hay correos de ventas pendientes. Todos los registros tienen valorEnviado = 1.")

    conexion.close()

# Ejecutamos la función para iniciar el proceso
if __name__ == "__main__":
    enviar_correo_ventas()