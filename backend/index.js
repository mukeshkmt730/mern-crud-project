import express from "express";
import mongoose from "mongoose";
import route from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/user',route);     

const URL='mongodb+srv://mukeshkmt730:Dck@roj730@crud.ldwop.mongodb.net/CRUD-APP?retryWrites=true&w=majority';

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
    console.log('mongoose connected successfully');
}).catch((e)=>{
    console.log('error:',e.message);
})

const port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})