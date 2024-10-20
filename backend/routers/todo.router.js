const router = require('express').Router();
const TodoController = require("../controllers/todo.controller");

router.post('/storeTodo',TodoController.createTodo);

module.exports = router; 