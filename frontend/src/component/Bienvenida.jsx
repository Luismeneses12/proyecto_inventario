import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Importaciones de tus componentes de gestión actuales
import PerfilDeUsuario from './PerfilDeUsuario'
import Postproducto from './Postproducto'
import IngresarRecetas from './IngresarRecetas'
import GetPorID from './GetPorID'
import ActualizacionProductos from './ActualizacionProductos'
import Eliminarproducto from './Eliminarproducto'
import EliminarRecetas from './EliminarRecetas'


export default function Bienvenida() {
  const navigate = useNavigate()
  
   //stado para controlar qué sección o componente se visualiza en el panel principal
  const [seccionActiva, setSeccionActiva] = useState('resumen')

   //Listado de módulos para el menú lateral
  const menuModulos = [
    { id: 'resumen', nombre: '📊 Vista General', categoria: 'Métricas' },
    { id: 'post-prod', nombre: '➕ Registrar Producto', categoria: 'Inventario' },
    { id: 'act-prod', nombre: '🔄 Actualizar Stock', categoria: 'Inventario' },
    { id: 'elim-prod', nombre: '🗑️ Eliminar Producto', categoria: 'Inventario' },
    { id: 'buscar-id', nombre: '🔍 Buscar por ID', categoria: 'Herramientas' },
    { id: 'post-rece', nombre: '🥑 Ingresar Recetas', categoria: 'Contenido' },
    { id: 'elim-rece', nombre: '❌ Eliminar Recetas', categoria: 'Contenido' },
  ]

  return (
    <div className="flex min-h-screen bg-stone-100/60 font-sans text-stone-800">
      
      {/* 1. SIDEBAR O PANEL LATERAL ESTÁTICO */}
      <aside className="w-64 bg-stone-900 text-stone-200 flex flex-col fixed h-full z-30 shadow-xl border-r border-stone-800">
        {/* Marca / Logo del Dashboard */}
        <div className="p-6 border-b border-stone-800 bg-stone-950 flex items-center gap-2">
          <span className="text-2xl">🥑</span>
          <div>
            <h1 className="font-black text-white text-sm tracking-wider uppercase">Aguacateología</h1>
            <p className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">Admin Panel</p>
          </div>
        </div>

        {/* Links del Menú de Navegación Lateral */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          <div>
            <p className="text-[10px] font-extrabold text-stone-500 uppercase tracking-widest px-3 mb-2">Navegación</p>
            <button
              onClick={() => setSeccionActiva('resumen')}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                seccionActiva === 'resumen' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'hover:bg-stone-800 text-stone-400'
              }`}
            >
              📊 Cuadro de Mando
            </button>
          </div>

          {/* Agrupación dinámica por categorías */}
          {['Inventario', 'Contenido', 'Herramientas'].map((cat) => (
            <div key={cat} className="space-y-1">
              <p className="text-[10px] font-extrabold text-stone-500 uppercase tracking-widest px-3 mb-2">{cat}</p>
              {menuModulos.filter(m => m.categoria === cat).map((modulo) => (
                <button
                  key={modulo.id}
                  onClick={() => setSeccionActiva(modulo.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    seccionActiva === modulo.id 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
                      : 'hover:bg-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {modulo.nombre}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Botón de salida al final del Sidebar */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/50">
          <button 
            onClick={() => navigate('/tienda')}
            className="w-full bg-stone-800 hover:bg-emerald-700 hover:text-white text-stone-300 text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            🛒 Ir a la Tienda Pública
          </button>
        </div>
      </aside>

      {/* 2. ÁREA DE CONTENIDO PRINCIPAL (Desplazada a la derecha por el ancho del sidebar) */}
      <main className="flex-1 pl-64 min-h-screen flex flex-col">
        
        {/* Barra superior de control (Top Bar) */}
        <header className="h-16 bg-white border-b border-stone-200/80 px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-400">Dashboard</span>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-bold text-stone-700 capitalize">{seccionActiva.replace('-', ' ')}</span>
          </div>
          {/* Perfil flotante */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-stone-800">Alfredo Gallo</p>
              <p className="text-[10px] text-stone-400 font-semibold">Administrador Principal</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-bold text-emerald-800 border border-emerald-200">
              AG
            </div>
          </div>
        </header>

        {/* Zona Dinámica de Trabajo */}
        <div className="p-8 flex-1">
          
          {/* SECCIÓN RENDEREADA POR DEFECTO: METRICAS Y GRÁFICOS */}
          {seccionActiva === 'resumen' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Tarjetas de Estadísticas Rápidas (KPI Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Venta Mayorista</span>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">+12.5%</span>
                  </div>
                  <h3 className="text-2xl font-black text-stone-800">$4,820,000</h3>
                  <p className="text-[11px] text-stone-400 mt-1">Facturación total acumulada</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pedidos Solicitados</span>
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Pendientes</span>
                  </div>
                  <h3 className="text-2xl font-black text-stone-800">38 Órdenes</h3>
                  <p className="text-[11px] text-stone-400 mt-1">Por coordinar logística de envío</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Clientes Activos</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Nuevos</span>
                  </div>
                  <h3 className="text-2xl font-black text-stone-800">142 Usuarios</h3>
                  <p className="text-[11px] text-stone-400 mt-1">Registrados en el canal digital</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Kilos de Aguacate</span>
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Crítico</span>
                  </div>
                  <h3 className="text-2xl font-black text-stone-800">450 Kg</h3>
                  <p className="text-[11px] text-stone-400 mt-1">Stock de contingencia en bodega</p>
                </div>
              </div>

              {/* SECCIÓN DE GRÁFICOS ANALÍTICOS DE VENTAS Y CLIENTES */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Gráfico 1: Desempeño Comercial Mensual */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col">
                  <h4 className="text-sm font-bold text-stone-800 mb-1">Volumen de Rendimiento Comercial</h4>
                  <p className="text-xs text-stone-400 mb-6">Comparativa monetaria mensual entre pedidos entregados.</p>
                  
                  {/* Simulación visual de barras estadísticas de alta fidelidad con CSS */}
                  <div className="flex-1 flex items-end justify-between gap-4 h-48 pt-4 px-2 border-b border-l border-stone-100">
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="w-full bg-stone-100 group-hover:bg-emerald-600/20 h-24 rounded-t-lg transition-all relative">
                        <div className="absolute bottom-0 left-0 w-full bg-emerald-500 h-1/2 rounded-t-lg"></div>
                      </div>
                      <span className="text-[10px] font-bold text-stone-400">Mar</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="w-full bg-stone-100 group-hover:bg-emerald-600/20 h-36 rounded-t-lg transition-all relative">
                        <div className="absolute bottom-0 left-0 w-full bg-emerald-500 h-2/3 rounded-t-lg"></div>
                      </div>
                      <span className="text-[10px] font-bold text-stone-400">Abr</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="w-full bg-stone-100 group-hover:bg-emerald-600/20 h-40 rounded-t-lg transition-all relative">
                        <div className="absolute bottom-0 left-0 w-full bg-emerald-600 h-4/5 rounded-t-lg shadow-lg shadow-emerald-600/10"></div>
                      </div>
                      <span className="text-[10px] font-bold text-stone-700">May</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="w-full bg-stone-100 group-hover:bg-emerald-600/20 h-28 rounded-t-lg transition-all relative">
                        <div className="absolute bottom-0 left-0 w-full bg-emerald-500 h-1/3 rounded-t-lg"></div>
                      </div>
                      <span className="text-[10px] font-bold text-stone-400">Jun</span>
                    </div>
                  </div>
                </div>

                {/* Gráfico 2: Comportamiento de Clientes (Distribución de Canales) */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col">
                  <h4 className="text-sm font-bold text-stone-800 mb-1">Origen de Clientes</h4>
                  <p className="text-xs text-stone-400 mb-6">Tráfico de compradores mayoristas.</p>
                  
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-600 mb-1">
                        <span>Plataforma Web Directa</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-600 mb-1">
                        <span>Llamadas / Fuerza Comercial</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-stone-700 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-600 mb-1">
                        <span>Recomendados / Voz a Voz</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMPONENTES INYECTADOS CONDICIONALMENTE SEGÚN SELECCIÓN DEL PANEL LATERAL */}
          <div className="max-w-4xl">
            {seccionActiva === 'post-prod' && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><Postproducto /></div>}
            {seccionActiva === 'act-prod'  && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><ActualizacionProductos /></div>}
            {seccionActiva === 'elim-prod' && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><Eliminarproducto /></div>}
            {seccionActiva === 'buscar-id' && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><GetPorID /></div>}
            {seccionActiva === 'post-rece' && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><IngresarRecetas /></div>}
            {seccionActiva === 'elim-rece' && <div className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm"><EliminarRecetas /></div>} 
          </div>

        </div>
      </main>
    </div>
  )
}