import Bg from 'Assets/Logo/WITS@4x.svg'
import {Linkbar,Form,Button,Cardcontent,Span,Tag,Ul2,Newslatest,Newcard,Newsupdate,News,Cardsinner,Container,Ul,List,Hr,Text,Head,Upernav,Navitem,Navtext,Sideitem,Input,Mainsection,Cards, Cardimg} from 'styled/sidenavbar';
import { faNewspaper,faBars,faFilm,faMusic,faPlane,faUser, faCircleUser, faGear, faLifeRing, faArrowRightFromBracket, faComments, faBell, faMagnifyingGlass, faArrowRight, faPlus, faHeart, faImage, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGet,usePostdata} from 'hooks';
import {useForm,SubmitHandler} from 'react-hook-form'
import {useNavigate,Link} from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
const Dash=()=>{
  const {data}=useGet("/postdata")

const mypostdata=data?.data;
console.log(mypostdata)
  const [sowimg,setimg]=useState()
  const [sow,set]=useState(false)

const imgtext=(e:any)=>{
   setimg(e.target.files[0].name)
  console.log(e.target.files[0].name);
  set(true)
}

const { register, handleSubmit} = useForm();
const onSubmit=async(userpost:any)=>{ 

  const formData = new FormData();
  formData.append('title', userpost.title);
  formData.append('discription', userpost.discription);
  formData.append('imageData', userpost.imageData[0]);
  const response = await axios.post('http://localhost:4000/dash', formData);
  console.log(response);

}
    return( 
<>
  <Form onSubmit={handleSubmit(onSubmit)}>

  <div style={{display:"flex",justifyContent:"space-between"}}>
<img src="https://api.dicebear.com/6.x/bottts/png?seed=abhishake" width="50px" height="50px" alt="" />
<Input {...register("title")}style={{borderRadius:"50px",width:"90%",background:"#EEF1F2"}}/>
</div>
<textarea {...register("discription")}style={{borderRadius:"30px",marginTop:"2%",height:"20vw",border:"2px solid #EEF1F2",padding:"2%"}}></textarea>
<Hr style={{margin:"4%"}}/>

  <Tag style={{padding:"0",alignItems:"center",justifyContent:"space-around"}}>
  <div style={{display:"flex",alignItems:"center",background:"#9a9a9a",color:"#fff",padding:"2%",borderRadius:"50px"}}>{sowimg}<FontAwesomeIcon icon={faCircleXmark} onClick={()=>set(false)}style={{color: "#ffffff",marginLeft:"5%",cursor:"pointer"}} /></div>
    <div style={{display:"flex",alignItems:"center",position:"relative"}}>

  <FontAwesomeIcon icon={faImage} style={{color: "#787878",zIndex:"1",cursor:"pointer"}} />
  <Text style={{cursor:"pointer"}}>Image</Text>
  <input style={{opacity:"0",position:"absolute",cursor:"pointer",width:"100%"}} {...register("imageData")}type="file" onChange={imgtext}/>
 
  </div>

    <div style={{display:"flex",alignItems:"center"}}>
  <FontAwesomeIcon icon={faImage} style={{color: "#787878",}} />
  <Text style={{}}>Clip</Text>
  </div>
    <div style={{display:"flex",alignItems:"center"}}>
  <FontAwesomeIcon icon={faImage} style={{color: "#787878",}} />
  <Text style={{}}>Attachments</Text>
  </div>
    <div style={{display:"flex",alignItems:"center"}}>
  <FontAwesomeIcon icon={faImage} style={{color: "#787878",}} />
  <Text style={{}}>Audio</Text>
  </div>
    <div style={{display:"flex",alignItems:"center"}}>
<Button>Post</Button>
  </div>
  </Tag>


</Form>
{
  
  mypostdata?.map((item:any)=>{
return(
 <Newcard>
  <Link to={`/blog/${item._id}`}>
<img src={item.imageData} width="600px" height="250px"alt="" />
</Link>
  <Cardcontent>
  <Text style={{lineHeight:"2rem"}}>Sports</Text>
  <Text style={{fontSize:"1.1rem"}}>{item.title}</Text>
  <Hr style={{marginTop:"1%"}}/>
  <Tag style={{marginTop:"0",width:"90%",alignItems:"center",justifyContent:"space-evenly"}}>
  <FontAwesomeIcon icon={faCircleUser} style={{color: "#787878",marginLeft:"3%"}} />
<Text>Akshat</Text>
    <FontAwesomeIcon icon={faHeart} style={{color: "#696969",marginLeft:"auto"}} />
  </Tag>
  </Cardcontent>
 </Newcard> )
  })
}


 
</>
    )
}
export default Dash;