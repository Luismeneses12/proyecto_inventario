import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InformeVentas() {
    const navigate = useNavigate()
    
    const [usuario, setUsuario] = useState(null)
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)

    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')

    useEffect(() => {
        const userLogueado = JSON.parse(localStorage.getItem('userLogueado'))
        const prodSeleccionado = JSON.parse(localStorage.getItem('productoSeleccionado'))

        if (!userLogueado) {
            alert("Debes iniciar sesión para realizar un pedido.")
            navigate('/inicio-sesion')
            return
        }

        if (!prodSeleccionado) {
            alert("Por favor selecciona un producto en la tienda primero.")
            navigate('/tienda')
            return
        }

        // 🔥 CORRECCIÓN CRÍTICA: Asignamos los datos recuperados a los estados correspondientes
        setUsuario(userLogueado)
        setProducto(prodSeleccionado)
    }, [navigate])

    const enviarPedido = async (e) => {
        e.preventDefault()

        if (!usuario?.identificador || !producto?.identificador) {
            alert("Error: Faltan datos del usuario o del producto.")
            return
        }

        const payload = {
            usuario_identificador: usuario.identificador,
            producto_identificador: producto.identificador,
            cantidad: parseInt(cantidad),
            total: parseFloat(producto.precio * cantidad),
            direccionEnvio: direccion,
            telefonoContacto: telefono,
            fechaEntrega: fechaEntrega,
            fechaCompra: new Date().toISOString().split('T')[0] // Genera la fecha actual en formato YYYY-MM-DD automáticamente
        }

        try {
            const res = await fetch('http://127.0.0.1:5000/ventasPost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            const data = await res.json()

            if (res.ok) {
                alert(`🎉 ¡Venta registrada con éxito! Código de orden: ${data.venta_id}`)
                localStorage.removeItem('productoSeleccionado')
                navigate('/tienda')
            } else {
                alert(data.error || 'Hubo un problema al procesar la compra')
            }
        } catch (error) {
            console.error('Error de red:', error)
            alert('No se pudo conectar con el servidor')
        }
    }

    if (!usuario || !producto) {
        return <div className="text-center py-10 text-gray-500">Cargando detalles de facturación...</div>
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-green-800 text-center mb-4">Finalizar Compra</h2>
            
            <div className="bg-stone-50 p-4 rounded-xl mb-6 text-sm text-gray-700 space-y-1">
                <p><strong>Cliente:</strong> {usuario.nombre || usuario.correo}</p>
                <p><strong>Producto:</strong> {producto.nombre}</p>
                <p><strong>Precio Unitario:</strong> ${producto.precio}</p>
                <p className="text-green-700 font-bold text-base pt-1">Total: ${producto.precio * cantidad}</p>
            </div>

            <form onSubmit={enviarPedido} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Cantidad</label>
                    <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(e.target.value)} className="w-full px-4 py-2 border rounded-xl outline-none" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Dirección de Entrega</label>
                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="w-full px-4 py-2 border rounded-xl outline-none" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Teléfono</label>
                    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full px-4 py-2 border rounded-xl outline-none" required />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Fecha de Entrega</label>
                    <input type="date" value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)} className="w-full px-4 py-2 border rounded-xl outline-none" required />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all">
                    Confirmar Pedido
                </button>
            </form>
        </div>
    )
}