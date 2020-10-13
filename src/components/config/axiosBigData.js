import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'http://www.lantiasas.com:2020/'
});

export default clienteAxios;