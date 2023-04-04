import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios';
import {useGet} from 'hooks/index'

// import Post from 'api/post'
import {usePostdata} from 'hooks/index'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Resetuser} from 'interface'
import Bg from 'Assets/Logo/WITS@4x.svg'
import Error from 'components/error';
import Cookies from 'js-cookie';
import { json } from 'stream/consumers';
const Reset=()=>{

  const navigate = useNavigate();
  const { register, handleSubmit} = useForm<Resetuser>();
  const myData=usePostdata()
  // const {mutate,data:any} = useMutation((userdata)=>{
  //   usePostdata(userdata)
  // })
  const queryString = new URLSearchParams(window.location.search);
  const paramsdat =queryString.get('email')
  const paramdate=Number(paramsdat?.split("/")[1])
  //  const paramsdat=Number(queryString.get('email'));
   const email=queryString.get('email');
   const mail=email?.split('/')[0]
  
  //  const {data}:any=useGet('/auth')

  const onSubmit: SubmitHandler<Resetuser> =async(userdata)=>{
    // const data=Postdata("/",userdata)
    // Post("/",data)
 
      //  const data=await myData("/reset",userdata);
      //  console.log(data.status); 
      // Swal.fire({
      //   position: 'top-end',
      //   icon: data.data.icon,
      //   title: `${data.data.message}`,
      //   showConfirmButton: false,
      //   timer: 1500
      // })
  

      axios.defaults.withCredentials = true;
      const { data } = await axios.post('http://127.0.0.1:4000/reset', userdata,{params:{email:mail}});
         Swal.fire({
        position: 'top-end',
        icon: data.data.icon,
        title: `${data.data.message}`,
        showConfirmButton: false,
        timer: 1500
      })
  console.log(data)
  };

    return( 
      <>{
      (paramdate>new Date().getTime())?<Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
      <img src={Bg} style={{maxWidth:"30%"}}/>
        <H2>Reset Your Password</H2>
    
        <Input {...register("otp")} type="text" placeholder="OTP"/>
        <Input {...register("password")} type="password" placeholder="Password"/>
        <Input  {...register("cpassword")} type="password"  placeholder="Conform Password"/>
        <Button>Reset</Button>
        </Card>
      </Form>     
</Container>:<Error/>
    
      }
 
        </>
    )
}
export default Reset;