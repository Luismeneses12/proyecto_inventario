from flask import Blueprint, request, jsonify
from model.models import db, Usuario, recuperacionContrasena
import random

recuper_bp = Blueprint('recuperacionContrasena', __name__)

@recuper_bp.route("/recuperarContrasena", methods=['POST'])
def recuperar_contrasena():
    data = request.get_json()
    correo = data.get('correo')
    usuario = Usuario.query.filter_by(correo=correo).first()

    if usuario:
        codigo_verificacion = str(random.randint(100000, 999999))
        nueva_recuperacion = recuperacionContrasena(
            valorEnviado=0,
            codigoVerificacion=codigo_verificacion,
            identificadorUsuario=usuario.identificador
        )
        db.session.add(nueva_recuperacion)
        db.session.commit()
        return jsonify({"mensaje":"correo encontrado"}),200
