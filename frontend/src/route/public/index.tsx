import {Check} from 'helper'
import {Navigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
const  PublicRoutes=(props:any)=>{
  const user=useSelector((state:any)=>{
    return state.postuser
  })
  const {component} = props;
  const id=user[0]?._id;

  //  console.log(component)
    if (Check()) return <Navigate to={`/home/${id}`}/>;
 
  return component;

}

export default PublicRoutes;