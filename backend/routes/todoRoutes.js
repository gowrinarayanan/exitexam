const express=require ('express');
const router=express.Router();
const jwt=require("jsonwebtoken")

router.use(express.json())
// router.use(express.urlencoded({extended:true}));
const todoModel=require('../models/todoData');


router.get('/',async(req,res)=>{
    try {
        const todos=await todoModel.find()
        res.status(200).send(todos);
    } catch (error) {
        res.status(404).send('not found');
        
    }
});
router.post('/add', async(req,res)=>{
    try {
        const todo=req.body;
        const newTodo=new todoModel(todo);
        const savedTodo=await newTodo.save();
        res.status(200).send('added successfully');
    } catch (error) {
        console.error(error);
        res.status(404).send('Error in adding ');
    }
});
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedTodo=await todoModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send(' updated successfully');
    } catch (error) {
        res.status(404).send('Error in updating ');
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteTodo=await todoModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send(' deleted successfully');
    } catch (error) {
        res.status(404).send('Error in  deleting ');
    }
});
module.exports = router;