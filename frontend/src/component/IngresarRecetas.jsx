import React from 'react'
import { useState } from 'react'


export default function IngresarRecetas() {
    const [titulo, setTitulo] = useState("")
  
    const [foto, setFoto] = useState(null)
    const [ingredientes, setIngredientes] = useState("")
    const [instrucciones, setInstrucciones] = useState("")

    const ingresarReceta = async (e) => {
        e.preventDefault()
        
        try {
            // 2. Usamos FormData para empaquetar textos y archivos juntos
            const formData = new FormData()
            formData.append('titulo', titulo)
            formData.append('ingredientes', ingredientes)
            formData.append('instrucciones', instrucciones)
            
            // Adjuntamos el archivo real de la foto si existe
            if (foto) {
                formData.append('foto', foto)
            }

            // 3. ATENCIÓN: Verifica si tu backend usa prefijo. 
            // Si registraste el blueprint con url_prefix='/recetas', la URL debe ser: 'http://127.0.0.1:5000/recetas/postReceta'
            const res = await fetch('http://127.0.0.1:5000/postReceta', {
                method: 'POST',
                // IMPORTANTE: NO pongas 'Content-Type': 'application/json'. 
                // Al quitarlo, el navegador configura automáticamente el "multipart/form-data" necesario para archivos.
                body: formData 
            })

            const data = await res.json()
            
            if (res.ok) {
                alert("🎉 ¡Receta ingresada correctamente en Aguacateología!")
                // 4. Limpiamos los inputs restableciendo los estados a su valor inicial
                setTitulo("")
                setFoto(null)
                setIngredientes("")
                setInstrucciones("")
            } else {
                alert(data.error || "Hubo un error al guardar la receta")
            }
            
        } catch (error) {
            console.error("Error al ingresar la receta:", error)
            alert("Error de conexión con el servidor")
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Ingresar Receta
            </h1>
            
            <form onSubmit={ingresarReceta} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título de la Receta</label>
                    <input 
                        type="text" 
                        placeholder="Ej. Guacamole Especial" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Foto de la Receta</label>
                    <input 
                        type="file" 
                        accept="image/*" // Restringe el selector solo a imágenes
                        // En inputs de tipo file NO se usa value={foto}. Se captura mediante e.target.files[0]
                        onChange={(e) => setFoto(e.target.files[0])} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ingredientes</label>
                    <input 
                        type="text" 
                        placeholder="Ej. 2 Aguacates, 1 Limón, sal..." 
                        value={ingredientes} 
                        onChange={(e) => setIngredientes(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instrucciones</label>
                    <textarea 
                        placeholder="Ej. Machacar los aguacates y agregar el jugo de limón..." 
                        value={instrucciones} 
                        onChange={(e) => setInstrucciones(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 h-24 resize-none"
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
    )
}
