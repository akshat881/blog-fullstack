import express from 'express';
const userrout=express.Router();
import {validate} from '../meddelware/index';
import {signup,login,forgot,reset,logout, userdetail} from '../controller/usert'
userrout.post("/",signup);
userrout.post("/login",login);
userrout.post('/forgot',forgot)
userrout.post('/reset',reset)
userrout.get('/logout',logout)
userrout.get("/auth",validate,(req,res)=>{

    res.status(200).json({message:true})
  })
  userrout.post("/user",validate,userdetail)
export default userrout;