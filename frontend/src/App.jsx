import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Usuario from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import InicioDeseion from './component/InicioDeseion'
import Bienvenida from './component/Bienvenida'
import Casa from './component/Casa'
import PaginaPrincipal from './component/PaginaPrincipal'
import Postproducto from './component/Postproducto'
import Tienda from './component/Tienda'
import Navegador from './component/Navegador'
import RecuperaContraseña from './component/RecuperaContraseña'
import ObtenerRecetas from './component/ObtenerRecetas'

function App() {
  return (
    // Contenedor principal: Ocupa toda la pantalla y organiza los elementos verticalmente
    //min-h-screen w-full flex flex-col bg-stone-50
    <div className="min-h-screen w-full flex flex-col bg-stone-50">
      
      {/* MENÚ SUPERIOR (Navbar de ancho completo y pegajoso) */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        {/* max-w-7xl y mx-auto centran el contenido en pantallas grandes, w-full ocupa todo en móviles */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Lado Izquierdo: Logo y Enlaces (Desktop) */}
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-green-800 tracking-tight">
              AGUACATE<span className="text-gray-900">OLOGIA</span>
            </h1>
            
            {/* Enlaces de Navegación (Se ocultan en móvil, aparecen en md) */}
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link to="/" className="text-green-600 hover:text-green-800 font-medium transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-green-600 hover:text-green-800 font-medium transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/recetas" className="text-green-600 hover:text-green-800 font-medium transition-colors">
                  Recetario
                </Link>
              </li>
            </ul>
          </div>

          {/* Lado Derecho: Registro e Inicio de Sesión */}
          <div className="flex items-center gap-5">
            <Link 
              to="/registro" 
              className="hidden sm:block text-green-600 hover:text-green-800 text-sm font-semibold transition-colors"
            >
              Registro
            </Link>
            
            <Link 
              to="/inicio-sesion" 
              className="flex items-center gap-2 p-1.5 pr-4 bg-green-600 hover:bg-green-700 rounded-full border border-green-700/10 shadow-sm transition-all"
            >
              {/* Avatar / Imagen de Login */}
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 border border-white">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Perfil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-white">Entrar</span>
            </Link>
          </div>
          
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL DE LAS PÁGINAS */}
      {/* flex-1 hace que ocupe todo el espacio central. py-10 da espacio arriba/abajo. pb-28 evita que la barra de abajo tape el contenido */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 py-10 pb-28">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/registro" element={<Usuario />} />
          <Route path="/inicio-sesion" element={<InicioDeseion />} />
          <Route path="/usuario-get" element={<UsuarioGet />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/contacto" element={<Casa />} />
          <Route path="/postproducto" element={<Postproducto />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/recuperarcion" element={<RecuperaContraseña />} />
          <Route path="/recetas" element={<ObtenerRecetas />} />
        </Routes>
      </main>

      {/* NAVEGACIÓN INFERIOR (Mobile Fija Abajo) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 h-20 bg-white/90 backdrop-blur-md border-t border-stone-100 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]">
        <Link to="/" className="flex flex-col items-center justify-center text-stone-400 px-4 py-1 hover:text-green-700 transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[11px] font-medium">Inicio</span>
        </Link>
        
        <Link to="/tienda" className="flex flex-col items-center justify-center text-stone-400 px-4 py-1 hover:text-green-700 transition-all">
          <span className="material-symbols-outlined">eco</span>
          <span className="text-[11px] font-medium">Tienda</span>
        </Link>
        
        <Link to="/contacto" className="flex flex-col items-center justify-center bg-green-50 text-green-900 rounded-xl px-4 py-1 hover:bg-green-100 transition-all">
          <span className="material-symbols-outlined">chat</span>      
          <span className="text-[11px] font-bold">Contacto</span>
        </Link>
      </nav>

    </div>
  )
}

export default App