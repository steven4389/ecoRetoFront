import React, {useState, useEffect} from 'react'
import AdminItem from './adminItem/AdminItem';
import './admin.css'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getBuildingsAction } from '../../actions/ecoAction'

const Admin = () => {

    //redux
    const dispatch = useDispatch();

    const buildings = useSelector(state => state.eco.buildings);

    useEffect(() => {
       dispatch(getBuildingsAction()); 
    }, [])

    return (
        <div className="adminComponent">
            <div className="row">
                {
                    buildings.map((building, i) => {
                        return (<div className="col-12 col-md-4 col-lg-3" key={i}>
                            <AdminItem 
                                building={building}
                            />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
export default Admin
