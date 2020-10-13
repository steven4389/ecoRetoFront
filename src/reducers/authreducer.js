import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAIL
} from '../types/authTypes';

//state
const initialState = {
    userId:null
}

export default function(state = initialState, action){
    switch(action.type){

        default:
            return state;
    }
}