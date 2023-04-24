import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height:100vh;
  justify-content: center;
  align-items: center;
  &:after{
content: "";
position: absolute;
top: 0;
right: 0;

width: 23vw;
height: 12vw;
background: #FACB30;
border-radius: 0 0 0 10vw;
 z-index: -4; 
   }
   &:before{
content: "";
position: absolute;
bottom: 0;
left: 0;

width: 23vw;
height: 12vw;
background: #FACB30;
border-radius: 0 10vw 0 0;
 z-index: -4; 
   }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
 
  background: #fff;
   overflow: hidden;
`
export const H3 = styled.h6`
display:flex;
gap: 1%;
align-items: center;
font-family:'Inter';
font-size: 1em;
  font-weight: 500;
    color: black;
`
export const H2 = styled.h1`
font-family:'Inter';
   font-size: 2em;
  font-weight: 800;
    color: black;

`
export const Text = styled.div`
margin-left:auto;
font-family:'Poppins';
   font-size: 1em;
  font-weight: 500;
    color: #1D2E88;
line-height: 24px;
cursor: pointer;
`
export const Button = styled.button`
 border: none;
    width: 100%;
    padding: 4%;
color: #fff;
background: #1D2E88;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
`

export const Form = styled.form`
position: relative;
   width: 550px;
    height: 566px;
padding: 3%;
  background: #fff;
  border-radius: 10px;
   /* border: 1px solid #4f30677d; */
   &:after{
content: "";
position: absolute;
top: 6vw;
left: -3vw;

width: 15vw;
height: 15vw;
background: #FACB30;
border-radius: 50vw;
 z-index: -4; 
   }
   &:before{
content: "";
position: absolute;
bottom: -5vw;
left: 20vw;
width: 15vw;
height: 15vw;
background: #FACB30;
border-radius: 50vw;
 z-index: -4; 
   }
`
export const Input = styled.input`
    width: 100%;

    border: 1px solid #f0d806ef;
    padding: 5%;
    overflow: hidden;
    background: transparent;
    font-weight: 500;
    font-size: 1em;
    border-radius: 10px;
     &:focus {
        outline: none;
    }
`