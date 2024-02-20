const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./src/routes/user')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const dbConnection = async (cb) =>{
    try {
        await mongoose.connect("mongodb+srv://manishankarkumar789:mani789@cluster0.6apcgn9.mongodb.net/?retryWrites=true&w=majority");
        cb();
    } catch (error) {
        
    }
}
dbConnection(()=>{
    console.log("db connected!")
})
app.use(userRouter);
app.listen(3001,()=>{
    console.log("server started...")
});