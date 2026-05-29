from flask import Flask
from flask_cors import CORS
from model.models import db
from routers.usuario_routes import usuario_bp
from routers.producto_rutas import producto_bp
from routers.fomulario_router import fomulario_bp
from routers.recetas_routes import receta_bp

def create_app():
   app = Flask(__name__, static_folder='static')

   app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventario.db'
   app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

   db.init_app(app)
   app.register_blueprint(usuario_bp)
   app.register_blueprint(producto_bp)
   app.register_blueprint(fomulario_bp)
   app.register_blueprint(receta_bp )
   CORS(app)
   with app.app_context():
#          db.drop_all()            
        db.create_all()
 
   return app




