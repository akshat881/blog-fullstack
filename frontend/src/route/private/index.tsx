import React from 'react';
import {Check} from 'helper'
import {Navigate} from 'react-router-dom'

const  ProtectedRoutes=(props:any) =>{

  const { component } = props;
  if (!Check()) return <Navigate to="/" />;
  return component;

}

export default ProtectedRoutes;