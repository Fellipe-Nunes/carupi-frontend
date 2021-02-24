import React from "react";
import styled from "styled-components";
import {Container} from 'react-bootstrap';
import {FaWhatsappSquare,FaFacebookSquare, FaTelegram, FaPhoneSquare,FaEnvelopeSquare} from 'react-icons/fa'

export default () => {
  return (
   
      <Footer>
        <Container>
          <ContactWrapper>
            <div>
            <span>redes sociais</span>
          <FaWhatsappSquare/><FaFacebookSquare/><FaTelegram/></div>
          <div>
          <span>contato</span>
            <div><FaPhoneSquare/>(21)99999-9999</div>
           <div><FaEnvelopeSquare/>contato@aurum.com.br</div>
          </div>
          </ContactWrapper>
        <CopyFooter>Copyright 2020 - Todos os direitos reservados. Aurum Motors S/A</CopyFooter>
        </Container>
      </Footer>
  
  );
};

const Footer = styled.footer`
  width: 100%;
  padding: 2px;
  background-color:#201E27;
  color:#fff;
  padding:0.5em 0;
  text-align:center;
  height:100px;
  font-size:14px;
  color:#fff;
  `;
  const ContactWrapper=styled.div`
  font-size:14px;
  display:flex;
align-items:center;
  justify-content:space-evenly;
  flex-wrap:wrap;
 
  >div{
    display:flex;
    max-width: 50%;
justify-content:space-evenly;
flex-wrap:wrap;
>div{display:flex;}
  }
  
  span{
    width:100%;
    color:goldenrod;
  }
  svg{
  
    font-size:20px;
    fill:goldenrod;
    
    cursor:pointer;
    &:hover{
transform:scale(1.1);
    }
  }
`;

const CopyFooter = styled.div`
  text-align: center;
  padding: 0.5em 2px;
  font-size:12px;
 
`;
