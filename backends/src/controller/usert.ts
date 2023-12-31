import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import dotenv from "dotenv"
import * as jwt from 'jsonwebtoken'
import { mail } from "../helper/index";
import user_model from '../model/user'
import otpmodals from "../model/otp";
dotenv.config();

export const signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const users = new user_model({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            profile:`https://api.dicebear.com/6.x/bottts/png?seed=${name}`
        });
        const find = await user_model.findOne({ email: email });
        if (!find) {
            await users.save().then((data) => {

                res.status(200).json({message:`Dear ${data.name} your are succesfully signup`,icon:"success"});

            });

        } else {
            res.status(201).json({message:"user alredy exist",icon:"warning"});
        }
    }
    catch (e) {
        res.status(500).json({message:"server error",icon:"error"})
    }

}


export const login = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;
        await user_model.findOne({email: email}).then(async (data) => {


            if (email === data.email && bcrypt.compareSync(password, data.password)) {

                jwt.sign(req.body, process.env.PRIVATE_KEY, function (err, token) {
                    console.log(token);
                    res.cookie('usersesion', token, { httpOnly: true });
           
                    res.status(200).json({message: `login succesfull with tokken`,icon:"success",userdetail:data})
                });

            }
            else {
                res.status(201).json({message: "user dosent exist",icon:"error"})
            }

        }).catch((e) => {
            res.status(201).json({message: "some user dosent exist",icon:"error"})
        });


    }
    catch (e) {
        res.status(500).json({ mesage: "db error" })

    }
}
export const forgot = async (req: Request, res: Response) => {
    try {
      const find = await user_model.findOne({ email: req.body.email });
      console.log(find)
      if (find===null) {
        res.status(201).json({message:"user dosent exist please check your mail",icon:"warning"});
      } else {
  const expiretime=new Date().getTime() + 1000000
        const url = `http://localhost:3000/reset?t=${find._id}/${expiretime}`;
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpsave = new otpmodals({
          id:find._id,
          email: find.email,
          otp: otp,
          expaire: expiretime,
        });
        const otpfind = await otpmodals.findOne({ email: req.body.email });
        if (otpfind===null) {
            await otpsave.save().then((data) => {
                if (data) {
                  mail(otp, find.email, url);
                  res.status(200).json({message:"otp send to your email",icon:"success"});
                }
              });
        } else {
            await otpmodals
            .updateMany(
              { email: req.body.email },
              { $set: { otp: otp, expaire: expiretime} }
            )
            .then((data) => {
              if (data) {
                res.status(200).json({message:"otp resended to your email",icon:"success"});
                mail(otp, find.email, url);
              }
            });       
        }
      }
    } catch (e) {
        res.status(500).json({message:"some erroe occured"})
     
    }
  };
  export const reset = async (req: Request, res: Response) => {
    try {
      const mail=Number(req.query.email);
       console.log(req.query.email)
      // const final=mail.split("/")

      const find = await otpmodals.findOne({ id:req.query.email});
      // console.log(find)
      const { otp, password } = req.body;
      if(find===null){
        res.status(206).json({message:"sesion expired"})
      }else{
    
        const expiresAt = new Date().getTime();
        if (find.expaire > expiresAt) {
            console.log(find)
          if (otp === find.otp) {
            await user_model
              .updateOne(
                { email: req.query.email },
                { $set: { password: await bcrypt.hash(password, 10)} }
              )
              .then(async(data) => {
                res.status(200).json({message:"Password Succesfully Updated"})
             
                await find.deleteOne({mail})
              });
          } else {
            res.status(201).json({message:"incorrect otp"})
        
          }
        } else {
          res.status(201).json({message:"sesion expired"})
   
        }
      }

    } catch (e) {
      console.error(e);
      res.send("error in reset");
    }
  };
  export const logout=(req: Request, res: Response)=>{
res.clearCookie('usersesion	',{path:"/"})
res.status(200).send("clear")
  }
  export const userdetail=async(req: Request, res: Response)=>{
    try{
      console.log(req.body.email)
      res.json(await user_model.findOne({_id:req.body.email}))
    }catch(e){
      console.log("eror")
    }
    
  }