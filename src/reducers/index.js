import { combineReducers } from 'redux';
import authReducer from './authreducer';
import ecoReducer from './ecoReducer';

export default combineReducers({
    auth:authReducer,
    eco:ecoReducer,
});