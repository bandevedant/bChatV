const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan=require('morgan');

const dbconnection=require('./dbconfig');

const userRoute=require('./routes/user');
const authRoute=require('./routes/auth'); 
const postRoute=require('./routes/posts'); 


dotenv.config();

const app=express();
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

dbconnection();

 app.use('/api/users',userRoute)
 app.use('/api/auth',authRoute)
 app.use('/api/posts',postRoute)

 const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
