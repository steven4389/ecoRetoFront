import React, {useState} from 'react'
import AdminItem from './adminItem/AdminItem';
import './admin.css'

const Admin = () => {

    const [building, setBuilding] = useState([1, 2, 5, 3]);

    return (
        <div className="adminComponent">
            <div className="row">
                {
                    building.map((x, i) => {
                        return (<div className="col-12 col-md-4 col-lg-3" key={i}>
                            <AdminItem />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
export default Admin
