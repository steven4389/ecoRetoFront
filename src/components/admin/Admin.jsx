import React, {useState} from 'react'
import AdminItem from './adminItem/AdminItem';
import './admin.css'

const Admin = () => {

    const [building, setBuilding] = useState([1, 2, 5, 3, 8, 9, 8, 7, 4, 6, 7, 4, 6, 7, 5, 9]);

    return (
        <div className="adminComponent">
                {
                    building.map((x, i) => {
                        return (<div key={i}>
                            <AdminItem />
                        </div>)
                    })
                }
        </div>
    )
}
export default Admin
