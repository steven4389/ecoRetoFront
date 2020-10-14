import React, { useEffect } from 'react'
import Floor from './floor/Floor'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getFloorsAction } from '../../../actions/ecoAction'

const Building = ({...props}) => {

    //redux
    const dispatch = useDispatch();
    const floors = useSelector(state => state.eco.floors);


    useEffect(() => {
        dispatch(getFloorsAction(props.match.params.id)); 
     }, [])

    //props.match.params.id
    const callFloor = (id) => {
        alert('aqui id', id);
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
                                    <h2 className='btn btn-primary px-3' onClick={() => callFloor(floor.id)}>{floor.nombre}</h2>
                                </div>)
                            })
                        }
                    </div>
                    <div className="building-body col-10 p-3">
                        {/* <Floor floor={}/>   */}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Building;