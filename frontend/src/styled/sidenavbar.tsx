import styled from "styled-components";
import {Link} from "react-router-dom";
 export const Container=styled.div`
 position :fixed;
 left:0;
 top:0;
 width:250px;
 height:100vh;
 border:1px solid #EEF1F2;
overflow: hidden;
 -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
 `
 export const Head=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
 `
 export const Ul=styled.div`
position: absolute;
left:0;
 top:0;
 width:100%;
 height:100vh;

 `
 export const List=styled.div`
   margin-top:10%;
 margin-left: 15%;
 `
 export const Hr=styled.div<{width?:string,left?:string}>`

   width:${(props) => props.width};
 margin-left: ${(props)=>props.left};
   border:1px solid #EEF1F2;
   margin-top: 10%;
 `
 export const Linkbar=styled(Link)`
 text-decoration:none;
display: flex;
align-items: center;
   width: 100%;
   color:black;
 `
 export const Text=styled.p`

   padding:0.1rem 1rem;
   
 `
 export const Upernav=styled.div`
  position: fixed;
  background: #fff;
  height: 4.75vw;
  top: 0;
  right: 0;
  width: calc(100% - 253px);
  transition: all .5s ease-in-out;
  z-index: 2;
 display: flex;
 align-items: center;
 border-bottom:2px solid  #EEF1F2 ;
   `
 export const Navitem=styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;

   `
 export const Navtext=styled.div`
 margin-left: 5%;
 display: flex;
width: 50%;
   `
 export const Sideitem=styled.div` 
 gap:5%;
 width: 30%;
 display: flex;
 justify-content: space-between;
 align-items: center;
   `
 export const Input=styled.input`
padding:0.8rem;
width: 100%;
border: 2px solid #EEF1F2;
border-radius: 5px;
&:focus {
        outline: none;
    }
`
  export const Mainsection=styled.div`
  margin-top:4.85vw;
  position:absolute;
  right:0;
  height:105vh;
  background: #F4F6F8;
 /* border: 2px solid green; */
  width: calc(100% - 253px);
  transition: all .5s ease-in-out;
  padding:1%;
 `
 export const Cards=styled.div`
border: 2px solid red;
padding:1%;
 height:100vh;
 width: 100%;
 `
export const Cardsinner=styled.div` 
  background: #F4F6F8;
 height:100vh;

/* border: 2px solid yellow; */
display:flex;

`
export const News=styled.div` 
/* box-shadow: -5px 2px 29px -9px rgba(0,0,0,0.82); */
overflow: scroll;
 -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
height: 100vh;
/* border:2px solid green; */
display:flex;
flex-wrap:wrap;
width:100%;
margin-right:1%;
border-radius: 2%;
&::-webkit-scrollbar {
  display: none;
}
`
export const Newsupdate=styled.div` 
/* border:2px solid green; */
overflow: scroll;
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
height:100vh;
width:100%;
max-width: 500px;
&::-webkit-scrollbar {
  display: none;
}
`
export const Newslatest=styled.div` 

margin-top:3%;
display:flex;
align-items:center;
width:100%;
`
export const Ul2=styled.div`
/* border:2px solid green; */

padding:5%;
border-radius:10px;
background:#ffffff;
 `
export const Newcard=styled.div`
/* border: 2px solid red; */
margin-right: auto;

margin-top:2%;
overflow:hidden;
position:relative;
width:100%;
max-width:27vw;
height:20vw;
border-radius:5px;
`
export const Tag=styled.div`
padding:2%;
display:flex;
flex-wrap:wrap;
width:100%;
`
export const Span=styled.span`
margin:5px;
font-size:0.7vw;
padding:2%;
color:#727C89;
background:#E2E7ED;
border-radius:10px;
cursor:pointer;
`
export const Cardcontent=styled.div`
position:absolute;
bottom:0;
height:8vw;
width:100%;
background:#ffffff;
padding:3%;
cursor:pointer;
`
export const Cardimg=styled.div`
position:relative;
overflow:hidden;
width:100%;
background:#ffffff;
height:auto;
cursor:pointer;
border-radius:10px;
`
export const Form=styled.form`
box-shadow: -5px 2px 29px -9px rgba(0,0,0,0.82);
position:relative;
border-radius:1%;
padding:4%;
display:flex;
flex-direction:column;
width:100%;
background:#ffffff;
height:auto;

`
export const Button=styled.button`
padding:10% 200% 10% 100%;
border:none;
background:#6d97df;
color:#fff;
border-radius:50px;
width:100%;
cursor:pointer;
`