import React from 'react'
import { useState, useEffect } from 'react'
import '../style/StyleLogin.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function InicioDeseion() {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const navigate = useNavigate()

    const haldSumit = async (e) => {
        e.preventDefault()
        
        try{
            const res = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo, contraseña })
            })
            const data = await res.json()
             if (res.ok) {
                console.log('Inicio de sesión exitoso:', data);
                navigate('/bienvenida');
             }else{
                alert(data.message|| 'crencial incorrecta')
             }
            }catch (error) {
            console.error('Error al iniciar sesión:', error)
            alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.')
            
        }
    }

    return (
    <>
       <div className="login-container">
            <div className="login-card">
                <div className="login-title">Inicio de Sesión</div>
                <form onSubmit={haldSumit} className="login-form">
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    <button type="submit" className="btn-primary">Iniciar sesión</button>
                    
                    {/* 3. Acción de navegación */}
                    <button 
                        type="button" 
                        className="btn-secondary"
                        onClick={() => navigate('/registro')} 
                    >
                        ¿No tienes cuenta? Regístrate
                    </button>
                </form>
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
