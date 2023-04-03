import {useForm,SubmitHandler} from 'react-hook-form'
import {useQuery,useMutation} from 'react-query'
import {useNavigate,Link} from "react-router-dom";
import Swal from 'sweetalert2'
import { Container, Card,Input, Form, H3, Text,H2, Button } from 'styled/form'
import {Formuser} from 'interface'
// import Post from 'api/post'
import {usePostdata} from 'hooks/index'
import Bg from 'Assets/Logo/WITS@4x.svg'
const Dash=()=>{
  
    return( 
      <>
      <h1>logdin</h1>
        </>
    )
}
export default Dash;