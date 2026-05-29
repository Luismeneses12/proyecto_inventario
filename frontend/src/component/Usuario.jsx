import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/StyleRegistro.css'

export default function Usuario() {
    
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    
    
    const [mostrarPassword, setMostrarPassword] = useState(false)
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const res = await fetch('http://127.0.0.1:5000/usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nombre: nombre,
                    correo: correo,
                    contraseña: contraseña 
                })
            }) 
            
            const resultado = await res.json()

           
            if (res.status === 400 || resultado.error === 'usuario_existente') {
                
                alert('⚠️ Este correo ya se encuentra registrado. Intenta iniciar sesión.')
            } else if (res.ok) {
                alert('🎉 ¡Usuario registrado exitosamente en Aguacateología!')
                
                
                setNombre('')
                setCorreo('')
                setContraseña('')
            } else {
                alert(resultado.message || 'Hubo un problema con el registro')
            }

        } catch (error) {
            console.error('Error al enviar los datos:', error)
            alert('Error de conexión con el servidor')
        }
    }

    return (
        <div className="register-container color-white flex justify-center items-center min-h-screen bg-stone-50">
            <div className="register-card max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-xl border border-emerald-50">
                <div className="text-center mb-6">
                    <span className="text-3xl">🥑</span>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">Crear Cuenta</h2>
                    <p className="text-sm text-gray-500">Ingresa para estar en más contacto con nosotros</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* INPUT NOMBRE CON ÍCONO */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            person
                        </span>
                        <input
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
                            type="text"
                            placeholder="Nombre completo"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </div>

                    {/* INPUT CORREO CON ÍCONO */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            mail
                        </span>
                        <input
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
                            type="email"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    {/* INPUT CONTRASEÑA CON ÍCONO Y BOTÓN MOSTRAR/OCULTAR */}
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            lock
                        </span>
                        <input
                            className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
                            type={mostrarPassword ? "text" : "password"} // Cambia dinámicamente entre text y password
                            placeholder="Contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                        {/* Botón de ojo dentro del input */}
                        <button
                            type="button"
                            onClick={() => setMostrarPassword(!mostrarPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 focus:outline-none"
                        >
                            <span className="material-symbols-outlined select-none">
                                {mostrarPassword ? 'visibility_off' : 'visibility'}
                            </span>
                        </button>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        Registrar Usuario
                    </button>
                   
                </form>

                <div className="mt-4 text-center">
                    <button 
                        type='button' 
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium focus:outline-none" 
                        onClick={() => navigate('/inicio-sesion')}
                    >
                        ¿Ya tienes cuenta? Inicia sesión aquí
                    </button>
                </div>
            </div>
        </div>
    )
}