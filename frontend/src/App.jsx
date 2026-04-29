import { useState } from 'react'
import Usuario  from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import './App.css'
import InicioDeseion from './component/InicioDeseion'
import Bienvenida from './component/Bienvenida'

import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    <>
      <h1>Hola Mundo</h1>
      <Routes>
        <Route path="/" element={<InicioDeseion />} />
        <Route path="/registro" element={<Usuario />} />
        <Route path="/usuario-get" element={<UsuarioGet />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
      </Routes>
    </>
  )
}

export default App
