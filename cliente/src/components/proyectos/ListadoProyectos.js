import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



export const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const{ proyectos, obtenerProyectos } = proyectosContext;

    useEffect(() => {
        obtenerProyectos()
    }, [])

    //Si proyectos tienen contenido
    if(proyectos.length === 0) return null;

    return (
        <ul
        className="listado-proyectos"
        >
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                    key={proyecto.id} 
                    timeout={200}
                    classNames="tarea"
                    >
                        <Proyecto
                          proyecto={proyecto}
                 />
                    </CSSTransition>
                 
                ))}
            </TransitionGroup>
            
            
        </ul>
    )
}

export default ListadoProyectos;
