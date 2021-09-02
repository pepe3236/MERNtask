import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {


    // State para inicio de sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //Extraer usuario

    const {email, password} = usuario;

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
                <h1>Inicio de sesión</h1>

                <form
                onSubmit={onSubmit}
                >
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
                        <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Iniciar Sesión"
                        />
                    </div>
                    <Link 
                    to={'/nuevaCuenta'}
                    className="enlace-cuenta"
                    >
                        Registrarse
                    </Link>
                </form>
            </div>
        </div>
    )
}


export default Login