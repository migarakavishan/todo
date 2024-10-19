const TodoServices = require("../services/todo.services");

exports.createTodo = async (req,res,next)=> {
    try {
        const {userId,title,desc} = req.body;
        let todo = await TodoServices.createTodo(userId,title,desc);
    }catch (error){
        next(error);
    }
}