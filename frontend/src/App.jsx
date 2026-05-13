import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Usuario  from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import InicioDeseion from './component/InicioDeseion'
import Bienvenida from './component/Bienvenida'
import Casa from './component/Casa'
import PaginaPrincipal from './component/PaginaPrincipal'
import Postproducto from './component/Postproducto'
import Tienda from './component/Tienda'
import Navegador from './component/Navegador'


function App() {
  

  return (
    <>
     <div className="App-container">
      <header className='main-header'>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro">Registro</Link></li>            
            <li><Link to="/#">recetario</Link></li>
            <li><Link to="/inicio-sesion">login</Link></li>
            <li><Link to="/tienda">tienda</Link></li>
            
          </ul>
        
        </nav>
         {/* <Navegador/> */ } 
        <main className='content'>
        <Routes>
        <Route path="/" element={< PaginaPrincipal/>}/>
        <Route path="/registro" element={<Usuario />} />
        <Route path="/inicio-sesion" element={<InicioDeseion />} />
        <Route path="/usuario-get" element={<UsuarioGet />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/contacto" element={<Casa/>}/>
        <Route path="/postproducto" element={<Postproducto/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
      
      </Routes>
        </main>
      </header>
      
      </div> 

      

     
    </>
  )
}

export default App
