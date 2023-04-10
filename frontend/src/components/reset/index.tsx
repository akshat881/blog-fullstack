import {useForm,SubmitHandler} from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios';
import {usePostdata} from 'hooks/index'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Resetuser} from 'interface'
import Bg from 'Assets/Logo/WITS@4x.svg'
import Error from 'components/error';
const Reset=()=>{
  const { register, handleSubmit} = useForm<Resetuser>();
  const queryString = new URLSearchParams(window.location.search);
  const paramsdat =queryString.get('t')
  const paramdate=Number(paramsdat?.split("/")[1])
   const email=queryString.get('t');
   const mail=email?.split('/')[0]

  const onSubmit: SubmitHandler<Resetuser> =async(userdata)=>{
    console.log(mail)
      axios.defaults.withCredentials = true;
      const { data } = await axios.post('http://localhost:4000/reset', userdata,{params:{email:mail}});
      console.log(data)
         Swal.fire({
        position: 'top-end',
        icon: data.icon,
        title: `${data.message}`,
        showConfirmButton: false,
        timer: 1500
      })

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