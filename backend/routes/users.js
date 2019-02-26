var express = require('express');
var router = express.Router();
const { createUser, getUser, getUsersPins, getUsersBoards, deleteUser, updateUser } = require('../quieries/usersQuieries');

/* GET users listing. */
router.post('/', createUser );
router.get('/:id/boards', getUsersBoards );
router.get('/:id', getUser );
router.get('/:id/pins', getUsersPins );
router.delete('/:id', deleteUser );
router.patch('/:id', updateUser );

module.exports = router;
