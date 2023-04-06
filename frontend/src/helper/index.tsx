import axios from "axios";
import { useEffect, useState } from "react";

export const Check=()=>{
  const [dataa, setData] = useState(null);

  useEffect(() => {
    const fetchfun=async()=>{
    const {data} = await axios.get('http://localhost:4000/auth',{headers:{Accept:"appllication/json","Content-Type":"appllication/json"},withCredentials:true});
    setData(data.message)
}
   fetchfun()
},[])
    if(dataa===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 