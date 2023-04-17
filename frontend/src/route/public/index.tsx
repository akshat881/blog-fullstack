import {Check} from 'helper'
import {Navigate} from 'react-router-dom'

const  PublicRoutes=(props:any)=>{
const path="/home"
  const {component} = props;
  // console.log(component)
    if (Check()) return <Navigate to={path}/>;
 
  return component;

}

export default PublicRoutes;