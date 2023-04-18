import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"
import postdata from '../model/post'
dotenv.config();

export const posts=async(req: Request, res: Response)=>{
try{
    const { title,discription} = req.body;
    const imageData = req.file?.path;
    // console.log(title,discription,imageData)
    const token = req.cookies.usersesion;
    const id=jwt.verify(token, process.env.PRIVATE_KEY,(err,data)=>{
        return data;
    })

    const mypost = new postdata({
        useid:id?.email,
      title:title,
      discription:discription,
      comment:[],
      likes: [],
      dislikes: 0,
      imageData:imageData
    });

     await mypost.save()
    .then((data)=>{
        console.log(data)
        if(!data){
         res.status(204).json({message:"some error"})
       
        }
    }).catch((e)=>{
        // res.status(500).json({message:"server error"})
        console.log(e);
        
    })
    return res.status(200).json({message:"succes"})
}
catch(err){
     res.status(400).json({message:"some error"})
}
}
export const comment=(req: Request, res: Response)=>{
    if(req.body.like=='1'){
        postdata.updateOne({useid:req.body.user},{$push:{likes:req.body.user}}).then((data)=>{
            if(data.modifiedCount>=1){
      
                res.send(data)
            }
        }).catch((e)=>{
            res.send(e);
        })
       
    }
    postdata.updateOne({useid:req.body.user},{ $push: { comment:{author:req.body.author,content:req.body.content}}}).then((data)=>{
        if(data){
            res.send("comment added")
        }
    }).catch((e)=>{
        res.send(e);
    })
}
export const postmydata=async(req: Request, res: Response)=>{
    try{
        res.json(await postdata.find())
    }catch(e){
        console.log("eror")
    }
 

}