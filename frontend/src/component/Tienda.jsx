import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Tienda() {

    const navigate = useNavigate()
    const [productos, setProductos] = useState([])
    const  haldGet = async (e)=>{
    try{ 
        const res = await fetch('http://localhost:5000/productosGet',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setProductos(data)
    }
    catch(error){console.error('Error al obtener los productos:', error)
    }
    }

  return (    
    <>
    <div >
       <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Catálogo de Productos</h2>
                    <button 
                        onClick={haldGet}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
                    >
                        Actualizar Inventario
                    </button>
                </header>

                {/* Contenedor Grid: Se adapta de 1 a 3 columnas según el tamaño de pantalla */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map((producto) => (
                        <div 
                            key={producto.identificador} 
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Espacio para imagen (puedes usar un placeholder por ahora) */}
                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">Imagen del producto</span>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{producto.nombre}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {producto.descripcion}
                                </p>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-extrabold text-blue-600">
                                        ${producto.precio.toLocaleString()}
                                    </span>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${producto.cantidad > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {producto.cantidad > 0 ? `Stock: ${producto.cantidad}` : 'Agotado'}
                                    </span>
                                </div>

                                <button className="w-full mt-6 bg-gray-900 hover:bg-black text-white font-bold py-2 rounded-lg transition-colors">
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       
       <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]"  >
       <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
       <span className="material-symbols-outlined">home</span>
       <Link to="/" className="font-serif text-[11px] font-medium">Inicio</Link>
       </div>
       <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
       <span className="material-symbols-outlined">eco</span>
       <Link to="/tienda">Tienda</Link>
       </div>
       <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
       <span className="material-symbols-outlined">chat</span>
       <Link to="/contacto" className="font-serif text-[11px] font-medium">Contacto</Link>
       </div>
       </nav>
    </div>
    </>
    )
}
