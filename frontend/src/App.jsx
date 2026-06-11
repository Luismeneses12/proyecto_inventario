import { Children, useState , useEffect } from 'react'
import { Routes, Route, Link ,useNavigate, Navigate} from 'react-router-dom'

import Usuario from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import InicioDeseion from './component/InicioDeseion'
import Bienvenida from './component/Bienvenida'
import Casa from './component/Casa'
import PaginaPrincipal from './component/PaginaPrincipal'
import Postproducto from './component/Postproducto'
import Tienda from './component/Tienda'

import RecuperaContraseña from './component/RecuperaContraseña'
import ObtenerRecetas from './component/ObtenerRecetas'
import InformeVentas from './component/InformeVentas'
import ModuloAyuda from './component/ModuloAyuda'



const RutasProtegidas = ({ children }) => {
  const usuario = localStorage.getItem('userLogueado')
  if (!usuario) {
    return <Navigate to="/inicio-sesion" replace />
  }
  return children
}
function App() {
  const navigate = useNavigate()

  const [sesionActiva, setSesionActiva] = useState(false)

  useEffect (()=>{
    const usuario = localStorage.getItem('userLogueado')
    setSesionActiva(!!usuario)
  },[])

  const cerraSesion = ()=>{
    localStorage.removeItem('userLogueado')
    localStorage.removeItem('productoSeleccionado')
    setSesionActiva(false)
    alert('sesion cerrada correctamente. ')
    navigate('/inicio-sesion')
  }
  
   const [mostrarAyuda, setMostrarAyuda] = useState(false)

  return (
    
    <div className="min-h-screen w-full flex flex-col bg-stone-50">
      
      
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        
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
            {sesionActiva ? (
              <button 
                onClick={cerraSesion}
                className="bg-white-50 hover:bg-red-100 text-green-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-black-200 transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                Cerrar Sesión
              </button>
            ):
            (<Link 
              to="/inicio-sesion" 
              className="flex items-center gap-2 p-1.5 pr-4 bg-green-600 hover:bg-green-700 rounded-full border border-green-700/10 shadow-sm transition-all"
            >
              {/* Avatar / Imagen de Login */}
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 border border-white">
                <img 
                  src="icons8-login-50.png"
                  alt="Perfil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-white">Entrar</span>
            </Link>)}
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
          <Route path="/informeVentas" element=
          {<RutasProtegidas>
             <InformeVentas />
          </RutasProtegidas>
         } />
        </Routes>
      </main>
      {/*  modulo de ayuda*/}
      {/* CONTENEDOR FLOTANTE ESTÁTICO (Colócalo dentro de App.jsx para persistencia global) */}
<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
  <button 
    onClick={() => setMostrarAyuda(true)}
    className="group bg-white hover:bg-green-50 text-green-800 font-semibold px-3 py-4 rounded-l-2xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] border-l border-y border-stone-200 transition-all duration-300 flex flex-col items-center gap-1.5 active:scale-95 translate-x-2 hover:translate-x-0"
  >
    {/* Imagen/Icono con animación suave al pasar el mouse */}
    <img 
      src="icons8-help-30.png" 
      alt="Ayuda" 
      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
    />
    
    {/* Texto rotado o vertical para que ocupe menos espacio lateral */}
    <span className="text-[11px] uppercase tracking-wider font-bold writing-mode-vertical">
      Ayuda
    </span>
  </button>

  {/* Componente del Modal que se dispara */}
  <ModuloAyuda isOpen={mostrarAyuda} onClose={() => setMostrarAyuda(false)} />
</div>


      {/*navegacion  */}
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