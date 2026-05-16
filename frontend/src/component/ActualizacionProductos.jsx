import React from 'react'
import { useState } from 'react'


function ActualizacionProductos() {

    const [identificador, setIdentificador] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [descripcion, setDescription] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')

    const actualizarProducto = async (e)=>{
        e.preventDefault()
       try{
        const res = await fetch(`http://127.0.0.1:5000/actualizarProducto/${identificador}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nombre, descripcion, precio, cantidad })
        })
       }
       catch(error){
        console.error('Error al actualizar el producto:', error)
      
      }
    }

  
    return (
      <>
   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-700">
                <span className="material-symbols-outlined">edit_note</span>
                Modificar Producto
            </h2>

            <form onSubmit={actualizarProducto} className="space-y-4">
                {/* ID - Campo resaltado porque es la llave de búsqueda */}
                <div className="relative">
                    <label className="text-xs font-bold text-blue-600 uppercase ml-2">ID del Producto</label>
                    <input 
                        type="text" 
                        placeholder="Ingrese ID para buscar" 
                        value={identificador} 
                        onChange={(e) => setIdentificador(e.target.value)}
                        className="w-full p-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <input 
                        type="text" 
                        placeholder="Nuevo nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                    />
                    <textarea 
                        placeholder="Nueva descripción" 
                        value={descripcion} 
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition h-20"
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <input 
                            type="number" 
                            placeholder="Precio" 
                            value={precio} 
                            onChange={(e) => setPrecio(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                        <input 
                            type="number" 
                            placeholder="Stock" 
                            value={cantidad} 
                            onChange={(e) => setCantidad(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                >
                    <span className="material-symbols-outlined text-sm">sync</span>
                    Aplicar Cambios
                </button>
            </form>
        </div>
    </>
    

  )
}

export default ActualizacionProductos