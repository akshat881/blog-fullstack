import express from 'express'
const cookieParser = require('cookie-parser');
import dotenv from "dotenv"
const app=express();
import con from './db/connection'
import userrout from './routs/userrout';
import postroute from './routs/posts';
dotenv.config();
const db_url=process.env.MONGODB_CONNECTION;
const port=process.env.PORT;
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
   methods:["GET","POST"]
}

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions))
app.use(userrout)
app.use(postroute)
 con(db_url)
app.listen(port,()=>{
    console.log("port running on 5000");
})