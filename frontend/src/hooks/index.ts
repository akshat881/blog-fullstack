import {useQuery,useMutation} from 'react-query'
import instance from "api";
 export const useGet=(url:any)=>{
    const data=async()=>{
        return await instance.get(url,{headers:{Accept:"appllication/json","Content-Type":"appllication/json"},withCredentials:true})
    }
return useQuery(url,data)
 }
 export const usePostdata=()=>{
    const post_data=async(url:any,content:any)=>{
        return await instance.post(url,
        content, {
            headers: {
              'Content-Type': 'application/json'
            },withCredentials:true
        }
    )
    }
 
    return post_data
 }