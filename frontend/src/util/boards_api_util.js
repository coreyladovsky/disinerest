import axios from 'axios';

export const createBoard = board => axios.post("/api/boards", board)

export const fetchUserBoards = (id) => axios.get(`/api/users/${id}/boards`)

export const fetchCurrentUserBoards = () => axios.post(`/api/users/current/boards`)
