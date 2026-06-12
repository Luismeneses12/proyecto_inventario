import sqlite3
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_correo_recuperacion_contrasena():

    ruta_db = os.path.join(os.path.dirname(os.path.abspath(__file__)), "inventario.db")
    conexion = sqlite3.connect(ruta_db)
    cursor = conexion.cursor()

    cursor.execute("""
        SELECT u.nombre, u.correo, rc.codigoVerificacion, rc.identificadorUsuario
        FROM recuperacionContrasena rc
        INNER JOIN usuario u ON rc.identificadorUsuario = u.identificador
        WHERE rc.valorEnviado = 0
    """)
    registros = cursor.fetchall()
    remitente = "scriptspythonemail@gmail.com"
    contraseña = "dbhy pxxk wcrw rblb"

    if registros:
        print(f"📧 Se encontraron {len(registros)} correos de recuperación de contraseña pendientes por enviar.")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(remitente, contraseña)

            for nombre, correo, codigo_verificacion ,identificador  in registros:
                mensaje = MIMEMultipart()
                mensaje['Subject'] = f"hola {nombre}, ! tu codigo de verificacion es:"
                mensaje['From'] = remitente
                mensaje['To'] = correo 

                cuerpo = f""" Hola {nombre}\n para recuperar restableser tu contraseña del {correo}\n tu codigo de segurida es {codigo_verificacion} \n si necetias un mayor soporte comunicarce con nuesta aria encargada o recurir a contacto en el area de formulario """
                mensaje.attach(MIMEText(cuerpo, 'plain', 'utf-8'))

                try:
                    smtp.send_message(mensaje)
                    print(f"✅ Correo enviado con éxito a: {correo}")

                    cursor.execute("""
                        UPDATE recuperacionContrasena
                        SET valorEnviado = 1
                        WHERE identificadorUsuario = ?
                    """, (identificador,))
                    conexion.commit()
                    print(f"💾 codigo enviado con exito ")
                    
                except Exception as e:
                    print(f"❌ Error al enviar correo a {correo}: {e}")
    else:
        print("🏁 No hay correos de recuperación de contraseña pendientes. Todos los registros tienen valorEnviado = 1.")

    conexion.close()

if __name__ == "__main__":
    enviar_correo_recuperacion_contrasena()
   