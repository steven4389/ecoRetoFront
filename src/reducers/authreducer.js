import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAIL
} from '../types/authTypes';

//state
const initialState = {
    id:null,
    nombre:null,
    role:null,
    posicion:null,
    cargo:null,
    puesto:{}
}

export default function(state = initialState, action){
    switch(action.type){

        case LOGIN_SUCCESS:
            return{
                ...state,
                id:action.payload.id,
                nombre:action.payload.nombre,
                role:action.payload.role,
                posicion:action.payload.posicion,
                cargo:action.payload.cargo,
                puesto:action.payload.puesto,
            }

        default:
            return state;
    }
}