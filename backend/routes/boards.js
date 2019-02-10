var express = require('express');
var router = express.Router();
const { createBoard, getBoard, getBoardPins, deleteBoard, updateBoard } = require('../quieries/boardsQuieries');


router.post('/', createBoard );
router.get('/:id', getBoard );
router.get('/:id/pins', getBoardPins );
router.delete('/:id', deleteBoard );
router.patch('/:id', updateBoard );

module.exports = router;
