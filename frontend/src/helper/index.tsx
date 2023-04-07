import axios from "axios";
import {useGet} from '../hooks'
import { useEffect, useState } from "react";
export const Check=()=>{
    const {data}:any=useGet("/auth")


    if(data?.data.message===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 