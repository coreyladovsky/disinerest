import axios from 'axios';

export const createBoard = board => axios.post("/api/boards", board)

export const fetchUserBoards = (id) => axios.get(`/api/users/${id}/boards`)
