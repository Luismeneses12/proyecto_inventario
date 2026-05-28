import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from model.models import db, Recetas

receta_bp = Blueprint('recetas', __name__)

UPLOAD_FOLDER = 'static/uploads'

@receta_bp.route('/recetaspost', methods=['POST'])
def crear_receta():
    data  =  request.get_json()
    titulo = data.get('titulo')
    foto = data.get('foto')
    ingredientes = data.get('ingredientes')
    instrucciones = data.get('instrucciones')
   
    nueva_receta = Recetas(
        titulo=titulo,
        foto=foto,
        ingredientes=ingredientes,
        instrucciones=instrucciones
    )

    db.session.add(nueva_receta)
    db.session.commit()

    return jsonify({"mensaje": "Receta creada correctamente"})

@receta_bp.route('/recetasget', methods=['GET'])
def obtener_recetas():
    res = Recetas.query.all()
    recetas_list = []

    for receta in res:
        recetas_list.append({
            "identificadorRecetas": receta.identificacionRecetas,
            "titulo": receta.titulo,
            "foto": receta.foto,
            "ingredientes": receta.ingredientes,
            "instrucciones": receta.instrucciones
        })

    return jsonify(recetas_list)
