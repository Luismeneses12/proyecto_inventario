import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EstableserContrasena() {
    const navigation = useNavigate()
  const [codigo, setCodigo] = useState("")
  const [contraseña, setContraseña] = useState("")
 

    const verificarCambiar = async (e)=>{

        e.prevedefault()

        try{
            const res = await fetch("http://127.0.0.1:5000/modificarContrasena",
            {method: ['PUT','POST'],
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({codigoVerificacion: codigo, contraseña: contraseña})
        }
    )
      data = await res.json()      

        }
        catch(e){
            console.log(e)
        }

    }

    return (
        <>
        <div>
            <form action="" onSubmit={verificarCambiar}>
                <div>
                    <input 
                    type="text" 
                    value={codigo} 
                    onChange={(e)=>{setCodigo(e.target.value)}}
                    placeholder='1266554'
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    value={contraseña} 
                    onChange={(e)=>{setContraseña(e.target.value)}}
                    placeholder='contraseña'
                    required />
                </div>
                <div className='p-10 m-10 text-black-600 bg-green- 600 text-center '><button type='submit '>Estableser contraseña</button></div>
                
                <div className='p-10 m-10 text-black-600 bg-green- 600 text-center '><button onClick={navigation("/inicio-sesion")}>volver </button></div>
                
            </form>
            
        </div>
        </>
    
)
}
