import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"

import postdata from '../model/post'
dotenv.config();

export const posts=async(req: Request, res: Response)=>{

    const { title,discription} = req.body;
    const imageData = req.file?.path;
    // console.log(title,discription,imageData)
    const token = req.cookies.usersesion;
    const id=jwt.verify(token, process.env.PRIVATE_KEY,(err,data)=>{
        return data;
    })
    console.log(id?.email)
    const mypost = new postdata({
        useid:id?.email,
      title:title,
      discription:discription,
      comment:[],
      likes: [],
      dislikes: 0,
      imageData:imageData
    });

    await mypost.save().then((data)=>{
        if(data){
            res.send("uploded succes")
        }
    }).catch((e)=>{
        res.send(e)
    })
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