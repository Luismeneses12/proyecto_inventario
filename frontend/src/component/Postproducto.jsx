import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import '../style/StyleRegistro.css'
import GetPorID from './GetPorID'
import Eliminarproducto from './Eliminarproducto'

export default function Postproducto() {
   const [nombre, setNombre] = React.useState("")
   const [descripcion, setDescription] = React.useState("")
   const [precio, setPrecio] = React.useState("")
   const [cantidad, setCantidad] = React.useState("")
   const navigate = useNavigate()

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res =   fetch('http://127.0.0.1:5000/productoPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          cantidad: cantidad
        })
      })
      const resultado = await res.json()
      alert(resultado.message)


    }
    catch(error){
      console.error('Error al enviar los datos:', error)
    }
  }
  return(
    <>
   <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* 1. TÍTULO Y NAVEGACIÓN */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Panel de Administración</h1>
          <p className="text-gray-500">Gestiona el inventario de la tienda</p>
        </div>
        <button 
          onClick={() => navigate('/tienda')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition shadow-md"
        >
          Ir a la Tienda
        </button>
      </div>

      {/* 2. CONTENEDOR GRID PRINCIPAL (Aquí ocurre la magia) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* COLUMNA 1: FORMULARIO POST */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-green-600">add_box</span>
            Crear Producto
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
              type="text" placeholder="Nombre" value={nombre}
              onChange={(e) => setNombre(e.target.value)} required
            />
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

        {/* COLUMNA 2: BUSCAR (GetPorID) */}
        <div className="lg:h-full">
           <GetPorID />
        </div>

        {/* COLUMNA 3: ELIMINAR */}
        <div className="lg:h-full">
           <Eliminarproducto />
        </div>

      </div>

      {/* NAVEGACIÓN MÓVIL (Opcional) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around p-4 shadow-2xl">
          <Link to="/" className="text-gray-400 hover:text-green-600">Inicio</Link>
          <Link to="/tienda" className="text-gray-400 hover:text-green-600">Tienda</Link>
      </nav>
    </div>
  )
    </>
  )
}
