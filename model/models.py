from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuario'

    identificador = db.Column(db.Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(50), nullable=False, unique=True)
    contraseña = db.Column(db.String(50), nullable=False)

class Producto(db.Model):
    __tablename__ = 'producto'

    identificador = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(50), nullable=False)
    descripcion = db.Column(db.String(200), nullable=False)
    precio = db.Column(db.Float, nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)        

class Venta(db.Model):
    __tablename__ = 'venta'

    identificador = db.Column(db.Integer, primary_key=True, autoincrement=True)
    producto_identificador = db.Column(db.Integer, db.ForeignKey('producto.identificador'), nullable=False)
    usuario_identificador = db.Column(db.Integer, db.ForeignKey('usuario.identificador'), nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Float, nullable=False)

class Recetas(db.Model):
    __tablename__ = "recetas"

    identificacionRecetas = db.Column(db.Integer, primary_key=True, autoincrement=True)  
    titulo = db.Column(db.String(100), nullable=False)
    foto = db.Column(db.String(600), nullable=False)
    ingredientes = db.Column(db.Text, nullable=False)
    instrucciones = db.Column(db.Text, nullable=False)
    
#borra esta base de datos en  y volver a hacerla en  de nuevo agregando opciones 
class ConsultaFormurlario(db.Model):
    __tablename__ = "consultaFormulario"

    identificacionConsultaFormulario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(100), nullable=False)
    correo = db.Column(db.String(100), nullable=False)
    consulta = db.Column(db.String(100), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)
    


