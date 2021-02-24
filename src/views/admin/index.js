import React, {useState} from 'react'
import User from '../../components/adminpage/userlist'
import styled from 'styled-components'
import CarList from '../../components/carlist'
import BranchList from '../../components/branches/'
import { Container } from 'react-bootstrap'


const AdminPage = () => {

  const [showList, setShowList] = useState("")

  const component = ()=> {
    switch (showList) {
      case 'userlist':
        return (<User/>)
      case 'carlist':
        return (<CarList/>)
      case 'branchlist':
        return (<BranchList/>)        
    
      default:
        break;
    }
  }

  return (
    <>
      <Dash>
      <ButtonsWrapper>
      <ListButton onClick={() => {setShowList('carlist')}}>Lista de Carros</ListButton>
      <ListButton onClick={() => {setShowList('userlist')}}>Lista de usuários</ListButton>
      <ListButton onClick={() => {setShowList('branchlist')}}>Lista de concessionárias</ListButton>
      </ButtonsWrapper>
        {component()}
      </Dash>
    </>
  )
}

export default AdminPage
const ButtonsWrapper=styled(Container)`
 
  margin-top:2em;
  display:flex;
  justify-content:space-between;
`;

const Dash = styled.div`

  min-height:100vh;
  /* background-color:red; */

`
const ListButton = styled.button`

  border:none;
  padding:3px;
  background-color:  #43494E;
  outline:none;
  padding:0.5em;
  width:30%;
  :hover,:focus{
    background-color:#343A40;
    outline:none;
    color:goldenrod;  }
  
  /* background-color:red; */

`
