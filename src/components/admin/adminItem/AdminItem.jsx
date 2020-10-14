import React from 'react'
import './adminItem.css'
import { useHistory } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const AdminItem = () => {

    const history = useHistory();

    const departmentRedirect =()=> {
        history.push('/building');
    }

    return (
        <div className="buildingCard">
            <br/>
            <div className="icono">
            <i className="fa fa-building fa-10x"></i>
            </div>
            <div className="body">
                <h5>Edificio</h5>
                <span>Capacidad</span>
                <br/>
                <span>Ocupación</span>
                <br/>
                <span>Número puestos de trabajo</span>
                <br/>
            </div>
            <div className="boton" onClick={departmentRedirect}>
                <span>Ir al edificio</span>
            </div>
        </div>
    )
}
export default AdminItem
