import React from 'react'   
import { useState, useEffect } from 'react'


export default function UsuarioGet() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/usuarios')
                const data = await response.json()
                setUsuarios(data)
            } catch (error) {
                console.error('Error al obtener los usuarios:', error)
            }
        }

        fetchUsuarios()
    }, [])

    return (
    <div>
        <h2>Usuarios</h2>
        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>
                    <strong>{usuario.nombre}</strong> - {usuario.correo}
                </li>
            ))}
        </ul>
    </div>

)
}
