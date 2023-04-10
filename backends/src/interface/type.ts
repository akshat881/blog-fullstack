import mongoose,{Document} from "mongoose"
export interface Register extends Document{
    name:String,
    email:String,
    password:String,
    profile:String,
    frinds:[{
      author:String,
      id:String
    }
     
    ]
}
export interface Otp extends Document{
  id:String;
    email: string;
    otp: string;
    expaire:number;
  }
  export interface Post extends Document{
    useid:String;
    title: String;
discription:String;
    comment: [
      {
      author:String,
      content:String
      }
  ],
    likes:[];
    dislikes: [];
    imageData: String;
    }