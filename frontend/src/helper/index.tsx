import axios from "axios";
import {useGet} from '../hooks'

export const Check=()=>{
const {data}:any=useGet("/auth")
console.log(data)
    if(data?.message===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 