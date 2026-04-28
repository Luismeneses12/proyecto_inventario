import React from 'react'
import { useState } from 'react'

export default function Usuario() {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')

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
   <form action="" onSubmit={handleSubmit}>
       <input
           type="text"
           placeholder="Nombre"
           value={nombre}
           onChange={(e) => setNombre(e.target.value)}
       />
       <input
           type="email"
           placeholder="Correo"
           value={correo}
           onChange={(e) => setCorreo(e.target.value)}
       />
       <input
           type="password"
           placeholder="Contraseña"
           value={contraseña}
           onChange={(e) => setContraseña(e.target.value)}
       />
       <button type="submit">Registrar</button>
   </form>

   </>
  )
}
