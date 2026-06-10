from flask import Blueprint, request, jsonify
from model.models import db, Producto

producto_bp = Blueprint('producto', __name__)


@producto_bp.route('/productoPost', methods=['POST'])
def crear_producto():
    data = request.get_json()

    nombre = data.get('nombre')
    descripcion = data.get('descripcion')
    precio = data.get('precio')
    cantidad = data.get('cantidad')

    nuevo_producto = Producto(
        nombre=nombre,
        descripcion=descripcion,
        precio=precio,
        cantidad=cantidad
    )
    db.session.add(nuevo_producto)
    db.session.commit()
    return jsonify({"message": "Producto creado exitosamente"}), 201

@producto_bp.route('/productosGet', methods=['GET'])
def obtener_productos():
    productos = Producto.query.all()
    productos_list = []
    for producto in productos:
        productos_list.append({
            "identificador": producto.identificador,
            "nombre": producto.nombre,
            "descripcion": producto.descripcion,
            "precio": producto.precio,
            "cantidad": producto.cantidad
        })
    return jsonify(productos_list), 200