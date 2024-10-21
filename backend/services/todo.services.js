const TodoModel = require("../model/todo.model");

class TodoServices {
    static async createTodo(userId, title, desc){
        const createTodo = new TodoModel({userId,title,desc});
        return await createTodo.save();
    }

    static async getTododata(userId){
        const todoData = await TodoModel.find({userId});
        return todoData;
    }
}

module.exports = TodoServices;