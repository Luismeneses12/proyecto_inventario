import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Usuario from './Usuario'

export default function Tienda() {

    const navigate = useNavigate()
    const [productos, setProductos] = useState([])
    
    const haldGet = async () => {
        try { 
            // 1. UNIFICADO: Usamos 127.0.0.1 de manera idéntica en todo el archivo
            const res = await fetch('http://127.0.0.1:5000/productosGet', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (res.ok) {
                console.log("Productos obtenidos correctamente")
                setProductos(data)
            }
        }
        catch(error) {
            console.error('Error al obtener los productos:', error)
        }
    }

    useEffect(() => {
        haldGet()
    }, [])

    return (    
        <div className='min-h-screen bg-stone-50/50 p-4 sm:p-8' >
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold text-green-800 mb-4">Nuestros Productos</h2>
                </header>

                {/* Contenedor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map((producto) => (
                        <div 
                            key={producto.identificador} 
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* 🔥 SOLUCIÓN DE IMAGEN: URL unificada con barra de escape y respaldo */}
                                <img 
                                // 🔥 LA SOLUCIÓN: Validamos si producto.foto existe antes de armar la URL de Flask
                                src={producto && producto.foto ? `http://127.0.0.1:5000/${producto.foto}` : "https://via.placeholder.com/400x300?text=Aguacate+Sin+Foto+🥑"} 
                                alt={producto?.nombre || "Producto"} 
                                className="w-full h-48 object-cover rounded-md mb-4" 
                                
                                // Respaldo extra por si el campo tiene texto pero el archivo físico no existe en el disco duro
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/400x300?text=Imagen+No+Encontrada+🥑"
                                }}
                                />

                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-green-700 mb-2">{producto.nombre}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {producto.descripcion}
                                    </p>
                                </div>
                            </div>

                            {/* Sección inferior fija por tarjeta */}
                            <div className="p-5 pt-0">
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-2xl font-extrabold text-green-800">
                                        ${producto.precio ? producto.precio.toLocaleString() : '0'}
                                    </span>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${producto.cantidad > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {producto.cantidad > 0 ? `Stock: ${producto.cantidad}` : 'Agotado'}
                                    </span>
                                </div>
                                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors shadow-md active:scale-[0.99] transform"
                                  
                                  onClick={()=>{ localStorage.setItem("productoSeleccionado", JSON.stringify(
                                    {identificador : producto.identificador,
                                    nombre: producto.nombre,
                                    descripcion: producto.descripcion,
                                    precio: producto.precio,
                                    cantidad: producto.cantidad,
                                    foto: producto.foto
                                     }
                                  ));
                                    navigate('/informeVentas')}}>
                                    Hacer pedido
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Mensaje de contingencia si la base de datos está vacía */}
            {productos.length === 0 && (
                <div className="text-center py-16 text-gray-400">
                    <span className="text-4xl">🥑</span>
                    <p className="mt-2 font-medium">No se encontraron productos disponibles por el momento.</p>
                </div>
            )}
        </div>
    )
}
