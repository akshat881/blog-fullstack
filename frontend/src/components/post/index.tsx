import Bg from 'Assets/Logo/WITS@4x.svg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Blogs=()=>{
  const {id}=useParams();
  console.log(id)
    return(
        <h1>my id :{id}</h1>
    )
      
      
    
}
export default Blogs;