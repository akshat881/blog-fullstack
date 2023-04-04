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
    // const data=Postdata("/",userdata)
    // Post("/",data)



    axios.defaults.withCredentials = true;
    const data = await axios.post('http://127.0.0.1:4000/login', userdata,{withCredentials:true});
    
    if(data.status===200){
      navigate("/dash")

    }

    





  //  await fetch("http://127.0.0.1:4000/login", {
  //   method: 'POST',
  //   body: JSON.stringify(userdata),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   } 
  //   }).then(response => {
  //     console.log(response);
      
  //     // Assuming the API returns a cookie named 'token'
  //     document.cookie = `token=${response.headers.get('Set-Cookie')}`;
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  //   .then(function (data) {
  //   console.log(data)
  //  console.log("checking", data.headers.get('Set-Cookie'));
   
  //   });
  //     //  const data=await myData("/login",userdata);
  //     //  console.log(data);
     
    
  }
  //     // Swal.fire({
  //     //   position: 'top-end',
  //     //   icon: data.data.icon,
  //     //   title: `${data.data.message}`,
  //     //   showConfirmButton: false,
  //     //   timer: 1500
  //     // })
   

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