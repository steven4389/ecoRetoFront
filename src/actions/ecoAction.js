import {
    GET_BUILDINGS,
    GET_FLOORS,
    GET_FLOOR
} from '../types/ecotypes';
import clienteAxios from '../components/config/axios';

export function getBuildingsAction(){    
    return async(dispatch) => {
        try {
            
            var buildings = [
                {   
                    id:1,
                    nombre:'EDIFICIO PRINCIPAL',
                    disponibilidad:'30'
                },
                {   
                    id:2,
                    nombre:'EDIFICIO TEUSACÁ',
                    disponibilidad:'53'
                },
                {   
                    id:3,
                    nombre:'EDIFICIO 13-34',
                    disponibilidad:'8'
                },
            ]
            
               await dispatch(getBuildings(buildings));
               
               return '1';
        } catch (error) {
            return 'error';
        }
    }
}

export function getFloorsAction(building){    
    return async(dispatch) => {
        try {
            
            //clienteAxios.get('/get/pisos',building)

            var floors = [
                {
                    id:1,
                    nombre:'piso 01'
                },
                {
                    id:2,
                    nombre:'piso 02'
                },
                {
                    id:3,
                    nombre:'piso 03'
                },
                {
                    id:4,
                    nombre:'piso 04'
                },
                {
                    id:5,
                    nombre:'piso 05'
                }
            ]
            
               await dispatch(getFloors(floors));
               
               return '1';
        } catch (error) {
            return 'error';
        }
    }
}

export function getFloorAction(){    
    return async(dispatch) => {
        try {
            
            //clienteAxios.get('/get/pisos',building)

            var floor = {
                    id:1,
                    capacidad: 50,
                    puestosDisponibles: 20,
                    usuarios = [
                        {idPuesto: 1, nombre: 'Carlos', cargo: 'Gerente', puesto: '01'},
                        {idPuesto: 2, nombre: 'Juan', cargo: 'Secreteario', puesto: '02'},
                    ]
                }
            
               await dispatch(getFloor(floor));
               
               return '1';
        } catch (error) {
            return 'error';
        }
    }
}

const getBuildings = buildings => ({
    type:GET_BUILDINGS,
    payload:buildings
});

const getFloors = floors => ({
    type:GET_FLOORS,
    payload:floors
});

const getFloor = floor => ({
    type:GET_FLOOR,
    payload:floor
});