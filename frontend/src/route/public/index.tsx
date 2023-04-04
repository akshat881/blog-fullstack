import React from 'react';
import {Check} from 'helper'
import {Navigate} from 'react-router-dom'

const  PublicRoutes=(props:any)=>{
  const {component} = props;
  if (Check()) return <Navigate to="/dash"/>;
  return component;

}

export default PublicRoutes;