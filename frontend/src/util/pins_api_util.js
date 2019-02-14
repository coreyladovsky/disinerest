import axios from 'axios';

export const fetchAllPins = () => axios.get('/api/pins')
