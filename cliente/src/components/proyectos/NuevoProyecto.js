import React, { Fragment, useState, useContext } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext'


export const NuevoProyecto = () => {

  const proyectosContext = useContext(proyectoContext)

  const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext

  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  })

  const onchangeProyecto = (e) =>{
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  const onsubmitProyecto = (e) =>{
    e.preventDefault();

    //Validar el proyecto
    if(nombre === ''){
      mostrarError()
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto)

    //Reiniciar el form
    guardarProyecto({
      nombre: ''
    })

  }

  const {nombre} = proyecto

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario"
      onClick={() => mostrarFormulario()}
      >
        Nuevo proyecto
      </button>

      {
        formulario
        ?(
          <form 
      className="formulario-nuevo-proyecto"
      onSubmit={onsubmitProyecto}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre proyecto"
          name="nombre"
          onChange={onchangeProyecto}
          value={nombre}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar proyecto"
        />
      </form>
        ) : null
      }
      {
        errorFormulario 
        ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>
        : null
      }
    </Fragment>
  );
};

export default NuevoProyecto;
