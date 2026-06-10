import React from 'react'
import { useState } from 'react'

export default function Eliminarproducto() {
 // 1. Inicializamos con string vacío para evitar errores de "uncontrolled component"
    const [idAEliminar, setIdAEliminar] = useState('')

    const manejarEliminar = async (e) => {
        // 2. Evitar que la página se recargue
        e.preventDefault()

        // Validación simple antes de llamar a la API
        if (!idAEliminar) return alert("Por favor ingresa un ID")

        // 3. Confirmación de seguridad
        const confirmar = window.confirm(`¿Estás seguro de eliminar el producto con ID: ${idAEliminar}?`)
        if (!confirmar) return

        try {
            // 4. Petición dinámica al backend
            const res = await fetch(`http://127.0.0.1:5000/eliminarProducto/${idAEliminar}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()

            if (res.ok) {
                alert('¡Éxito! Producto eliminado')
                setIdAEliminar('') // Limpiamos el campo después de borrar
            } else {
                // Si el ID no existe, Flask enviará el error que definimos (404)
                alert(`Error: ${data.message || 'No se pudo eliminar'}`)
            }
        } catch (error) {
            console.error('Error de conexión:', error)
            alert('Error al conectar con el servidor')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Zona de Peligro</h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
                Ingresa el ID del producto que deseas dar de baja del inventario.
            </p>
            
            <form onSubmit={manejarEliminar} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID del Producto</label>
                    <input 
                        type="number" 
                        placeholder="Ej: 5" 
                        value={idAEliminar} 
                        onChange={(e) => setIdAEliminar(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    />
                </div>
                
                <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300 flex justify-center items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Eliminar Producto Permanente
                </button>
            </form>
        </div>
    )
}
