import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../style/StyleRegistro.css'

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
        </div>
   </>
  )
}
