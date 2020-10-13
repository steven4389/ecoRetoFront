import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'http://lantiasas.com/lantiaback/api/'
});

export default clienteAxios;