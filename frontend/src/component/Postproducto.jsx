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
    <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">Crear Producto</h2>
                <p className="register-subtitle">Agrega un nuevo producto al inventario</p>
                
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        className="register-input"
                        type="text"
                        placeholder="Nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="text"
                        placeholder="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="numeric"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="numeric"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-register">Crear Producto</button>
                </form>

                <div className="login-link-container">
                    <button 
                        type='button' 
                        className="btn-link" 
                        onClick={() => navigate('/tienda')}
                    >
                      tienda   
                    </button>
                </div>
                <div className='login-link-container'>
                  <GetPorID/>
                </div>
                  <div >
                  <Eliminarproducto/>
                  </div>
            </div>
              <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]"  >
                    <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
                    <span className="material-symbols-outlined">home</span>
                    <Link to="/" className="font-serif text-[11px] font-medium">Inicio</Link>
                    </div>
                    <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
                    <span className="material-symbols-outlined">eco</span>
                    <Link to="/tienda">Tienda</Link>
                    </div>
                    <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
                    <span className="material-symbols-outlined">chat</span>
                    <Link to="/contacto" className="font-serif text-[11px] font-medium">Contacto</Link>
                    </div>
                    </nav>
          </div>
    </>
  )
}
