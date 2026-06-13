import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EstableserContrasena() {
  const navigate = useNavigate()
  const [codigo, setCodigo] = useState("")
  const [contraseña, setContraseña] = useState("")

  const verificarCambiar = async (e) => {
    e.preventDefault()
    
    try {
      // 🔥 CORRECCIÓN CRÍTICA: Cambiado ['POST','PUT'] por un string único "POST"
      const res = await fetch("http://127.0.0.1:5000/modificarContrasena", {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          codigoVerificacion: codigo, 
          contraseña: contraseña 
        })
      })
      
      const data = await res.json()
      
      if (res.ok) {
        alert("🎉 Contraseña restablecida con éxito")
        navigate("/inicio-sesion")
      } else {
        alert(data.error || data.message || "Error al restablecer la contraseña")
      }
    } catch (error) {
      console.error("Error de red o CORS:", error)
      alert("No se pudo conectar con el servidor. Verifica tu backend.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-2">Restablecer Contraseña</h2>
      <p className="text-gray-500 text-xs text-center mb-6">Ingresa el código enviado a tu correo junto a tu nueva clave.</p>
      
      <form onSubmit={verificarCambiar} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Código de Verificación</label>
          <input 
            type="text" 
            value={codigo} 
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Ej: 1266554"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500 transition-all"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1 uppercase">Nueva Contraseña</label>
          <input 
            type="password" 
            value={contraseña} 
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Escribe tu nueva contraseña"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500 transition-all"
            required
          />
        </div>

        {/* 🔥 CORRECCIÓN: Botón con type='submit' perfectamente escrito sin espacios */}
        <button 
          type="submit" 
          className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
        >
          Establecer Contraseña
        </button>
        
        <button 
          type="button" 
          onClick={() => navigate("/inicio-sesion")}
          className="w-full text-center text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors pt-2"
        >
          Volver al inicio de sesión
        </button>
      </form>
    </div>
  )
}
