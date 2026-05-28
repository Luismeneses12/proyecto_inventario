import sqlite3
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# 1. Conexión segura a la base de datos
ruta_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), "inventario.db")
conexion = sqlite3.connect(ruta_db)
cursor = conexion.cursor()



# 2. Consulta directa: Buscamos solo donde valorEnviado sea el ENTERO 0
cursor.execute("""
    SELECT u.nombre, u.correo, v.identificadorUsuario
    FROM validacionCorreo v
    INNER JOIN usuario u ON v.identificadorUsuario = u.identificador
    WHERE v.valorEnviado = 0
""")
registros = cursor.fetchall()


# 3. Condición: Si hay registros en 0, se abre el servidor y se envían
if registros:
    print(f"📧 Se encontraron {len(registros)} correos pendientes por enviar.")
    
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(remitente, contraseña)

        for nombre, correo, id_usuario in registros:
            # Crear estructura del correo
            mensaje = MIMEMultipart()
            mensaje['Subject'] = f"Hola {nombre}, ¡Bienvenido a la Aguacateoliga!"
            mensaje['From'] = remitente
            mensaje['To'] = correo

            cuerpo = f"Hola {nombre},\n\nTe damos la bienvenida a la plataforma de la aguacateoliga."
            mensaje.attach(MIMEText(cuerpo, 'plain', 'utf-8'))

            try:
                smtp.send_message(mensaje)
                print(f"✅ Correo enviado con éxito a: {correo}")
                
                # 🌟 ACTUALIZACIÓN: Cambiamos el valor a 1 (ya enviado)
                cursor.execute("""
                    UPDATE validacionCorreo 
                    SET valorEnviado = 1 
                    WHERE identificadorUsuario = ?
                """, (id_usuario,))
                conexion.commit() # Guardamos de inmediato en el disco
                print(f"💾 Registro actualizado en la base de datos para ID: {id_usuario}")
                
            except Exception as e:
                print(f"❌ Error al enviar a {correo}: {e}")
else:
    # Si todos están en 1, el programa saltará directamente aquí de forma limpia
    print("🏁 No hay correos pendientes. Todos los registros tienen valorEnviado = 1.")

conexion.close()