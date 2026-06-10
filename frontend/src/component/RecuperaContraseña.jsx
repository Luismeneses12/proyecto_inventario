import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function RecuperaContraseña() {
  const [correo, setCorreo] = React.useState('');
  const navegate = useNavigate()


    const recuperaContraeña = async(e)=>{
        e.preventDefault()
        try{
            const res = await fetch( `http://127.0.0.1:5000/recuperar_contraeña/${correo}`,
                {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
             )
                const data = await res.json();
                if(data.correo){
                    alert("revisar correro para actualizar contraseña ")
                }
        }

        catch(error){
            console.error('Error al recuperar la contraseña:', error)
        }
    }

    return (
    <>
        <div className="min-h-[60px] max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border border-emerald-50">
  {/* Encabezado Temático */}
  <div className="text-center mb-6">
    <div className="inline-flex p-3 bg-emerald-50 rounded-full text-emerald-600 mb-3">
      {/* Icono simple o texto decorativo */}
      <span className="text-2xl">🥑</span>
    </div>
    <h1 className="text-2xl font-bold text-gray-800">¿Olvidaste tu contraseña?</h1>
    <p className="text-sm text-gray-500 mt-1">
      No te preocupes, dinos tu correo y te ayudaremos a saborear la Aguacateología de nuevo.
    </p>
  </div>

  {/* Formulario */}
  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Correo Electrónico
      </label>
      <input 
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400" 
        type="email" 
        placeholder="tu-correo@ejemplo.com" 
        value={correo} 
        onChange={(e) => setCorreo(e.target.value)} 
      />
    </div>

    {/* Botones */}
    <div className="space-y-2 pt-2">
      <button 
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform active:scale-[0.98]"
      >
        Enviar enlace de recuperación
      </button>
      
      <button 
        type="button" 
       
        className="w-full bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 rounded-lg transition duration-200 text-sm text-center block"
      ><Link to='/inicio-sesion' >Regresar al inicio de sesión</Link>  
      </button>
    </div>
  </form>
</div>
    </>
  
  )
}

