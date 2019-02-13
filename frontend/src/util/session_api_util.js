import axios from 'axios';

export const getUser = () => axios.get('/auth/getUser')
