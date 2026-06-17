import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import '../style/StyleRegistro.css'



import { apiFetch } from '../config'

export default function Postproducto() {
     const [nombre, setNombre] = useState("")
     const [foto, setFoto] = useState(null)

    const [descripcion, setDescription] = useState("")
    const [precio, setPrecio] = useState("")
    const [cantidad, setCantidad] = useState("")

    const ingresarProducto = async(e) =>{
      e.preventDefault()
      try {
        const formData = new FormData()
        formData.append('nombre', nombre)
        formData.append('descripcion', descripcion)
        formData.append('precio', precio)
        formData.append('cantidad', cantidad)
        if (foto) {
          formData.append('foto', foto)
        }
         const res = await apiFetch('/productoPost', {
          method: 'POST',
          body: formData
        })
        const data = await res.json()

        if (res.ok) { 
          alert("🎉 ¡Producto ingresado correctamente en el inventario!")
          setNombre("")
          setDescription("")
          setPrecio("")
          setCantidad("")
          setFoto(null)
        } else {
          alert(data.error || "Hubo un error al guardar el producto")
        }
      }
        catch (error) {
          console.error("Error al ingresar el producto:", error)
          alert("Error de conexión con el servidor")
      }
    }
  return(
    <>
   <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      
     
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
       
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-green-600">add_box</span>
            Crear Producto
          </h2>
          <form onSubmit={ingresarProducto} className="flex flex-col gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
              type="text" placeholder="Nombre" value={nombre}
              onChange={(e) => setNombre(e.target.value)} 
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Foto producto </label>
                    <input 
                        type="file" 
                        accept="image/*" 
                       
                        onChange={(e) => setFoto(e.target.files[0])} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"           
                    />
            </div> 
            <textarea
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="Descripción" value={descripcion}
              onChange={(e) => setDescription(e.target.value)} required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                type="number" placeholder="Precio" value={precio}
                onChange={(e) => setPrecio(e.target.value)} required
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                type="number" placeholder="Stock" value={cantidad}
                onChange={(e) => setCantidad(e.target.value)} required
              />
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
              Guardar en Inventario
            </button>
          </form>
        </div>

       
      </div>

      
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around p-4 shadow-2xl">
          <Link to="/" className="text-gray-400 hover:text-green-600">Inicio</Link>
          <Link to="/tienda" className="text-gray-400 hover:text-green-600">Tienda</Link>
      </nav>
    </div>
  
    </>
  )
}
