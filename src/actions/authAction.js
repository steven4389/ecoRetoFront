import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT
} from '../types/authTypes';
import clienteAxios from '../components/config/axios';

//funcion para autenticarse con usuario y password
export function loginAction(userIn){    
    return async(dispatch) => {
        try {
            console.log(userIn);
            //endpoint de la bd
            //const response = await clienteAxios.post('login',user);
            //0=user normal, 1=admin
            if(userIn.email === 'correo@correo.com' && userIn.password === '123456'){
               
                var user = {
                    email:userIn.email,
                    id:1,
                    phone:'315785697',
                    firstname:'Diego',
                    lastname:'salazar',
                    role:1
                }
                console.log('aca',user.email);
                await dispatch(loginSuccess(user));
            }else{
                console.log('no entra');
            }

            /*if(response.data.token){
               await dispatch(loginSuccess(response.data));
               return '1';
            }else{
                return '0';
            }*/
        } catch (error) {
            return 'error';
        }
    }
}

//funcion cerrar sesion
export function logOutAction(){
    return async(dispatch) => {
        await dispatch(logOut());
    }
}


//login exitoso
const loginSuccess = user => ({
    type:LOGIN_SUCCESS,
    payload:user
});

//fallo de login
const loginFail = () => ({
    type:LOGIN_FAIL
});

//cierra sesion
const logOut = () => ({
    type:LOG_OUT
});