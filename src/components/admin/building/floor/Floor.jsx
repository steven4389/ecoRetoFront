import React from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { deletePuestoAction } from '../../../../actions/ecoAction';

const Floor = () => {

    const dispatch = useDispatch();

    const { capacidad, usuarios } = useSelector(state => state.eco.floor);

    const eliminarPuesto = (id) => {
        dispatch(deletePuestoAction(id));
    }
    return ( 
        <>
            <h5><span style={{fontWeight:'bold'}}>Capacidad: </span>{capacidad}</h5>
            <h5><span style={{fontWeight:'bold'}}>Puestos disponibles: </span>5 puestos</h5>

            <h4 style={{fontWeight:'bold'}} className='mt-5'>Asignar personas</h4>
            <hr/>
            {/**Aca va un map */}
            {usuarios != undefined ?
                        usuarios.map((usuario, i) => {
                            return (<div className="" key={i}>
                                <div className=" row w-100 justify-content-center">
                                    <div className="col-1">                                
                                        <h5 className='btn btn-primary'>Listo</h5>
                                    </div>
                                    <div className=" px-3 col-8 building-position row justify-content-center pt-2"> 
                                        <h5 className='mx-5'>{usuario.nombre}</h5>
                                        <h5 className='mr-5'>{usuario.cargo}</h5>
                                        <h5 className=''>{usuario.puesto}</h5>                                
                                    </div>
                                    <div className="col-3 row">
                                            <h5 className='px-2 pt-1 mx-3 building-cancel' onClick={(e)=>{eliminarPuesto(usuario.idPuesto)}}>x</h5>
                                        <h5 className='btn btn-primary px-4'>Reasignar puesto</h5>
                                    </div>
                                </div>
                            </div>)
                        }) :
                        ''
                    } 
            
        </>
     );
}
 
export default Floor;