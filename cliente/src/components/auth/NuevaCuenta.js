import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {


    // State para inicio de sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        nombre: '',
        confirmar: ''

    })

    //Extraer usuario

    const {email, password, nombre, confirmar} = usuario;

const onChange = (e) => {
    guardarUsuario({
        ...usuario, 
        [e.target.name] : e.target.value
    })
}

const onSubmit = (e) =>{
    e.preventDefault()


}


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                onSubmit={onSubmit}
                >

                    <div className="campo-form">    
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="nombre"
                        value={nombre}
                        onChange={onChange}
                        autoComplete="off"
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                        autoComplete="off"
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                        type="text"
                        id="confirmar"
                        name="confirmar"
                        placeholder="confirmar"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                        />
                    </div>
                    <Link 
                    to={'/login'}
                    className="enlace-cuenta"
                    >
                        Iniciar sesión
                    </Link>
                </form>
            </div>
        </div>
    )
}


export default Login