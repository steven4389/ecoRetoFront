import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAIL
} from '../types/authTypes';

//state
const initialState = {
    email:null,
    userId:null,
    phone:null,
    firstname:null,
    lastname:null,
    role:null,
    autenticated:-1,
    reload:true   
}

export default function(state = initialState, action){
    switch(action.type){

        case LOGIN_SUCCESS:
            return{
                ...state,
                email:action.payload.email,
                firstname:action.payload.firstname,
                lastname:action.payload.lastname,
                phone:action.payload.phone,
                role:action.payload.role,
                userId:action.payload.userId,
                autenticated:true,
                reload:true
            }

        default:
            return state;
    }
}