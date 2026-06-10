import React from 'react'
import PerfilDeUsuario from './PerfilDeUsuario'
import Postproducto from './Postproducto'
import IngresarRecetas from './IngresarRecetas'
export default function Bienvenida() {
  
    return (
      <>
        <div className='text-center '> <div>
          <h1><p className='text-black-500  text-4xl  ' > Bienvendio a tu panel de adminitracion </p></h1></div>
          <div>
            
            </div> 
          </div>
         <div className=' '>
                <Postproducto/>
          </div>
         
         
      </>
    )
}
