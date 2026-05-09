import React from 'react'
import { useState } from 'react'

export default function Eliminarproducto() {
   const [productoID, setProductoID] = React.useState()
   
   const eliminar = async()=>{
    
    try
    {
        const res = await fetch(`http://127.0.0.1:5000/eliminarProducto/${productoid}`,
            {method:'DELETE',
            headers: {
                'Content-Type': 'application/json'       
            }
    })
        const data = await res.json()
        setProductoID(data)
        if(res.ok){
            alert('Producto eliminado exitosamente')
        }
        else{
        alert(data.message)
        } 
        }
    catch(error){
        console.error('Error al eliminar el producto:', error)
    }
}
    
    return (
    <>
    <div>Eliminarproducto</div>
    <form action="" onSubmit={eliminar}>
        <input type="text" placeholder="ID del producto" value={productoID} onChange={(e) => setProductoID(e.target.value)} />
        <button type="submit">Eliminar</button>
    </form>
    </>
    )
}
