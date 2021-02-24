import React from 'react'
import styled from "styled-components"
import image1 from '../../../assets/images/logo-audi.png'
import image2 from '../../../assets/images/logo-jaguar.svg'
import image3 from '../../../assets/images/logo-lamborgini.png'
import image4 from '../../../assets/images/logo-ferrari.png'
import { Container } from 'react-bootstrap'

export default () => {
    return (
      
        <BrandList>
        <Container>
          <h2>As melhores marcas</h2>
          <BrandWrapper>
          <Brand backgroundimage={image1}/>
          <Brand backgroundimage={image2}/>
          <Brand backgroundimage={image3}/>
          <Brand backgroundimage={image4}/>
          </BrandWrapper>
        </Container>
        </BrandList>

      
    )
  }
  
  // Styled Components
  const BrandList = styled.div`
  
      background-color:#201E27;
      width:100%;
      padding-bottom:2em;
      h2{
        color:goldenrod;
      }
  
  `;
  const Brand=styled.div`
    width:20%;
    height:100px;
    overflow:hidden;
    background-color:#fff;
    background-image:url(${props => props.backgroundimage});
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    transition:ease-in;
    cursor:pointer;
  
    
    &:hover{
      transform:scale(1.1);
      
    }
  @media (max-width:768px){
    width:48%;
    margin:1em 0;
  }
  `;
const BrandWrapper =styled.div`
  display:flex;
  justify-content:space-between;

  flex-wrap:wrap;
`;