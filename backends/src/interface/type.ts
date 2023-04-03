import mongoose,{Document} from "mongoose"
export interface Register extends Document{
    name:String,
    email:String,
    password:String
}
export interface Otp extends Document{
    email: string;
    otp: string;
    expaire:number;
  }
  export interface Post extends Document{
    useid:String;
    title: String;
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