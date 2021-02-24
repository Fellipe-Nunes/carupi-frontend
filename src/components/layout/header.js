import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {isAuthenticated, removeToken } from "../../config/auth";
import logo from "../../assets/images/logo.png"


export default () => {
  const logout = () => {
    removeToken()
  }
  const menu = [
    {
      title: `${isAuthenticated()?"Admin":""}`,
      link: `${isAuthenticated()?"/admin":""}`,
      icon: "",
    },
    {
      title: "Home",
      link: "",
      icon: "",
    },
    {
      title: "Carros",
      link: "carlist",
      icon: "",
    },
    {
      title: "Filiais",
      link: "branches",
      icon: "",
    },
    {
      title: `${isAuthenticated()?"Sair":"Login"}`,
      link: `${isAuthenticated()?"/":"login"}`,
      icon: "",
      action:()=>logout()
    },
    
  ];
  
  return (
    
      <Header>
        <Navbar>
        <Logo href="/"><img src={logo} alt=""/></Logo>
          <Container>
          
    
           
              <MenuMobile className="justify-content-end">
      
              <MenuDesk>
                  {menu.map((item, i) => (
                    <Link to={item.link} key={i}>
                      <Nav.Link onClick={item.action} as="div">{item.title}</Nav.Link>
                    </Link>
                  ))}
                </MenuDesk> 
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    className="justify-content-end"
                    id="dropdown-basic"
                    >
                    Menu
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {menu.map((item, i) => (
                      <Link to={item.link} key={i}>
                        <Nav.Link onClick={item.action} as="div">{item.title}</Nav.Link>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </MenuMobile>
          </Container>
        </Navbar>
      </Header>
   
  );
};

const Header = styled.header`
  width: 100%;
  background-color:#201E27;
  nav{
    padding:0;
    >div div{
      padding: 0 1rem;
    }
  }

`;
const Logo=styled(Navbar.Brand)`
clip-path: polygon(0% 0%,100% 0%,75% 100%,0% 100%);
background-color:#fff;
padding: .5rem 1rem;
padding-right:30px;
img{
    width:100px;
  }
`;
const MenuMobile=styled(Navbar.Collapse)`
.dropdown{
@media (min-width:500px){
  display:none;
}}
`;
const MenuDesk=styled(Nav)`
&.navbar-nav .nav-link{
  color:goldenrod;
}
@media (max-width:500px){
  display:none;
}
`;