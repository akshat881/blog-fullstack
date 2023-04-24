import { useNavigate } from "react-router-dom";
import Sidnav from '../sidenavbar'
import Blogs from "components/post";
import Dash from "components/dashboard";
import  subroutespath from '../subrouts/route';

  export const Mycontent=()=>{
    const navigate=useNavigate()
return(

  subroutespath.map((path,index)=>{
    if(path){
      navigate(`${path}`)
      showmodal(false)
    }
    else{
      showmodal(true)
    }
  })

)
  }

  

 



     




