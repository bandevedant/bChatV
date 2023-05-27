const express=require('express');
const router=express.Router();
const User=require('../models/userModel');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

//Register a user
router.post('/register',async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt) 
        const newUser= await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        const user=await newUser.save();
        res.status(200).json(user+"ola");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Login a user
router.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        
        if(!validPassword ){

            res.status(400).json("wrong password")
        }
        else if(!user) 
        res.status(404).json("user not found");
        else
        res.status(200).json(user)
        
    }catch(err){
        res.status(500).json(err);
    }
})

//Get all users

module.exports=router;