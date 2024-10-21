const router = require('express').Router();
const TodoController = require("../controllers/todo.controller");

router.post('/storeTodo',TodoController.createTodo);

router.get('/getUserTodoList', TodoController.getUserTodo);

module.exports = router; 