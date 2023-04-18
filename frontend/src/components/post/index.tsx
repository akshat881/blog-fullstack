import Bg from 'Assets/Logo/WITS@4x.svg'
import { useEffect, useState } from 'react';
import {Main,Text,Title,Img} from 'styled/postes'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
const Blogs=()=>{
  const {id}=useParams();
  console.log(id)
  const mydata=useSelector((state:any)=>{
    return state.postdata
  })
 const mypostdata=mydata[0]
    return(
       <>
       {
        mypostdata?.map((item:any)=>{

       if(item._id===id){
              const disp=item.discription.split(".")
              const displen=disp.length/2;
return(
     
       <Main>
       <Title>{item.title}</Title>
       <Text>{
              disp.map((item:any,index:any)=>{
if(index<=displen)
return item
              })
              }
</Text>
<Img src={item.imageData}/>
<Text>{
              disp.map((item:any,index:any)=>{
if(index>displen)
return item
              })
              }
</Text>
       </Main>
)
       }
        })
}
       </>
    )
      
      
    
}
export default Blogs;