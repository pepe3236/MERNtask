import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

export const Proyecto = ({proyecto}) => {

    const proyectosContext = useContext(proyectoContext)
        const { proyectoActual } = proyectosContext;

    const tareasContext = useContext(tareaContext)
        const { obtenerTareas } = tareasContext;

        //Funcion para agregar el proyecto actual
        const seleccionarProyecto = (proyecto) =>{
            proyectoActual(proyecto)// Fija un proyecto actual
            obtenerTareas(proyecto.id)
        }
 
    return (
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto)}
            >
            {proyecto.nombre}
            </button>
        </li>
    )
}

export default Proyecto
