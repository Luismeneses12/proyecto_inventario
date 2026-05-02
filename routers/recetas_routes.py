import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from model.models import db, Recetas

receta_bp = Blueprint('receta', __name__)

UPLOAD_FOLDER = 'static/uploads'

@receta_bp.route('/recetas', methods=['POST'])
def crear_receta():
    titulo = request.form.get('titulo')
    ingredientes = request.form.get('ingredientes')
    descripcion = request.form.get('descripcion')
    imagen = request.files.get('imagen')

    if not titulo:
        return jsonify({"error": "Título requerido"}), 400

    ruta_imagen = None

    if imagen:
        filename = secure_filename(imagen.filename)
        ruta_imagen = os.path.join(UPLOAD_FOLDER, filename)
        imagen.save(ruta_imagen)

    nueva_receta = Receta(
        titulo=titulo,
        ingredientes=ingredientes,
        descripcion=descripcion,
        imagen=ruta_imagen
    )

    db.session.add(nueva_receta)
    db.session.commit()

    return jsonify({"mensaje": "Receta creada correctamente"})
