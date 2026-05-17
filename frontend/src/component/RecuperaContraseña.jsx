import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function RecuperaContraseña() {
  const [correo, setCorreo] = React.useState('');
  const navegate = useNavigate()


    const recuperaContraeña = async(e)=>{
        e.preventDefault()
        try{
            const res = await fetch( `http://127.0.0.1:5000/recuperar_contraeña/${correo}`,
                {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
             )
                const data = await res.json();
                if(data.correo){
                    alert("revisar correro para actualizar contraseña ")
                }
        }

        catch(error){
            console.error('Error al recuperar la contraseña:', error)
        }
    }

    return (
        <>  <div>olvidarContraseña</div>
    <form action="">
        <input type="email" placeholder='correo' value={correo} onChange={(e)=>{setCorreo(e.target.value)}} />
        <button type='submit'>Enviar</button>
        <button type='button' onClick={()=>navegate('/inicio-sesion')}>Regresar</button>
    </form>
    </>
  
  )
}

