import React, { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { getFloorAction } from '../../../../actions/ecoAction';

const Floor = ({floor}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFloorAction(floor.id))
    }, [])
    return ( 
        <>
            <h5><span style={{fontWeight:'bold'}}>Capacidad: </span>10 personas</h5>
            <h5><span style={{fontWeight:'bold'}}>Puestos disponibles: </span>5 puestos</h5>

            <h4 style={{fontWeight:'bold'}} className='mt-5'>Asignar personas</h4>
            <hr/>
            {/**Aca va un map */}
            <div className=" row w-100 justify-content-center">
                <div className="col-1">                                
                    <h5 className='btn btn-primary'>Listo</h5>
                </div>
                <div className=" px-3 col-8 building-position row justify-content-center pt-2">
                    <h5 className='mx-5'>Carlos garcia</h5>
                    <h5 className='mr-5'>Vicepresidente</h5>
                    <h5 className=''>Puesto 1</h5>                                
                </div>
                <div className="col-3 row">
                        <h5 className='px-2 pt-1 mx-3 building-cancel'>x</h5>
                    <h5 className='btn btn-primary px-4'>Reasignar puesto</h5>
                </div>
            </div>
        </>
     );
}
 
export default Floor;