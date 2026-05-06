import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState  } from 'react'

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
    catch(error){
      console.error('Error al obtener los productos:', error)
    }
 }

  return (    
    <>
    <div >
        <div><h2>Catalogo de Productos</h2></div>
        <div>
            <button onClick={haldGet}>Obtener Productos</button>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.identificador}>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>

  )
}
