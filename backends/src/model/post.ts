import mongoose,{Schema,Model} from "mongoose";

import {Post} from '../interface/type'
const imageSchema:Schema<Post> = new Schema({
    useid:{
        type:String
    },
    title: {
        type:String
    },
    comment: [{
        author:String,
        content:String
    }
    ],
    likes:[],
    dislikes:[],
    imageData: {
        type:String
    }
  });
  
  const postdata:Model<Post> = mongoose.model('posts', imageSchema);
  
 export default postdata;