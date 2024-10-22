const router = require('express').Router();
const TodoController = require("../controllers/todo.controller");

router.post('/storeTodo',TodoController.createTodo);

router.post('/getUserTodoList', TodoController.getUserTodo);

router.post('/deteleTodo', TodoController.deleteTodo);

module.exports = router; 