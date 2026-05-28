import React from 'react'
import { useState } from 'react'


export default function IngresarRecetas() {
    
    const [titulo, setTitulo] = React.useState("")
    const [foto , setFoto] = React.useState("")
    const [ingredientes, setIngredientes] = React.useState("")
    const [instrucciones, setInstrucciones] = React.useState("")

    const ingresarReceta = async( e) =>{
        e.preventDefault()
          try{
            const res = await fetch(' http://127.0.0.1:5000/recetaspost',
                {headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({
                    titulo: titulo,
                    foto: foto,
                    ingredientes: ingredientes,
                    instrucciones: instrucciones})
                })
                const data = await res.json()
              if(res.ok){
                alert("Receta ingresada correctamente")
              }
            
        }
        catch(error){
            console.error("Error al ingresar la receta:", error)
        }
    }
    return (
        <>
   <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
  <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Ingresar Receta
  </h1>
  
  <form onSubmit={ingresarReceta} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Título de la Receta</label>
      <input 
        type="text" 
        placeholder="Ej. Tarta de Manzana" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">URL de la Foto</label>
      <input 
        type="text" 
        placeholder="https://ejemplo.com/imagen.jpg" 
        value={foto} 
        onChange={(e) => setFoto(e.target.value)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Ingredientes</label>
      <input 
        type="text" 
        placeholder="Ej. Harina, huevos, azúcar..." 
        value={ingredientes} 
        onChange={(e) => setIngredientes(e.target.value)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Instrucciones</label>
      <input 
        type="text" 
        placeholder="Ej. Mezclar los ingredientes y hornear..." 
        value={instrucciones} 
        onChange={(e) => setInstrucciones(e.target.value)} 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
      />
    </div>

    <button 
      type="submit" 
      className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform active:scale-[0.98]"
    >
      Ingresar Receta
    </button>
  </form>
</div>
    </>
    )
}
