import React from 'react'
import { useState, useEffect } from 'react'
import { apiFetch , API_BASE_URL} from '../config'

export default function BusquedaReceta() {

   // 🔥 CORRECCIÓN 1: Unificamos a un solo estado 'receta' para el input y la URL
    const [titulo, setReceta] = useState("")
    // Inicializamos como un array vacío [] para que el primer render no falle nunca
    const [datos, setDatos] = useState([])

    const obtenerReceta = async (e) => {
        e.preventDefault()
        
        // Si el usuario da clic en buscar con el input vacío, frenamos la petición
        if (!titulo.trim()) {
            alert("Por favor escribe el nombre de una receta.")
            return
        }

        try {
            // 🔥 CORRECCIÓN 2: Usamos 'receta' en lugar de 'titulo' (que era undefined)
            const res = await apiFetch(`/buscarReceta/${titulo}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const data = await res.json()
            console.log("Respuesta del servidor:", data)

            if (res.ok) {
                // Si el backend responde exitosamente, guardamos el array de recetas
                // Nos aseguramos de que sea un array; si no lo es, le asignamos []
                setDatos(Array.isArray(data) ? data : [])
            } else {
                // 🔥 CORRECCIÓN 3: Si da 404 u otro error, limpiamos los datos anteriores
                // para que muestre el mensaje de "no hay resultados" en lugar de romperse
                console.warn(data.message || "Receta no encontrada")
                setDatos([]) 
            }
        }
        catch(error) {
            console.error('Error al obtener la receta:', error)
            setDatos([]) // Limpiamos en caso de error de red
        }
    }        
   
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
          
          {/* SECCIÓN DEL FORMULARIO DE BÚSQUEDA */}
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <form onSubmit={obtenerReceta} className="relative flex flex-col sm:flex-row gap-3 items-center bg-white p-3 rounded-2xl shadow-[0_4px_20px_rgba(46,90,39,0.06)] border border-stone-100">
              <div className="w-full relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-lg">🥑</span>
                <input 
                  type="text" 
                  // 🔥 CORRECCIÓN 4: Vinculado correctamente al estado 'receta'
                  value={titulo} 
                  onChange={(e) => setReceta(e.target.value)} 
                  placeholder="Busca una receta (ej: Guacamole, Ensalada...)"
                  className="w-full pl-11 pr-4 py-3 bg-stone-50/60 border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all text-sm font-medium text-stone-800"
                />
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Buscar Receta
              </button>
            </form>
          </div>

          {/* SECCIÓN DE RESULTADOS */}
          <div className="w-full">
            {/* 🔥 CORRECCIÓN 5: Usamos una doble validación segura: 
                Verificamos que 'datos' sea un Array Y que tenga elementos */}
            {Array.isArray(datos) && datos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {datos.map((item) => (
                  <div 
                    key={item.identificadorRecetas || item.identificacionRecetas} 
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(46,90,39,0.08)] transition-all duration-300 flex flex-col"
                  >
                    {/* Contenedor de Imagen de la Receta */}
                    <div className="w-full aspect-video bg-stone-100 overflow-hidden relative">
                      <img 
                        src={`${API_BASE_URL}${item.foto}`} 
                        alt={item.titulo}  
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-800 uppercase tracking-wide shadow-sm">
                        Receta Orgánica
                      </div>
                    </div>

                    {/* Textos y Detalles */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-stone-800 mb-4 group-hover:text-emerald-700 transition-colors line-clamp-1">
                        {item.titulo}
                      </h3>

                      <div className="space-y-4 flex-1">
                        <div>
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">Ingredientes</h4>
                          <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                            {item.ingredientes}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-stone-50">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400 mb-1">Instrucciones</h4>
                          <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                            {item.instrucciones}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Esta vista se renderizará de forma segura cuando no haya resultados o el backend de error */
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-stone-200 max-w-md mx-auto">
                <span className="text-4xl block mb-2">🍽️</span>
                <p className="text-stone-500 font-medium text-sm">No hay resultados en la búsqueda actual</p>
                <p className="text-stone-400 text-xs mt-1">Intenta ingresando palabras clave similares.</p>
              </div>
            )}
          </div>
            
        </div>
    )
  
}