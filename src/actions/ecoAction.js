import {
    GET_BUILDINGS,
    GET_FLOORS,
    GET_FLOOR
} from '../types/ecotypes';
import clienteAxios from '../components/config/axios';

export function getBuildingsAction(){    
    return async(dispatch) => {
        try {
            
            const buildings = await clienteAxios.get('get/edificios')

            await dispatch(getBuildings(buildings.data));
               
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

export function getFloorAction(floorId){    
    return async(dispatch) => {
        try {
            
            //clienteAxios.get('/get/pisos',building)
            var usuarios = [
                {idPuesto: 1, nombre: 'Carlos', cargo: 'Gerente', puesto: '01'},
                {idPuesto: 2, nombre: 'Juan', cargo: 'Secreteario', puesto: '02'},
            ]
            var floor = {
                    id:1,
                    capacidad: 50,
                    puestosDisponibles: 20
            }
            
            floor.usuarios = usuarios;
            
            await dispatch(getFloor(floor));
               
               return '1';
        } catch (error) {
            return 'error';
        }
    }
}

export function deletePuestoAction(puestoId){    
    return async(dispatch) => {
        try {
            
            //clienteAxios.get('/get/pisos',building)
            
            
            //await dispatch(getFloor(floor));
               
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