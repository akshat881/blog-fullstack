import mongoose,{Schema,Model} from "mongoose";

import {Otp} from '../interface/type'
const otpmodal:Schema<Otp>=new Schema({
    
    id:{
         type: mongoose.Schema.Types.ObjectId, ref: 'user_data' 
      
    },
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true
    },
    expaire:{
        type:Number,
        require:true
    }

})
const otpmodals:Model<Otp>=mongoose.model("otpmodal",otpmodal);

export default otpmodals;