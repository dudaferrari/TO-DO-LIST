const express = require('express');
const controller = require('../controllers/todoController');

const router = express.Router();

router.get('/', controller.listTodos);
router.post('/', controller.createTodo);
router.delete('/:id', controller.removeTodo);
router.patch('/:id/toggle', controller.toggleTodo);
router.patch('/:id/reminder', controller.updateReminder);

module.exports = router;
