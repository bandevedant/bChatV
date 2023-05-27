const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan=require('morgan');
const multer=require('multer');
const path=require('path');
const mongoose=require('mongoose');

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

const upload = multer()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

app.post('/api/upload', upload.single('file'), (req, res)=> {
    try{
        return res.status(200).json({message:"File uploded successfully"});

    }catch(err){
        console.log(err);
    }
   
  })
  
 app.use('/api/users',userRoute)
 app.use('/api/auth',authRoute)
 app.use('/api/posts',postRoute)

 const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
