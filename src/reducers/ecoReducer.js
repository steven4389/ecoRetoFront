import {
    GET_BUILDINGS,
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

        case GET_FLOOR:
            return{
                ...state,
                floors:action.payload,
            }

        default:
            return state;
    }
}