import React from 'react'

//redux
import { useSelector } from 'react-redux'

const User = () => {

    //redux
    const { nombre,role,posicion,cargo,puesto } = useSelector(state => state.auth)

    return ( 
        <>
            <h1>{nombre}</h1>
            <h1>{role}</h1>
            <h1>{posicion}</h1>
            <h1>{cargo}</h1>
            <h1>{puesto.edificio}</h1>
            <h1>{puesto.piso}</h1>
            <h1>{puesto.puesto}</h1>
        </>
     );
}
 
export default User;