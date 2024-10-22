const TodoServices = require("../services/todo.services");

exports.createTodo = async (req,res,next)=> {
    try {
        const {userId,title,desc} = req.body;
        let todo = await TodoServices.createTodo(userId,title,desc);

        res.json({status:true, success:todo});
    }catch (error){
        next(error);
    }
}

exports.getUserTodo = async (req,res,next)=> {
    try {
        const {userId} = req.body;
        let todo = await TodoServices.getTododata(userId);

        res.json({status:true, success:todo});
    }catch (error){
        next(error);
    }
}

exports.deleteTodo = async (req,res,next)=> {
    try {
        const {id} = req.body;
        let deleted = await TodoServices.deleteTodo(id);

        res.json({status:true, success:deleted});
    }catch (error){
        next(error);
    }
}

