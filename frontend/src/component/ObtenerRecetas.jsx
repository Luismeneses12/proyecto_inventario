import React, { useEffect } from 'react'
import { useState } from 'react'
import { apiFetch, API_BASE_URL } from '../config'
import BusquedaReceta from './BusquedaReceta'

export default function ObtenerRecetas() {

    const [datos, setDatos ] = React.useState([])
    
    const obtenerRecetas = async ()=>{
        
       
        
        try{
            const res = await apiFetch('/recetasget',
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
      <section className="w-full min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50/50 pt-8 pb-24">
  
      {/* Encabezado Introductorio de la Sección */}
    <div className="w-full max-w-4xl mx-auto text-center px-4 mb-6">
        <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
      Aguacateología Culinaria
    </span>
    <h2 className="text-3xl sm:text-4xl font-black text-stone-800 tracking-tight mt-3 mb-2">
      Recetas & Antojitos
    </h2>
    <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto">
      Explora formas creativas y saludables de integrar el aguacate en tu menú del día a día.
    </p>
  </div>

  {/* Contenedor del Componente Hijo */}
  <div className="w-50% max-w-4xl mx-auto px-4"> 
    <BusquedaReceta />
  </div>

</section>
     
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datos.map((receta) => (
                    <div key={receta.identificadorRecetas} className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{receta.titulo}</h2>
                        <img src={`${API_BASE_URL}/${receta.foto}`} alt={receta.titulo} className="w-full h-48 object-cover rounded-md mb-4" />
                        <p className="text-gray-600 mb-2"><strong>Ingredientes:</strong> {receta.ingredientes}</p>
                        <p className="text-gray-600"><strong>Instrucciones:</strong> {receta.instrucciones}</p>
                    </div>
                    
                ))}
            </div>
           
       
       
    </>
  )
}
