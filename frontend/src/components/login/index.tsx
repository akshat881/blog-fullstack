import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Formuser} from 'interface'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import {useGet, usePostdata} from 'hooks/index'
import Bg from 'Assets/Logo/WITS@4x.svg'
import { addpost, adduser } from 'store/slice';
import { useState } from 'react';
const Login=()=>{
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm<Formuser>();
  const myData=usePostdata()
const [show,set]=useState()

  const onSubmit: SubmitHandler<Formuser> =async(userdata)=>{
 
   await myData("/login",userdata).then((data)=>{
    console.log(data.data.userdetail._id)
      Swal.fire({
        position: 'top-end',
        icon: data.data.icon,
        title: `${data.data.message}`,
        showConfirmButton: false,
        timer: 1500
      })
      if(data.status===200){
        dispatch(adduser(data.data.userdetail))
        navigate(`/home/${data.data.userdetail._id}`)

  
      } 
    })


  
  }
   
   


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