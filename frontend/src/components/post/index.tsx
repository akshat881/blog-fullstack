import Bg from 'Assets/Logo/WITS@4x.svg'
import { useEffect, useState } from 'react';
import {Main,Text,Title,Img} from 'styled/postes'
import { useParams } from 'react-router-dom';
const Blogs=()=>{
  const {id}=useParams();
  console.log(id)
    return(
       <>
       <Main>
       <Title>Private Route, Public Route, and Restricted Route with React Router</Title>
       <Text>React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with following components:
Home: a public route that everyone can access to.
Dashboard: a private route that only authenticated user can access to.
Sign-in: a restricted route that unauthenticated user can see. To explain more, we don’t want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page.
Note: Please check the Github repository for the full source code
</Text>
<Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"/>
<Text>React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes. For a quick demonstration, we will build a simple application with following components:
Home: a public route that everyone can access to.
Dashboard: a private route that only authenticated user can access to.
Sign-in: a restricted route that unauthenticated user can see. To explain more, we don’t want to show the sign-in page after logged in to the site. If the authorised user goes to the sign-in page, we will redirect to dashboard page.
Note: Please check the Github repository for the full source code
</Text>
       </Main>
       </>
    )
      
      
    
}
export default Blogs;