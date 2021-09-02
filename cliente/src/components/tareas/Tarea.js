import React, { useContext } from 'react'
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const Tarea = ({tarea}) => {

    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obtenerTareas, cambiarTarea, seleccionarTarea } = tareasContext

    const protectosContext = useContext(proyectoContext)
    const {proyecto} = protectosContext

    const tareaEliminar = (id) =>{
        eliminarTarea(id)
        obtenerTareas(proyecto.id)
    }

    const cambiarEstado = (tarea) =>{
        if(tarea.estado){
            tarea.estado = false
        }else{
            tarea.estado = true
        }
        cambiarTarea(tarea)
    }

    const guardarTarea = (tarea) =>{
        seleccionarTarea(tarea)
    }

    return (
            <li className="tarea sombra">
                <p>{tarea.nombre}</p>

                <div className="estado">
                    {
                        tarea.estado
                        ?(<button
                        type="button"
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                        >
                            Completo
                        </button>)
                        :(<button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                            >
                                Incompleto
                            </button>)

                    }
                </div>
                <div className="acciones">
                    <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => guardarTarea(tarea)}
                    >
                        Editar
                    </button>
                    <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea)}
                    >
                        Eliminar
                    </button>
                </div>
            </li>
    )
}

export default Tarea;