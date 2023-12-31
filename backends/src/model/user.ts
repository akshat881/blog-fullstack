import mongoose,{Schema,Model} from "mongoose";
import { Register } from "../interface/type";

const user:Schema<Register>=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:String,
        require:true
    },
    frinds:
        [{
            author:String,
            id:String
        }
        ]
    
})
const user_model:Model<Register>=mongoose.model("user_data",user)
export default user_model;