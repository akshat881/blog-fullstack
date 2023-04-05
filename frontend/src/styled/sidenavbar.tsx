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
  position: absolute;
  background: #fff;
  height: 10.3vh;
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