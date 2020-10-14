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
    const nombre = Object.keys(buildings)

    const array = []
    for(const i in buildings){
        console.log(i)
        const objetoCompleto = {...buildings[i], nombre: i}
        array.push(objetoCompleto)
    }
    useEffect(() => {
       dispatch(getBuildingsAction()); 
    }, [])

    console.log(array)
    return (
        <div className="adminComponent">
            <div className="row">
                {
                    array.map((building, i) => {
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
