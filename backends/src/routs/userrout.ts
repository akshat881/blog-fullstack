import express from 'express';
const userrout=express.Router();
import {validate} from '../meddelware/index';
import {signup,login,forgot,reset} from '../controller/usert'
userrout.post("/",signup);
userrout.post("/login",login);
userrout.post('/forgot',forgot)
userrout.post('/reset',reset)
userrout.get("/auth",validate,(req,res)=>{

    res.status(200).json({message:true})
  })
export default userrout;