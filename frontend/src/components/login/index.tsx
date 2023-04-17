import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Formuser} from 'interface'
import axios from 'axios';
// import Post from 'api/post'
import {usePostdata} from 'hooks/index'
import Bg from 'Assets/Logo/WITS@4x.svg'
const Login=()=>{
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm<Formuser>();
  const myData=usePostdata()
  // const {mutate,data:any} = useMutation((userdata)=>{
  //   usePostdata(userdata)
  // })
    
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