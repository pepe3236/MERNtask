import React, { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO, 
        ARREGLO_PROYECTOS, 
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO } from '../../types'



const ProyectoState = (props) =>{

    
const proyectos = [
        {id: 1, nombre: 'Tienda virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de sitio web'},
        {id: 4, nombre: 'Mern'}
    ]

    const initialState ={
        proyectos : [],
        formulario : false,
        errorFormulario: false,
        proyecto: null,
        formularioTarea: false
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD

    const mostrarFormulario = () =>{
          dispatch({
            type: FORMULARIO_PROYECTO
        })  
        }

    const obtenerProyectos = () =>{
        dispatch({
            type: ARREGLO_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = (proyecto) =>{
         proyecto.id = uuidv4();

        //Insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click

    const proyectoActual = (proyectos) =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectos
        })
    }

    const eliminarProyecto = (proyecto) =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyecto
        })
    } 

    return(
        <proyectoContext.Provider
        value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}
        >
            { props.children }
        </proyectoContext.Provider>
    )

}

export default ProyectoState;