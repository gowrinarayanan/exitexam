const express=require ('express');
const cors=require('cors');
const app=express();
const morgan = require('morgan');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const todoRoutes=require('./routes/todoRoutes')
app.use(cors())
app.use('/todos',todoRoutes)
require('dotenv').config()
app.use(morgan('dev'));
require('./db/connection')
app.use(express.json());
require('./db/connection');
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
