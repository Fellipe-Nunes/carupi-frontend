import React from 'react'
import { Container } from 'react-bootstrap'
import styled from "styled-components"
import servicesbg from '../../../assets/images/services.jpg'

import {GiCityCar,GiCarBattery,GiCarKey,GiCarWheel} from "react-icons/gi";

export default () => {
  return (
    <Services>
      <Container>
      <TitleServices>Os melhores serviços</TitleServices>
     <ServicesWrapper>
     <div><GiCarBattery/> <strong>Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p></div>
<div><GiCityCar/><strong>Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p></div>
<div><GiCarKey/><strong>Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p></div>
<div><GiCarWheel/><strong>Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p></div>
     </ServicesWrapper>
 
      </Container>
    </Services>
  )
}

// Styled Components
const TitleServices = styled.h2`

   color: goldenrod;
 

`;
const Services=styled.div`
  background:url(${servicesbg});
  background-size: cover;
  padding:1em 0;

 
`;
const ServicesWrapper=styled.div`
  display:flex;
  justify-content:space-between;
 
  flex-wrap:wrap;
  >div{
    width:20%;
    background-color:rgba(0,0,0,0.5);
    padding:1em;
    color:#fff;
    text-align:center;
    margin:1em 0;
    @media (max-width:768px){
      width:48%;
    }
  }
  svg{
    color: goldenrod;
    font-size:2em;
    border-bottom:1px solid goldenrod;
    padding:5px;
    display:block;
    margin: auto;
margin-bottom:0.5em;
  }
`;
