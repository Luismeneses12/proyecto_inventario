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
    <div>GetPorID</div>
        <form action="" onSubmit={obtenerProductoPorID}>
        < input  type="text" placeholder="ID del producto"  onChange={(e)=> setProductoID(e.target.value)} />
        <button type="submit">Obtener Producto</button>
        {producto && (
            <div>
                <h2>Producto obtenido:</h2>
                <p><strong>Nombre:</strong> {producto.nombre}</p>
                <p><strong>Precio:</strong> {producto.precio}</p>
                <p><strong>Stock:</strong> {producto.stock}</p>
            </div>
        )}
        </form>
    </>
  )
}
