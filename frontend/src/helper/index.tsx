import {useGet} from '../hooks'
export const Check=()=>{
    const {data,isLoading}:any=useGet("/auth")


    if(data?.data.message===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 