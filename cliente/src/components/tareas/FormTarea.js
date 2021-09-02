import React, { Fragment, useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import Tarea from './Tarea'

export const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext)
    const { mostrarError, agregarTareas, errorFormularioTareas, 
        tareaSeleccionada, obtenerTareas, cambiarAgregar, mostrarCambio } = tareasContext

    const [tarea, guardarTareas] = useState({
        nombre: ''
    })

    useEffect(() => {
        if(tareaSeleccionada !== null){
            guardarTareas (tareaSeleccionada)
        }else{
            guardarTareas({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    const onchangeTarea = (e) =>{
        guardarTareas({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const cambiarParaEditarOagregar = (tarea, tareaSeleccionada) =>{
        if(tareaSeleccionada === null){
         cambiarAgregar()   
        }else{
         mostrarCambio(tarea)   
        }
        
        
    }
    

    const onsubmitTarea = (e) =>{
        e.preventDefault()

        //Validacion
        if(nombre === ''){
            mostrarError()
            return
        }

        if(tareaSeleccionada === null){
           tarea.proyectoId = proyecto.id
            tarea.estado = false
            agregarTareas(tarea) 
        }else{
                mostrarCambio(tarea)
        }

        //Agregar state
        
        

        //Obtener tareas
        obtenerTareas(tarea.proyectoId)


        guardarTareas({
            nombre: ''
        })
        
        
        //Reiniciar el form

    }

    const { nombre } = tarea

    return (
        <Fragment>
            
        {
            proyecto
            ?(
                <div className="formulario">
                <form
                onSubmit={onsubmitTarea}
                >
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea"
                    name="nombre"
                    onChange={onchangeTarea}
                    value={nombre}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primary btn-submit btn-block"
                    value={tareaSeleccionada ? 'Editar proyecto' : 'Agregar tarea'}
                   onClick={() => cambiarParaEditarOagregar(tarea, tareaSeleccionada)}
                   />
                </div>
            </form>
            {errorFormularioTareas ? <p className="mensaje error"> El nombre de la tarea es obligatorio</p> :null }
            </div>
            )
            : null
        } 
            
        
        </Fragment>
        
    )
}

export default FormTarea;