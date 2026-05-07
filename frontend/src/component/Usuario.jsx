import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../style/StyleRegistro.css'
import { Link } from 'react-router-dom'

export default function Usuario() {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
   const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
    try{        // Aquí puedes realizar la lógica para enviar los datos al backend o realizar otras acciones
        const res = await fetch('http://127.0.0.1:5000/usuario',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre:nombre, correo:correo, contraseña:contraseña })
        }) 
        const resultado = await res.json()
        alert(resultado.message)

    } catch (error) {
        console.error('Error al enviar los datos:', error)
    }
    }

    return (
   <>
   <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">Crear Cuenta</h2>
                <p className="register-subtitle">Únete al sistema de inventario</p>
                
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
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-register">Registrar Usuario</button>
                </form>

                <div className="login-link-container">
                    <button 
                        type='button' 
                        className="btn-link" 
                        onClick={() => navigate('/inicio-sesion')}
                    >
                        ¿Ya tienes cuenta? Inicia sesión aquí
                    </button>
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
