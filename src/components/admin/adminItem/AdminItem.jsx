import React from 'react'
import './adminItem.css'

const AdminItem = () => {

    const departmentRedirect =()=> {

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
