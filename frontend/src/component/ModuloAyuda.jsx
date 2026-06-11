import React from 'react'

export default function ModuloAyuda({isOpen, onClose}) {
    if(!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg w-96">

        <h2 className="text-xl font-bold mb-4">
          Centro de Ayuda
        </h2>

        <p>
          Bienvenido al módulo de ayuda.
        </p>

        <ul className="mt-3">
          <li>• Cómo registrar información.</li>
          <li>• Cómo editar datos.</li>
          <li>• Preguntas frecuentes.</li>
        </ul>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>

      </div>

    </div>
  )
}
