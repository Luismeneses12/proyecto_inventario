import React from 'react'
import { useState } from 'react'

export default function eliminarRecetas() {
    const [identificacionRecetas, setIdentificacionRecetas] = React.useState("")
    const [message, setMessage] = React.useState("")
    
    try{
        const eliminarRecetas = async (e)=>{
            e.preventDefault()
        const res = await fetch(`http://127.0.0.1:5000/eliminarReceta/${identificacionRecetas}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        if(res.ok){
            setMessage(data.message)
            alert("Receta eliminada exitosamente")
        }
    }
    
    }
    catch(error){
        console.error('Error al eliminar la receta:', error)
    }

    return (
        <div className=''>
    <div className=' text-center text-green-500  border border-green-500 p-4 rounded-md '>eliminarRecetas</div>
    <form onSubmit={eliminarRecetas} className='flex flex-col items-center gap-4 mt-4'>
        <input
            type="text"
            placeholder="Identificación de la receta a eliminar"
            value={identificacionRecetas}
            onChange={(e) => setIdentificacionRecetas(e.target.value)}
            className='border border-gray-300 rounded-md p-2 w-64'
        />
        <button type="submit" className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300'>Eliminar Receta</button>
    </form>
    {message && <p className='text-center mt-4 text-red-500'>{message}</p>}

</div>
  )
}
