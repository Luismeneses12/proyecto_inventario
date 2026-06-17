import React from 'react'
import { useState } from 'react'

import { apiFetch } from '../config'

export default function EliminarRecetas() {
  const [identificacionRecetas, setIdentificacionRecetas] = React.useState("")
    const [message, setMessage] = React.useState("")
    
    
        
    const eliminarRecetas = async (e) => {
        e.preventDefault()

      

        try {
        const res = await apiFetch(`/eliminarReceta/${identificacionRecetas}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        if(res.ok){
            setMessage(data.message)
            alert("Receta eliminada exitosamente")
                alert("Receta eliminada exitosamente")
                setIdentificacionRecetas("") // Clear input on success
            } else {
                setMessage(data.message || "Error al eliminar la receta")
                alert(data.message || "Error al eliminar la receta")
            }
        } catch(error){
            console.error('Error al eliminar la receta:', error)
            setMessage("Error de conexión con el servidor.")
            alert("Error de conexión con el servidor.")
        }
    }
   

    return (
    
  
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Eliminar Receta</h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
                Ingresa el ID de la receta que deseas eliminar permanentemente.
            </p>

            <form onSubmit={eliminarRecetas} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID de la Receta</label>
                    <input
                        type="number" // Assuming ID is a number
                        placeholder="Ej: 123"
                        value={identificacionRecetas}
                        onChange={(e) => setIdentificacionRecetas(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300 flex justify-center items-center gap-2"
                >
                    <span className="material-symbols-outlined">delete_forever</span>
                    Eliminar Receta
                </button>
            </form>
            {message && <p className="text-center mt-4 text-red-500 text-sm">{message}</p>}
        </div>
    )
}
