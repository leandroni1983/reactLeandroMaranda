import React from 'react'
import { useAuth } from '../context/AuthContext';
import GetPerfil from './GetPerfil';
function Perfil() {
    const { user, logOut } = useAuth()

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            {user ? <><h1>bienvenido {user.email} </h1> <button onClick={logOut} >LogOut</button> </> : <h4>Logeate para mas info</h4>}
            <GetPerfil />
        </div>
    )
}

export default Perfil
