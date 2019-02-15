import axios from 'axios';

export const fetchAllPins = () => axios.get('/api/pins')

export const fetchQueryPins = (query) => axios.post('/api/pins/search', query)
