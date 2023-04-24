import {Check} from 'helper'
import {Navigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const  PublicRoutes=(props:any)=>{

  const {component} = props;


   console.log(component)
    if (Check()) return <Navigate to="/home/:id"/>;
 
  return component;

}

export default PublicRoutes;