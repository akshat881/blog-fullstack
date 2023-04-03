import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'

// import Post from 'api/post'
import {usePostdata} from 'hooks/index'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Resetuser} from 'interface'
import Bg from 'Assets/Logo/WITS@4x.svg'
import Error from 'components/error';
const Reset=()=>{
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm<Resetuser>();
  const myData=usePostdata()
  // const {mutate,data:any} = useMutation((userdata)=>{
  //   usePostdata(userdata)
  // })
    
  const onSubmit: SubmitHandler<Resetuser> =async(userdata)=>{
    // const data=Postdata("/",userdata)
    // Post("/",data)
 
       const data=await myData("/reset",userdata);
       console.log(data.status);
       if(data.status===200){
        // navigate("/dash")
       }
    
      
      Swal.fire({
        position: 'top-end',
        icon: data.data.icon,
        title: `${data.data.message}`,
        showConfirmButton: false,
        timer: 1500
      })
   

  };

    return( 
      <>
      <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Card>
            <img src={Bg} style={{maxWidth:"30%"}}/>
              <H2>Reset Your Password</H2>
          
              <Input {...register("otp")} type="text" placeholder="OTP"/>
              <Input {...register("password")} type="text" placeholder="Password"/>
              <Input  {...register("cpassword")} type="password"  placeholder="Conform Password"/>
              <Button>Reset</Button>
              </Card>
            </Form>     
      </Container>
        </>
    )
}
export default Reset;