import React from 'react'
import { Link } from 'react-router-dom'

export default function PieDepagina() {
  
    return (
    <>
    <div className='w-full m-0 p-0 leanding-none h-25rem text-center  text-white py-6 border-t border-green-700 border-b border-green-700 bg-white-800'>
        <footer>
        <div className="bg-green-800 text-white py-6 text-center  border-t border-green-700">
            <p className="text-sm">&copy; 2026 Aguacateología. Todos los derechos reservados.</p>
        </div>
        <div>
            <div>
                <h4 className="text-xs font-bold text-green-600 uppercase mb-4 tracking-widest">Contáctanos</h4>
                <p className="text-stone-600 mb-6">
                    Si tienes preguntas, sugerencias o simplemente quieres decir hola, no dudes en contactarnos. Estamos aquí para ayudarte a disfrutar del mejor aguacate.
                </p>
                <p className="text-stone-600 mb-6">
                    Correo electrónico: ejemploCorreo@aguacateologia.com
                </p>
            </div>
            </div>
            <div>
                <h4 className="text-xs font-bold text-green-600 uppercase mb-4 tracking-widest">Síguenos en redes sociales</h4>
                <div className="flex gap-4">
                    <Link className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" to="#!">
                        <span className="material-symbols-outlined">public</span>
                    </Link>
                    <Link className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" to="#!">
                        <span className="material-symbols-outlined">photo_camera</span>
                    </Link>
                    <Link className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" to="#!">
                        <span className="material-symbols-outlined">groups</span>
                    </Link>
                </div>  
        </div>
        </footer>
    </div>
    </>
  )
}
