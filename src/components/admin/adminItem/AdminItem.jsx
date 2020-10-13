import React from 'react'
import './adminItem.css'
import { useHistory } from 'react-router-dom';

const AdminItem = () => {

    const history = useHistory();

    const departmentRedirect =()=> {
        history.push('/floor');
    }

    return (
        <div onClick={departmentRedirect} className="buildingCard">
            <div>
                <h3>Edificio:</h3>
            </div>
            <div>
                <span>Número puestos de trabajo:</span>
            </div>
        </div>
    )
}
export default AdminItem
