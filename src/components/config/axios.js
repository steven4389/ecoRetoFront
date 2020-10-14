import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'http://lantiasas.com:5011/'
});

export default clienteAxios;