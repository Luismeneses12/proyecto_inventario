import { useState } from 'react'
import Usuario  from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import './App.css'
import InicioDeseion from './component/InicioDeseion'
import Bienvenida from './component/Bienvenida'
import Casa from './component/Casa'


import { Routes, Route, Link } from 'react-router-dom'
import PaginaPrincipal from './component/PaginaPrincipal'



function App() {
  

  return (
    <>
     <div className="App-container">
      <header className='main-header'>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/#">producto</Link></li>
            <li><Link to="/#">recetario</Link></li>
            <li><Link to="/inicio-sesion">login</Link></li>
            
          </ul>
        </nav>
        <main className='content'>
           <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/registro" element={<Usuario />} />
        <Route path="/inicio-sesion" element={<InicioDeseion />} />
        <Route path="/usuario-get" element={<UsuarioGet />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/paginaPrincipal" element={< PaginaPrincipal/>}/>

      </Routes>
        </main>
      </header>
      
      </div> 

      

     
    </>
  )
}

export default App
