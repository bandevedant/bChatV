const express = require("express");
const router = express.Router();
const User=require('../models/userModel');

//Update a user
router.put('/:id',async(req,res)=>{

    if(req.body.userId===req.params.id || req.body.isAdmin){

        if(req.body.password){
            try{
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(req.body.password,salt);
            }catch(err){
                res.status(500).json(err);
            }
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,
                {$set:req.body});
                res.status(200).send("Account has been updated");
        }catch(err){
            res.status(404).json(err);
        }
    }
    else{
        res.status(403).send("You cannot change someone else's account");
    }
})

// "userId":"64660d2b030232cb14d3a3d8",
// " bio":"Ola test here!",
//  "city":"Testpur " ,
// " from":"TESTIS",
//  "relationship":"dual",
//  "coverImg":"post/5.jpeg",
//  "profileImg":"profile.jpg"

//Delete a user
router.delete('/:id',async(req,res)=>{
        try{
            const user=await User.findById(req.params.id);
            if(user.userId===req.body.userId){
                await user.deleteOne();
                res.status(200).send("Account has been deleted");
            }else{
                res.status(403).send("You cannot delete someone else's account");
            }
        }catch(err){
            res.status(404).json(err);
        }
    
})
//Get a user
router.get('/',async(req,res)=>{
       const userId=req.query.userId;
       const username=req.query.username;
    try{
        const user =userId ? await User.findById(userId) : await User.findOne({username:username});
         //const {password,...other}=user._doc; //this is used to not send the password to the frontend at postman
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

//Follow a user
router.put('/:id/follow',async(req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
            const user=await User.findById(req.params.id);//one who is being followed
            const currentUser=await User.findById(req.body.userId);//following the user
            
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $push:{followers:req.body.userId}
                })
                await currentUser.updateOne({
                    $push:{followings:req.params.id}
                })
                res.status(200).send("User has been followed");
            }
            else{
                res.status(403).send("You already follow this user");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).send("You cannot follow yourself");
    }
})
//Unfollow a user
router.put('/:id/unfollow',async(req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
            const user=await User.findById(req.params.id);//one who is being followed
            const currentUser=await User.findById(req.body.userId);//following the user
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $pull:{followers:req.body.userId}
                })
                await currentUser.updateOne({
                    $pull:{followings:req.params.id}
                })
                res.status(200).send("User has been unfollowed");
            }
            else{
                res.status(403).send("user is not followed previously");
            }
        }catch(err){
            res.status(404).json(err);
        }
    }else{
        res.status(403).send("You cannot unfollow yourself");
    }
})
module.exports = router;
