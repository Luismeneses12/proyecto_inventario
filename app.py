from flask import Flask
from flask_cors import CORS
from model.models import db


from routers.usuario_routes import usuario_bp
from routers.producto_rutas import producto_bp
from routers.fomulario_router import fomulario_bp
from routers.recetas_routes import receta_bp
from routers.ventas_rutas import ventas_bp
from routers.contraseña_router import recuper_bp

from instance.enviarCorreo import enviar_correo
from instance.enviarCorreoVentas import enviar_correo_ventas

def create_app():
   app = Flask(__name__, static_folder='static')





   app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventario.db'
   app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

   db.init_app(app)
   app.register_blueprint(usuario_bp)
   enviar_correo()
   app.register_blueprint(producto_bp)
   app.register_blueprint(fomulario_bp)
   app.register_blueprint(receta_bp )
   app.register_blueprint(ventas_bp)
   app.register_blueprint(recuper_bp)

   enviar_correo_ventas()
   
   
   CORS(app )

   with app.app_context():
#          db.drop_all()            
        db.create_all()
 
   return app




