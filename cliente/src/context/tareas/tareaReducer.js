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

export default (state, action) =>{
    switch(action.type){

        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload),
                tareaSeleccionada: null
            }

        case AGREGAR_TAREAS:
            return{
                ...state,
                tareas: [...state.tareas, action.payload],
                errorFormularioTareas: false
            }

        case VALIDAR_ERROR:
            return{
                ...state,
                errorFormularioTareas: true
            }

        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload),
                
            }

        case CAMBIAR_TAREA:
        case EDITAR_TAREA:
            return{
                ...state,
                tarea: state.tareasproyecto.filter(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                errorFormularioTareas: false
            }

        case TAREA_SELECCIONADA:
            return{
                ...state,
                tareaSeleccionada: action.payload,
                errorFormularioTareas: false
            }

        case CAMBIAR_AGREGAR:
            return{
                ...state,
                tareaSeleccionada: action.payload = null,
                errorFormularioTareas: false
            }

        case MOSTRAR_EDICION:
            return{
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }

     


        default:
            return state;
    }
}