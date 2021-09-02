import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'


export const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext)
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext)
  const { tareasproyecto } = tareasContext
  
  //Si no hay ningun proyecto seleccionado 
  if(!proyecto) return <h2>Selecciona un proyecto</h2>

  //Extraer el array del proyecto

  return (
    <Fragment>
      <h2>{proyecto.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {
               tareasproyecto.map((tarea) => 
               <CSSTransition
               key={tarea.id}
               timeout={200}
               classNames="tarea"
               >
                  <Tarea  tarea={tarea} />
               </CSSTransition>)
            }
          </TransitionGroup>
          
        )}

        <button 
        types="button" 
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyecto.id)}
        >
          Eliminar proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
