from flask import Blueprint, request, jsonify
from model.models import db, ConsultaFormurlario

fomulario_bp = Blueprint('consultaFormulario', __name__)

@fomulario_bp.route('/consulta', methods=['POST'])
def crear_consulta_formulario():
    data = request.get_json()

    nombre = data.get('nombre')
    correo = data.get('correo')
    consulta = data.get('consulta')
    mensaje = data.get('mensaje')

    nueva_consulta_formulario = ConsultaFormurlario(
        nombre=nombre,
        correo=correo,
        consulta=consulta,
        mensaje=mensaje
    )
    db.session.add(nueva_consulta_formulario)
    db.session.commit()
    return jsonify({"message": "Consulta del formulario creada exitosamente"}), 201