import express, { Request, Response,NextFunction } from 'express';
import dotenv from "dotenv"
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import multer from 'multer'
import * as jwt from 'jsonwebtoken'
dotenv.config();
    export const validate=(req:Request,res:Response,next:NextFunction)=>{
        const token = req.cookies.usersesion;
        jwt.verify(token,process.env.PRIVATE_KEY,(err:any) => {
            if (err) {
              return res.status(401).json({ message:false });
            }
             
            })
         
        next()
        
    }
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
      });
      const storage = new CloudinaryStorage({
      
        cloudinary:cloudinary,
        params: 
        async (req: Request, file: Express.Multer.File) => {
          return file
        },
        
      
      })
      export const uplode= multer({ storage: storage});