from flask import Blueprint, request, jsonify
from model.models import db, Usuario, validacionCorreo 




usuario_bp = Blueprint('usuario', __name__)

@usuario_bp.route('/usuario', methods=['POST'])
def crear_usuario():
    data = request.get_json()
    
    nombre = data.get('nombre')
    correo = data.get('correo')    
    contraseña = data.get('contraseña')
    
    
    
    if not nombre or not correo or not contraseña:
        return jsonify({'message': 'Faltan campos requeridos'}), 400

    nuevo_usuario = Usuario(
        nombre=nombre,
        correo=correo,
        contraseña=contraseña
    )

    db.session.add(nuevo_usuario)
    db.session.commit()

    nueva_validacion = validacionCorreo(
        valorEnviado=0, # Inicia en cero como acordamos
        identificadorUsuario=nuevo_usuario.identificador # Le pasamos el ID que se acaba de generar
    )
    db.session.add(nueva_validacion)
    db.session.commit()

    return jsonify({'message': 'Usuario creado exitosamente'}), 201

@usuario_bp.route('/login', methods=['POST'])
def login_usuario():
    data = request.get_json()
    
    correo = data.get('correo')
    contraseña = data.get('contraseña')
    
    if not correo or not contraseña:
        return jsonify({'message': 'Faltan campos requeridos'}), 400
    
    usuario = Usuario.query.filter_by(correo=correo, contraseña=contraseña).first()
    
    if not usuario:
        return jsonify({'message': 'Credenciales inválidas'}), 401
    
    return jsonify({
        'identificador': usuario.identificador,
        'nombre': usuario.nombre,
        'correo': usuario.correo
    }), 200







@usuario_bp.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([{
        'identificador': usuario.identificador,
        'nombre': usuario.nombre,
        'correo': usuario.correo
    } for usuario in usuarios]), 200

    return jsonify({
        'identificador': usuario.identificador,
        'nombre': usuario.nombre,
        'correo': usuario.correo
    }), 200

@usuario_bp.route('/usuario/<int:identificador>', methods=['PUT'])
def actualizar_usuario(identificador):
    usuario = Usuario.query.get(identificador)
    if not usuario:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    data = request.get_json()
    
    usuario.nombre = data.get('nombre', usuario.nombre)
    usuario.correo = data.get('correo', usuario.correo)
    usuario.contraseña = data.get('contraseña', usuario.contraseña)

    db.session.commit()
    
    return jsonify({'message': 'Usuario actualizado exitosamente'}), 200

@usuario_bp.route('/usuario/<int:identificador>', methods=['DELETE'])
def eliminar_usuario(identificador):
    usuario = Usuario.query.get(identificador)
    if not usuario:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    db.session.delete(usuario)
    db.session.commit()
    
    return jsonify({'message': 'Usuario eliminado exitosamente'}), 200

