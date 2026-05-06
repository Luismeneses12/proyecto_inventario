from flask import Flask, app
from flask_cors import CORS
from model.models import db
from routers.usuario_routes import usuario_bp
from routers.producto_rutas import producto_bp


def create_app():
   app = Flask(__name__)

   app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventario.db'
   app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

   db.init_app(app)
   app.register_blueprint(usuario_bp)
   app.register_blueprint(producto_bp)

   CORS(app)
   with app.app_context():
        db.create_all()
 
   return app



