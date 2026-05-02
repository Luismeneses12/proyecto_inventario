import React from 'react'

export default function Casa() {


return (
<div>
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-stone-50 dark:bg-stone-950 text-green-800 dark:text-green-400 border-b border-stone-200 dark:border-stone-800 shadow-sm shadow-green-900/5">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            menu
          </button>
          <h1 className="font-serif font-black text-green-900 dark:text-green-100 italic font-bold text-lg tracking-tight">
            Oro Verde
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined hover:opacity-80 transition-opacity scale-95 active:transition-transform">
            shopping_cart
          </button>
        </div>
      </header>

      <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto">
        {/* TITULO SECCIÓN */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Contacto</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Estamos aquí para acercarte la mejor cosecha. Tu opinión y tus dudas son nuestra prioridad para mantener la excelencia artesanal.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMNA IZQUIERDA - INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_16px_rgba(46,90,39,0.08)] border border-stone-100">
              <div className="flex items-center gap-4 mb-4 text-green-700">
                <span className="material-symbols-outlined text-3xl">chat</span>
                <h3 className="text-2xl font-semibold">¿Necesitas ayuda inmediata?</h3>
              </div>
              <p className="text-stone-600 mb-6">
                Nuestro equipo técnico y de cosecha está disponible para resolver tus inquietudes sobre pedidos, variedades o suscripciones.
              </p>
              <button className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-medium shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Atención personalizada por WhatsApp
              </button>
            </div>

            <div className="bg-stone-50 p-8 rounded-xl border border-stone-100">
              <h4 className="text-xs font-bold text-stone-400 uppercase mb-4 tracking-widest">Nuestra Comunidad</h4>
              <div className="flex gap-4 mb-6">
                <a className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" href="#!">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" href="#!">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 hover:scale-105 transition-transform" href="#!">
                  <span className="material-symbols-outlined">groups</span>
                </a>
              </div>
              <div className="space-y-4 text-stone-600">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-700">location_on</span>
                  <p>Valle de la Cosecha, Sector Artesanal Local 14, Región del Oro Verde.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-700">schedule</span>
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* BARRA DE ESTADO */}
            <div className="p-8 bg-stone-200 rounded-xl">
              <p className="text-sm font-bold text-green-800 mb-2">Estado de Cosecha Actual</p>
              <div className="w-full h-3 bg-stone-300 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-200" style={{ width: '70%' }}></div>
                <div className="h-full bg-green-700" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] uppercase font-bold text-stone-500">
                <span>Selección</span>
                <span>Listo para Entrega</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - FORMULARIO */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_24px_rgba(46,90,39,0.05)] border border-stone-50">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Formulario de Consultas</h3>
              <p className="text-stone-500 mb-8">Escríbenos y te responderemos en menos de 24 horas hábiles.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-600 px-1">Nombre Completo</label>
                    <input className="bg-stone-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-green-700 outline-none transition-shadow" placeholder="Ej: Maria García" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-stone-600 px-1">Correo Electrónico</label>
                    <input className="bg-stone-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-green-700 outline-none transition-shadow" placeholder="maria@ejemplo.com" type="email" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-stone-600 px-1">Asunto</label>
                  <select className="bg-stone-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-green-700 outline-none transition-shadow appearance-none">
                    <option>Consulta General</option>
                    <option>Suscripción Semanal</option>
                    <option>Eventos y Catering</option>
                    <option>Reclamos de Calidad</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-stone-600 px-1">Mensaje</label>
                  <textarea className="bg-stone-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-green-700 outline-none transition-shadow resize-none" placeholder="¿En qué podemos ayudarte hoy?" rows="5"></textarea>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <input className="w-5 h-5 rounded border-stone-300 text-green-700 focus:ring-green-700" type="checkbox" id="privacy" />
                  <label htmlFor="privacy" className="text-sm text-stone-600">Acepto la política de privacidad y tratamiento de datos artesanales.</label>
                </div>

                <button className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg mt-4 shadow-md hover:translate-y-[-2px] transition-all" type="submit">
                  Enviar Consulta
                </button>
              </form>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl text-green-800 italic font-serif">Expertos en frescura a tu servicio</p>
            </div>
          </div>
        </div>

        {/* COMPROMISO */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 items-center bg-stone-100 rounded-2xl overflow-hidden">
          <div className="p-12">
            <h4 className="text-3xl font-bold text-green-900 mb-4">Nuestro Compromiso</h4>
            <p className="text-lg text-stone-600 italic">
              "Cada aguacate que sale de nuestras tierras lleva el sello de una tradición familiar que respeta los tiempos de la naturaleza."
            </p>
          </div>
          <div className="h-64 md:h-full min-h-[400px]">
            <img 
              className="w-full h-full object-cover" 
              alt="Aguacate Hass maduro" 
              src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=1000" 
            />
          </div>
        </section>
      </main>

      {/* NAVEGACIÓN INFERIOR (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 h-20 bg-white/90 backdrop-blur-md border-t border-stone-100 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]">
        <a className="flex flex-col items-center justify-center text-stone-400 px-4 py-1 hover:text-green-700 transition-all" href="#!">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[11px] font-medium">Inicio</span>
        </a>
        <a className="flex flex-col items-center justify-center text-stone-400 px-4 py-1 hover:text-green-700 transition-all" href="#!">
          <span className="material-symbols-outlined">eco</span>
          <span className="text-[11px] font-medium">Tienda</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-green-50 text-green-900 rounded-xl px-4 py-1" href="#!">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-[11px] font-bold">Contacto</span>
        </a>
      </nav>
    </div>

    
)
}
