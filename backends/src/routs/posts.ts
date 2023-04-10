import express from 'express';
const postroute = express.Router();
import {uplode} from '../meddelware/index'
import {posts,comment} from '../controller/post'
import {validate} from '../meddelware/index'
postroute.post("/dash",validate,uplode.single('imageData'),posts)
postroute.patch("/dash/uplode",validate,comment)

export default postroute;