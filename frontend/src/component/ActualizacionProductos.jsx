import React from 'react'
import { useState } from 'react'
import { apiFetch } from '../config'


function ActualizacionProductos() {

    const [identificador, setIdentificador] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [foto, setFoto] = React.useState(null)
    const [descripcion, setDescription] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')

    const actualizarProducto = async (e)=>{
        e.preventDefault()
       try{
        const formData = new FormData()
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('precio', precio)
        formData.append('cantidad', cantidad)
        if (foto) {
          formData.append('foto', foto)
        }

        const res = await apiFetch(`/actualizarProducto/${identificador}`, {
          method: 'PUT',
          
          body: formData
        })
        const data =  await res.json()
        
        if(res.error || data  == "erro  en la respuesta del servidor "){
            alert("problema en modificar el productpo ")}
        else if (res.ok || data.succeful){
            alert("producto actualizado con exito ") 
            setIdentificador("")
            setNombre("")
            setFoto(null)
            setDescription("")
            setPrecio("")
            setCantidad("")
        }
        else{
            alert(data.error || "Hubo un error al actualizar el producto")
        }
       }
       catch(error){
        console.error('Error al actualizar el producto:', error)
        alert('Error al actualizar el producto')
      
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
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setFoto(e.target.files[0])}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
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