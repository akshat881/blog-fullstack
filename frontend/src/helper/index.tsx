import axios from "axios";
import { useEffect, useState } from "react";
const fetchfun=async()=>{
    const {data} = await axios.get('http://127.0.0.1:4000/auth',{headers:{Accept:"appllication/json","Content-Type":"appllication/json"},withCredentials:true});
    return data.message
}
export const Check=()=>{
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchfunasy() {
        const result = await fetchfun();
        setData(result);
      }
  
      fetchfunasy();
    }, []);
    if(data===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 