import express from 'express';
const userrout=express.Router();
import {validate} from '../meddelware/index';
import {signup,login,forgot,reset} from '../controller/usert'
userrout.post("/",signup);
userrout.post("/login",login);
userrout.post('/forgot',forgot)
userrout.get('/reset',reset)
userrout.get("/dash",validate,(req,res)=>{

    res.status(200).json({message:"logedin"})
  })
export default userrout;