import axios from '../config/axios';

export const getMyAddress = () => axios.get('/address/myaddress');
