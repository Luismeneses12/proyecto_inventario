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
    
      
   <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      
      {/* Lado Izquierdo: Logo o Nombre del Proyecto */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-indigo-600 tracking-tight">
          AGUACATE<span className="text-gray-900">OLOGIA</span>
        </h1>
        
        {/* Enlaces de Navegación (Desktop) */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/tienda" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              Recetario
            </Link>
          </li>
         
        </ul>
      </div>

      {/* Lado Derecho: Registro e Inicio de Sesión */}
      <div className="flex items-center gap-4">
        <Link 
          to="/registro" 
          className="hidden sm:block text-gray-500 hover:text-gray-700 text-sm font-semibold"
        >
          Registro
        </Link>
        
        <Link 
          to="/inicio-sesion" 
          className="flex items-center gap-2 p-1 pr-4 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-all"
        >
          {/* Avatar / Imagen de Login */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 border border-white">
            <img 
              src="https://via.placeholder.com/150" // Reemplaza por tu assets/logologin.jpg
              alt="Perfil" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-bold text-gray-700">Entrar</span>
        </Link>
      </div>
      
    </div>
  </nav>
</header>
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

      

     
    </>
  )
}

export default App
