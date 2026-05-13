import React from 'react'
import { Link } from 'react-router-dom'
export default function Navegador() {
  return (
    <>
     <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-stone-50 dark:bg-stone-950 text-green-800 dark:text-green-400 border-b border-stone-200 dark:border-stone-800 shadow-sm shadow-green-900/5">
        <div className="flex items-center gap-4">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity scale-95 active:transition-transform">menu</span>
        <span className="font-serif font-black text-green-900 dark:text-green-100 italic font-bold text-lg tracking-tight">Oro Verde</span>
        </div>
        <div className="flex items-center gap-4">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity scale-95 active:transition-transform">shopping_cart</span>
        </div>
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]"  >
        <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
        <span className="material-symbols-outlined">home</span>
        <span className="font-serif text-[11px] font-medium">Inicio</span>
        </div>
        <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
        <span className="material-symbols-outlined">eco</span>
        <Link to="/tienda">Tienda</Link>
        </div>
        <div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
        <span className="material-symbols-outlined">chat</span>
        <Link to="/contacto" className="font-serif text-[11px] font-medium">Contacto</Link>
        </div>
        </nav>
        </header>
    </>
  )
}
