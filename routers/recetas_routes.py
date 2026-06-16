import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from model.models import db, Recetas

receta_bp = Blueprint('recetas', __name__)

UPLOAD_FOLDER = 'static/uploads'


@receta_bp.route('/postReceta', methods=['POST'])
def crear_receta():

    titulo = request.form.get('titulo')
    ingredientes = request.form.get('ingredientes')
    instrucciones = request.form.get('instrucciones')

    foto = request.files.get('foto')

    if not titulo:
        return jsonify({"error": "El titulo es obligatorio"}), 400

    ruta_foto = ""

    if foto:
        # 🔥 LA SOLUCIÓN AQUÍ: 
        # Esto asegura que la carpeta 'static/uploads' se cree automáticamente si no existe.
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)

        nombre_archivo = secure_filename(foto.filename)

        # Usamos os.path.join para armar la ruta de forma segura en cualquier sistema operativo
        ruta_foto = os.path.join(UPLOAD_FOLDER, nombre_archivo)

        # Ahora que la carpeta sí existe, no dará error al guardar
        foto.save(ruta_foto)

    nueva_receta = Recetas(
        titulo=titulo,
        foto=ruta_foto,
        ingredientes=ingredientes,
        instrucciones=instrucciones
    )

    db.session.add(nueva_receta)
    db.session.commit()

    return jsonify({
        "mensaje": "Receta creada correctamente"
    }), 201

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

@receta_bp.route('/eliminarReceta/<int:identificacionRecetas>', methods=['DELETE'])
def eliminar_receta(identificacionRecetas):
    receta = Recetas.query.get(identificacionRecetas)
    if not receta:
        return jsonify({"message": "Receta no encontrada"}), 404
    db.session.delete(receta)
    db.session.commit()
    return jsonify({"message": "Receta eliminada exitosamente"}), 200

@receta_bp.route('/buscarReceta/<string:titulo>', methods=['GET'])
def buscar_receta(titulo):
    try:
        # 🥑 CORRECCIÓN: Buscamos en la columna 'titulo' de forma flexible (insensible a mayúsculas/minúsculas)
        # El operador .like(f"%{titulo}%") busca cualquier receta que CONTENGA esa palabra
        resultados = Recetas.query.filter(Recetas.titulo.like(f"%{titulo}%")).all()

        # Si la lista de resultados no está vacía
        if resultados:        
            recetas_list = []
            for receta in resultados:
                recetas_list.append({
                    "identificadorRecetas": receta.identificacionRecetas,
                    "titulo": receta.titulo,
                    "foto": receta.foto,
                    "ingredientes": receta.ingredientes,
                    "instrucciones": receta.instrucciones
                })
            
            # 🔥 IMPORTANTE: Devolvemos una LISTA [] de objetos para que el .map() de React funcione perfectamente
            return jsonify(recetas_list), 200
        
        else:
            # Si no hay coincidencias, devolvemos un 404 con un mensaje limpio
            return jsonify({"message": "Receta no encontrada"}), 404

    except Exception as e:
        return jsonify({"error": "Error interno en el servidor", "detalle": str(e)}), 500