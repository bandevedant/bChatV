const mongoose = require('mongoose');

const connection=async()=>{
    try{
        const connect= await mongoose.connect(process.env.MONGO_URL,
        console.log('MongoDB Connected' ));
    }catch(err){
        console.log(err);
    }
}
module.exports=connection;