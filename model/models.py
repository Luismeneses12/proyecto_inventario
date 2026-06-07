from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuario'

    identificador = db.Column(db.Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(50), nullable=False, unique=True)
    contraseña = db.Column(db.String(50), nullable=False)

class  validacionCorreo(db.Model):
    __tablename__ = "validacionCorreo"
    identificador = db.Column(db.Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    valorEnviado = db.Column(db.Integer,default=0, nullable=False)
    identificadorUsuario = db.Column(db.Integer, db.ForeignKey('usuario.identificador'), nullable=False)

class Producto(db.Model):
    __tablename__ = 'producto'

    identificador = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(50), nullable=False)
    foto = db.Column(db.String(600), nullable=False)
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


class informacionVenta(db.Model):
    __tablename__ = 'informacionVentas'

    identificadorInformeVenta = db.Column(db.Integer, primary_key=True, autoincrement=True)
    idVentas = db.Column(db.Integer, db.ForeignKey('venta.identificador'), nullable=False)
    direccionEnvio = db.Column(db.String(200), nullable=False)
    telefonoContacto = db.Column(db.String(20), nullable=False)
    fechaEntrega = db.Column(db.Date, nullable=False)
    fechaCompra = db.Column(db.Date, nullable=False) 
     
class validacionInformeVentas(db.Model):
    __tablename__ = "validacionInformeVentas"
    
    identificadorValidacionInformeVentas = db.Column(db.Integer, primary_key=True, autoincrement=True)
    valorEnviado = db.Column(db.Integer,default=0, nullable=False)
    identificadorInformeVenta = db.Column(db.Integer, db.ForeignKey('informacionVentas.identificadorInformeVenta'), nullable=False)


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
    


