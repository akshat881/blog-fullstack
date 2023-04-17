import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Formuser} from 'interface'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import Post from 'api/post'
import {useGet, usePostdata} from 'hooks/index'
import Bg from 'Assets/Logo/WITS@4x.svg'
import { addpost } from 'store/slice';
import { useState } from 'react';
const Login=()=>{
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm<Formuser>();
  const myData=usePostdata()
const [show,set]=useState()
  // const {data}=useGet("/postdata")

  // const mypostdata=data?.data;
  const onSubmit: SubmitHandler<Formuser> =async(userdata)=>{
 



    axios.defaults.withCredentials = true;
    const data=await myData("/login",userdata);

    Swal.fire({
      position: 'top-end',
      icon: data.data.icon,
      title: `${data.data.message}`,
      showConfirmButton: false,
      timer: 1500
    })
    if(data.status===200){
     await axios.get('http://localhost:4000/postdata').then((data)=>{
        dispatch(addpost(data.data))
      })

      window.location.href = "/home";

    } 
  }
   
   

  // };

    return( 
      <>
      <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Card>
            <img src={Bg} style={{maxWidth:"30%"}}/>
              <H2>Login With WIL</H2>
              <H3>New User? <Link to="/" style={{textDecoration:"none"}}><Text style={{margin:"0",fontWeight:"600"}}> Create an Account</Text></Link></H3>
              <Input {...register("email")} type="text" placeholder="Email Address"/>
   
              <Input  {...register("password")} type="password"  placeholder="Password"/>

                <Link to="/forgot" style={{textDecoration:"none"}}><Text>Forgot Password?</Text></Link>
              <Button>Login</Button>
              </Card>
            </Form>     
      </Container>
        </>
    )
}
export default Login;