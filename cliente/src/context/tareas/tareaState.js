import React, { useReducer } from 'react'   

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_ERROR,
    ELIMINAR_TAREA,
    CAMBIAR_TAREA,
    TAREA_SELECCIONADA,
    EDITAR_TAREA,
    CAMBIAR_AGREGAR,
    MOSTRAR_EDICION
} from '../../types'

import tareaReducer from './tareaReducer'
import tareaContext from './tareaContext'


export const TareaState = (props) => {

    const initialState = {
        tareas: [
            {id: 0, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
            {id: 1, nombre: "Elegir plataforma", estado: false, proyectoId: 2},
            {id: 2, nombre: "Elegir plataforma", estado: false, proyectoId: 3},
            {id: 3, nombre: "Elegir plataforma", estado: true, proyectoId: 4},
            {id: 4, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
            {id: 5, nombre: "Elegir plataforma", estado: false, proyectoId: 2},
            {id: 6, nombre: "Elegir plataforma", estado: false, proyectoId: 1},
            {id: 7, nombre: "Elegir plataforma", estado: true, proyectoId: 3},
            {id: 8, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
            {id: 9, nombre: "Elegir plataforma", estado: false, proyectoId: 2},
            {id: 10, nombre: "Elegir plataforma", estado: false, proyectoId: 2},
            {id: 11, nombre: "Elegir plataforma", estado: true, proyectoId: 4},
            {id: 12, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
            {id: 13, nombre: "Elegir plataforma", estado: false, proyectoId: 4},
            {id: 14, nombre: "Elegir plataforma", estado: false, proyectoId: 3},
            {id: 15, nombre: "Elegir plataforma", estado: true, proyectoId: 4},
        ],
        tareasproyecto: null,
        errorFormularioTareas: false,
        tareaSeleccionada: null
    }

const [state, dispatch] = useReducer(tareaReducer, initialState)

    //Obtener las tareas de un proyecto
    const obtenerTareas = (proyectoId)=>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTareas = (tarea) =>{

        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_ERROR
        })
    }

    const eliminarTarea = (tarea) =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tarea.id
        })
    }

    const cambiarTarea = (tarea) =>{
        dispatch({
            type: CAMBIAR_TAREA,
            payload: tarea
        })
    }

    const seleccionarTarea = (tarea) =>{
        dispatch({
            type: TAREA_SELECCIONADA,
            payload: tarea
        })
    }

    const actializarTarea = (tarea) =>{
        dispatch({
            type: EDITAR_TAREA,
            payload: tarea
        })
    }

    const cambiarAgregar = (tareaSeleccionada) =>{
        dispatch({
            type: CAMBIAR_AGREGAR,
            payload: tareaSeleccionada
        })
    }

    const mostrarCambio = (tarea) =>{
        dispatch({
            type: MOSTRAR_EDICION,
            payload: tarea
        })
    }

   

    return (
        <tareaContext.Provider
        value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errorFormularioTareas: state.errorFormularioTareas,
            tareaSeleccionada: state.tareaSeleccionada,
            obtenerTareas,
            agregarTareas,
            mostrarError,
            eliminarTarea,
            cambiarTarea,
            seleccionarTarea,
            actializarTarea,
            cambiarAgregar,
            mostrarCambio
        }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState
