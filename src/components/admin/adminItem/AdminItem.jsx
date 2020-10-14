import React from 'react'
import './adminItem.css'
import { useHistory } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'


const AdminItem = ({building}) => {

    const history = useHistory();

    const departmentRedirect =()=> {
        console.log(building.id);
        //history.push('/building');
    }

    return (
        <div className="buildingCard">
            <br/>
            <div className="icono">
            </div>
            <div className="bodyCard">
                <h5>{building.nombre}</h5>
                <span id="cap">Capacidad: {building.disponibilidad}</span>
                <br/>
                <br/>
            </div>
            <div className="boton" onClick={departmentRedirect}>
                <Link to={{pathname: `/building/${building.id}`}}><span>Ir al edificio</span></Link> 
            </div>
        </div>
    )
}
export default AdminItem
