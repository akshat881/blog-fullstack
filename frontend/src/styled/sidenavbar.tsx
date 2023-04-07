import styled from "styled-components";

 export const Container=styled.div`
 position :fixed;
 left:0;
 top:0;
 width:250px;
 height:100vh;
 border:1px solid #EEF1F2;
overflow: hidden;
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
 export const Link=styled.a`
display: flex;
align-items: center;
   width: 100%;
   cursor: pointer;
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
`
  export const Mainsection=styled.div`
  margin-top:4.85vw;
  position:absolute;
  right:0;
  background: #F4F6F8;
 
  width: calc(100% - 253px);
  transition: all .5s ease-in-out;
 `
 export const Cards=styled.div` 
 padding:2%;
 `
export const Cardsinner=styled.div` 

display:flex;

`
export const News=styled.div` 
/* border:2px solid red; */
display:flex;
gap:2%;
flex-direction:row;
flex-wrap:wrap;
width:100%;
`
export const Newsupdate=styled.div` 

height:100vh;
width:40%;

`
export const Newslatest=styled.div` 
margin-top:3%;
display:flex;
align-items:center;
width:100%;
`
export const Ul2=styled.div`

padding:5%;
border-radius:10px;
background:#ffffff;
 `
export const Newcard=styled.div`
overflow:hidden;
position:relative;
width:27vw;
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