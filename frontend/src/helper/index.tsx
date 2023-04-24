import {useGet} from '../hooks'
export const Check=()=>{
    const {data,isLoading}:any=useGet("/auth")
    console.log(isLoading)


    if(data?.data.message===true){
     return true
    }
    else{
     return false
    }
 
 
 }
 