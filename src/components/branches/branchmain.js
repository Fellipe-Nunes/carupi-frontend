import React, { useEffect, useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBranches } from '../../store/branchlist/branchlist.action'
import {getCarList} from '../../store/carlist/carlist.action'
import styled from 'styled-components'
import PageTitle from "../layout/pageTitle"
import bg from '../../assets/images/filiais-title.jpg'

const BranchMain = () => {
    const [form, setForm]= useState({})
    const [showlist, setShowList] =useState(false)

    const dispatch = useDispatch()

    const handleChange = (attr) => {
        const {value, name} = attr.target
        setForm({
          ...form,
          [name]:value
        })
        return
      }
    
    useEffect(()=>{
        dispatch(getBranches())
        dispatch(getCarList())
    },[dispatch])
    const branches = useSelector(state => state.branchlist.all)
    const cars = useSelector(state => state.carlist.all)

    

    const MountList = ()=>
        cars.filter(car => car.location === form.location).map((item, i)=>{
            console.log(item)
        return <tr key={i}>
        <td>{item.brand}</td>
        <td>{item.carmodel}</td>
        <td>{item.year}</td>
        <td>{item.fueltype}</td>
        <td>{item.color}</td>
        </tr>
        }

        )
        // return console.log(cars.filter(car => car.location === form.location)) 
         
            
        
     const selectedBranch = branches.find(branch => branch._id === form.location)

  return (
    <>
      <PageTitle background={bg} title="Lista de carros por filial"/>
       
    <Container>
   <Search>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput9">
            <Form.Label>Filial</Form.Label>  
            <Form.Control as="select"  onChange={handleChange} value={branches._id} size="sm" name="location" custom>
              <option></option>
              {branches.map((local, i) => <option key ={i} value={local._id} >{local.fakename}</option>
        )}</Form.Control>
        </Form.Group>
      </Form>
        <div>Endereço:<p>{selectedBranch?selectedBranch.adress:"selecione a filial para ver o endereço"}</p></div>
      <Button onClick={()=>setShowList(true)}>Buscar</Button>
      </Search>
      {showlist && 
        <CustomList>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>marca</th>
                <th>modelo</th>
                <th>ano</th>
                <th>combustível</th>
                <th>cor</th>
            </tr>
            </thead>

            <tbody>
                {MountList()}
            </tbody>
        </Table>
        </CustomList>}
    </Container>
    </>
  )
}

export default BranchMain
const Search=styled.div`
display:flex;
width:100%;
background-color: rgba(0,0,0,.5);
justify-content:space-between;
align-items:center;
color:#fff;
padding-right:1em;
margin:1em 0;
>div{
  width:50%;

 
  padding: 0.5em 1em;
  height:95px;
}
form{
  background-color:#201E27;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  padding: 0.5em 1em;
  width:40%;
  >div{
    width:90%;
  }
}
button{
  padding:0 1em;
}
`;

const CustomList = styled.div`

overflow:overlay;
padding-bottom:2em;

`;
const Button = styled.button`
background-color: goldenrod;
padding:0 3px;
border-radius:5px;
border: none;
:first-child{
    margin-right: 5px;}


`
