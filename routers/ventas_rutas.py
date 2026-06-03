import datetime
from flask import Blueprint, request, jsonify
from model.models import db, Venta, Usuario, Producto, informacionVenta

ventas_bp = Blueprint('ventas', __name__)

@ventas_bp.route('/ventasPost', methods=['POST'])
def crear_venta():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No se recibieron datos'}), 400

    # 1. Extraer los datos exactos que vienen desde el JSON de React
    usuario_id = data.get('usuario_identificador')
    producto_id = data.get('producto_identificador')
    cantidad = int(data.get('cantidad', 1))
    
    direccion_envio = data.get('direccionEnvio')
    telefono_contacto = data.get('telefonoContacto')
    fecha_entrega_str = data.get('fechaEntrega')  # Llega como "YYYY-MM-DD"

    # 2. Validar que los IDs críticos no vengan vacíos (Evita el error None)
    if not usuario_id or not producto_id:
        return jsonify({'error': 'Falta el identificador de usuario o de producto'}), 400

    try:
        # 3. Validar existencia del Usuario y el Producto
        usuario = db.session.query(Usuario).filter_by(identificador=usuario_id).first()
        producto = db.session.query(Producto).filter_by(identificador=producto_id).first()

        if not usuario:
            return jsonify({'error': 'El usuario no existe'}), 404
        if not producto:
            return jsonify({'error': 'El producto no encontrado'}), 404

        # 4. Verificar y Descontar Stock
        if producto.cantidad < cantidad:
            return jsonify({'error': f'Stock insuficiente. Solo quedan {producto.cantidad} unidades'}), 400
        
        producto.cantidad -= cantidad  # Restamos las unidades del stock

        # 5. Calcular el total automáticamente en el Backend (Precio Real * Cantidad)
        total_calculado = producto.precio * cantidad

        # 6. Crear la primera tabla maestra: Venta
        nueva_venta = Venta(
            usuario_identificador=usuario.identificador,
            producto_identificador=producto.identificador,
            cantidad=cantidad,
            total=total_calculado
        )
        db.session.add(nueva_venta)
        db.session.flush()  # Genera el ID de la venta inmediatamente sin cerrar la transacción

        # 7. Convertir la fecha que ingresó el usuario en el formulario
        fecha_entrega_dt = datetime.datetime.strptime(fecha_entrega_str, '%Y-%m-%d').date()
        
        # Generar automáticamente la fecha de compra de hoy en el sistema
        fecha_compra_automatica = datetime.date.today()

        # 8. Crear la segunda tabla relacionada: informacionVenta
        nuevo_informe = informacionVenta(
            idVentas=nueva_venta.identificador,
            direccionEnvio=direccion_envio,
            telefonoContacto=telefono_contacto,
            fechaEntrega=fecha_entrega_dt,
            fechaCompra=fecha_compra_automatica  # Automática generada por Python
        )
        db.session.add(nuevo_informe)
        
        # Guardar todo en la base de datos de manera atómica
        db.session.commit()

        return jsonify({
            'message': '¡Venta e informe procesados exitosamente!',
            'venta_id': nueva_venta.identificador,
            'cliente': usuario.nombre,
            'producto_vendido': producto.nombre,
            'total_pagado': total_calculado,
            'nuevo_stock': producto.cantidad
        }), 201

    except Exception as e:
        db.session.rollback()
        print("Error en el servidor:", str(e))
        return jsonify({'error': f'Error interno: {str(e)}'}), 500