const express = require('express');
const userRouter = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');


userRouter.post('/signup',async(req,res)=>{
    const {firstName,lastName,email,password} = req.body.formData;
    if(!firstName || !lastName || !email || !password){
        return res.status(400).send({message:"plase fill all the details"});
    }

    const exisitingUser = await User.findOne({email});
    if(exisitingUser){
        return res.status(400).send({message:"aleady have an account"});
    }
   const hasedPassword = await bcrypt.hash(password,10);
   const newUser = new User({
    firstName,
    lastName,
    email,
    password:hasedPassword
   });
  await  newUser.save();
  return res.status(200).send({user:newUser});
    

});

module.exports = userRouter;