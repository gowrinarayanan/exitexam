const mongoose=require ('mongoose');
const todoSchema=new mongoose.Schema({
    
    todoName:String,
    todoDescription:String,
    
})
const  todoData=mongoose.model('user',todoSchema);
module.exports=todoData;