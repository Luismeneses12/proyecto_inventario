import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ObtenerRecetas() {
    const [datos, setDatos ] = React.useState([])
    
    const obtenerRecetas = async ()=>{
        
       
        
        try{
            const res = await fetch('http://127.0.0.1:5000/recetasget',
                {
                    headers: {'Content-Type': 'application/json'},
                    method: 'GET',
                }
            )
            const data = await res.json()
                if(res.ok){
                    console.log("Recetas obtenidas correctamente")
                    setDatos(data)
                }
        }
        catch(error){
            console.error("Error al obtener las recetas:", error)
        }
    }

    useEffect(()=>{
        obtenerRecetas()
    },[])

    return (
    <>
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                recetas y antojitos </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datos.map((receta) => (
                    <div key={receta.identificadorRecetas} className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{receta.titulo}</h2>
                        <img src={`http://127.0.0.1:5000/${receta.foto}`} alt={receta.titulo} className="w-full h-48 object-cover rounded-md mb-4" />
                        <p className="text-gray-600 mb-2"><strong>Ingredientes:</strong> {receta.ingredientes}</p>
                        <p className="text-gray-600"><strong>Instrucciones:</strong> {receta.instrucciones}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    </>
  )
}
