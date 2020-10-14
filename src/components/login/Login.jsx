import React, { useState } from 'react';

//redux
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../actions/authAction'

const Login = () => {

    //redux
    const history = useHistory();
    const dispatch = useDispatch();

    const emailedux = useSelector(state => state.auth.email)

    //states del componente
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const [errorLogin,setError] = useState(false);

    //funciones
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //inicia sesion
    const login = async e => {
        e.preventDefault();
        //validacion


        //envio formulario
        const response = await dispatch(loginAction(user));
        //accion a tomar
        if(response === '1'){
            history.push('/user')
        }else if(response === '0'){
            //history.push('/profile')
            alert('login incorrector')
        }
        
    }

    return ( 
        <div className="home">
            <div className="pltZoneLogin">
                <form id="frmLogin">
                    <div className="pltBoxLogo">
                        {/**<img src={logo} alt="Lantia" className="pltLogo" width="180px"/> */}
                        <span>Iniciar sesión</span>	
                    </div>

                    <fieldset>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="text" 
                                maxLength="45" 
                                value={user.email}
                                onChange={onChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password"  
                                value={user.password}
                                onChange={onChange}
                            />
                        </div>

                        <input 
                            id="btnLogin" 
                            type="submit" 
                            className="untBtn darkblue" 
                            value="INICIAR SESION"
                            onClick={login}
                        />
                    </fieldset>
                </form>                
            </div>
            <div className="pltLoginText">
                <h3><span className="pltLoginSub1">Ayudamos</span> a las <br/> empresas a trabajar <br/> mas eficientemente</h3>
                <span className="pltLoginSub2">LANTIA, plataforma integral para <br/> business intelligence, cienciometría <br/> y análisis de patentes.</span>
            </div>
        </div>
     );
}
 
export default Login;