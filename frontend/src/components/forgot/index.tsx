import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import { Link} from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Formuser} from 'interface'
// import Post from 'api/post'
import {usePostdata} from 'hooks/index'
import Bg from 'Assets/Logo/WITS@4x.svg'
const Forgot=()=>{

  const { register, handleSubmit} = useForm<Formuser>();
  const myData=usePostdata()
  // const {mutate,data:any} = useMutation((userdata)=>{
  //   usePostdata(userdata)
  // })
    
  const onSubmit: SubmitHandler<Formuser> =async(userdata)=>{
    // const data=Postdata("/",userdata)
    // Post("/",data)
    
    console.log(userdata);
       const data=await myData("/forgot",userdata);
    
      console.log(data);
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
            <Form onSubmit={handleSubmit(onSubmit)} style={{height:"400px"}}>
              <Card >
            <img src={Bg} style={{maxWidth:"30%"}}/>
              <H2>Enter Your Mail</H2>
              <Input {...register("email")} type="text" placeholder="Email Address"/>
              <Button>Verify</Button>
              </Card>
            </Form>     
      </Container>
        </>
    )
}
export default Forgot;