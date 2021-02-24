import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'

const PageTitle = ({background,title}) => <PageTitleStyled background={background}>
    <Container>{title}</Container>
    </PageTitleStyled>

export default PageTitle;
const PageTitleStyled=styled.h2`

background-image:linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url(${props => props.background});
    background-color: rgba(218,165,32,0.5);
    color: goldenrod;
    border-bottom:2px solid #201E27;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
    background-size:cover;

`;