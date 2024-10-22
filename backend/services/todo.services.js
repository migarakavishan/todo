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

    static async deleteTodo(id){
        const deleted = await TodoModel.findOneAndDelete({_id:id})
        return deleted;
    }
}

module.exports = TodoServices;