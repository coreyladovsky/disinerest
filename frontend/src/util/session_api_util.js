import axios from 'axios';

export const getUser = () => axios.get('/auth/getUser')

export const signUp = user => axios.post('/auth/new', user)

export const login = user => axios.post('/auth/login', user)

export const logout = () => axios.get('/auth/logout')
