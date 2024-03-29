import { 
    FORMULARIO_PROYECTO, 
    ARREGLO_PROYECTOS, 
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO } from '../../types'


export default (state, action) => {
    switch(action.type){

        case FORMULARIO_PROYECTO:
            if(state.formulario === false){
                return{
                ...state,
                formulario: true
            } 
            }else{
                return{
                    ...state,
                    formulario: false
            }  
        }

        case ARREGLO_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return{
              ...state,  
              proyectos: [...state.proyectos, action.payload],
              formulario: false,
              errorFormulario: false
            }

        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true
            }

        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyecto: action.payload
            }
            
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }

        default:
        return state;
    }
}