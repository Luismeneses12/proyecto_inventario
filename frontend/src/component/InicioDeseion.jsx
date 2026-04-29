import React from 'react'
import { useState, useEffect } from 'react'
import '../style/StyleLogin.css'
import { useNavigate } from 'react-router-dom'


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
        </div>
    </>
)
}
