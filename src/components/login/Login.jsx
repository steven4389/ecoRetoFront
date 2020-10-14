import React, {useState} from 'react';
import './login.css';

//redux
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../actions/authAction'

const Login = () => {

    //redux
    const history = useHistory();
    const dispatch = useDispatch();

    const emailedux = useSelector(state => state.auth.email)

    //states del componente
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errorLogin, setError] = useState(false);

    //funciones
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //inicia sesion
    const login = async e => {
        e.preventDefault();
        //validacion


        //envio formulario
        const response = await dispatch(loginAction(user));
        //accion a tomar
        if(response === '1') {
            history.push('/user')
        } else if(response === '0') {
            //history.push('/profile')
            alert('login incorrector')
        }

    }

    return (
        <div className="home">
            <div className="pltZoneLogin">
                <form id="frmLogin">
                    <div className="pltBoxLogo">
                        <span>Normal Asistente</span>
                    </div>
                    <br />
                    <fieldset>
                        <div className="fields">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input
                                id="email"
                                name="email"
                                type="text"
                                maxLength="45"
                                value={user.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="fields">
                            <label htmlFor="password">Contraseña</label>
                            <br />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div id="inicio">
                            <input
                                id="btnLogin"
                                type="submit"
                                className="untBtn darkblue"
                                value="INICIAR SESION"
                                onClick={login}
                            />

                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;