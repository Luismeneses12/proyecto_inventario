import React from 'react'

export default function GetPorID() {
    const [productoID, setProductoID] = React.useState()
    const [producto, setProducto] = React.useState(null)
    const obtenerProductoPorID = async(e)=>{
        e.preventDefault()
        try{
            const res = await fetch(`http://127.0.0.1:5000/obtenerProductosPorID/${productoID}`, {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                }}
            )
            const data = await res.json()
            setProducto(data)
            console.log('Producto obtenido:', data);
        }
        catch(error){
            console.error('Error al obtener el producto:', error)
        }
    }
    return (
    <>
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            {/* Encabezado con Icono */}
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-indigo-700">
                <span className="material-symbols-outlined">search</span>
                Consultar Inventario
            </h2>

            <form onSubmit={obtenerProductoPorID} className="space-y-4">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="ID del producto" 
                        value={productoID}
                        onChange={(e) => setProductoID(e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    />
                    <button 
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl transition shadow-md flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>

                {/* Área de Resultados Robusta */}
                {producto ? (
                    <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 animate-fade-in">
                        <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">Resultado de la búsqueda</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-indigo-100 pb-1">
                                <span className="text-gray-500 text-sm">Nombre:</span>
                                <span className="font-bold text-gray-800">{producto.nombre}</span>
                            </div>
                            <div className="flex justify-between border-b border-indigo-100 pb-1">
                                <span className="text-gray-500 text-sm">Precio:</span>
                                <span className="font-bold text-green-600">${producto.precio}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Stock:</span>
                                <span className={`font-bold ${producto.cantidad > 0 ? 'text-gray-800' : 'text-red-500'}`}>
                                    {producto.cantidad} unidades
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-6 py-8 text-center border-2 border-dashed border-gray-100 rounded-xl">
                        <p className="text-gray-400 text-sm">Ingresa un ID para ver los detalles</p>
                    </div>
                )}
            </form>
        </div>
    </>
  )
}
