import React, { useEffect } from 'react'
import Floor from './floor/Floor'
import data from './floor/archivo'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getFloorAction, getFloorsAction } from '../../../actions/ecoAction'

const Building = ({...props}) => {

    //redux
    const dispatch = useDispatch();
    const floors = useSelector(state => state.eco.floors);


    const arrayP = []
    for(const i in data){
      arrayP.push({piso: data[i].piso, edificio: data[i].edificio})
    }
    let edificio1 = arrayP.filter(item => item.edificio == 1)
    let edificio2 = arrayP.filter(item => item.edificio == 2)
    let edificio3 = arrayP.filter(item => item.edificio == 3)

    edificio1 = edificio1.map(item => {
        return +item.piso.substr(item.piso.length -1, 1)
    })
    console.log(Math.max(...edificio1))
    useEffect(() => {
        dispatch(getFloorsAction(props.match.params.id)); 
     }, [])

    //props.match.params.id
    const callFloor = (id) => {
        dispatch(getFloorAction(id));
    }
    return ( 
        <>
            <div className="building contenedor mt-5">
                <div className="mb-3 building-header">
                    <h1 style={{marginBottom:'0px'}}>Edificio Principal</h1>
                    <h5>Ocupacion 30%</h5>
                </div>
                <div className='row'>
                    <div className="col-2">
                        {
                            floors.map((floor, i) => {
                                console.log(floor)
                                return (<div className="" key={i}>
                                    <h2 className='btn btn-primary px-3' onClick={(e) => callFloor(floor.id)}>{floor.nombre}</h2>
                                </div>)
                            })
                        }
                    </div>
                    <div className="building-body col-10 p-3">
                        <Floor />  
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Building;