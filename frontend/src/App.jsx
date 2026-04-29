import { useState } from 'react'
import Usuario  from './component/Usuario'
import UsuarioGet from './component/UsuarioGet'
import './App.css'
import InicioDeseion from './component/InicioDeseion'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    <>
      <h1>Hola Mundo</h1>
      <Routes>
        <Route path="/" element={<InicioDeseion />} />
        <Route path="/registro" element={<Usuario />} />
        <Route path="/usuario-get" element={<UsuarioGet />} />
      </Routes>
    </>
  )
}

export default App
