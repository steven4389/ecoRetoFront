import {
    GET_BUILDINGS,
    GET_FLOORS,
    GET_FLOOR
} from '../types/ecotypes';

//state
const initialState = {
    buildings:[],
    building:{},
    floors:[],
    floor:{}
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_BUILDINGS:
            return{
                ...state,
                buildings:action.payload,
            }

        case GET_FLOORS:
            return{
                ...state,
                floors:action.payload,
            }

        case GET_FLOOR:
            return{
                ...state,
                floor:action.payload,
            }

        default:
            return state;
    }
}