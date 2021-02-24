import React, {useState}from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { branchSave } from '../../store/branchlist/branchlist.action';

const User = ({branch, setModalShow}) => {

const [form, setForm] = useState(branch);
const dispatch  = useDispatch()

const handleChange = (attr) => {
  const {value, name} = attr.target
  setForm({
    ...form,
    [name]:value
  })
  return
}
const submitForm = async () => {
    await dispatch(branchSave(form))
    setForm({})
    setModalShow(false)
  
}



  return (
    <Darker>
    <ModalTeste>
    <ButtonClose onClick={()=>setModalShow(false)} >x</ButtonClose>
      <h3>Cadastro de Filial</h3>
    
    <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Nome da Filial</Form.Label>
      <Form.Control onChange={handleChange} type="text" name='storename' value={form.storename || ''}/>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput2">
      <Form.Label>Nome Fantasia</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="fakename" value={form.fakename || ''}  />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput3">
      <Form.Label>Responsável Legal</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="legalowner" value={form.legalowner || ''} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput4">
      <Form.Label>Endereço</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="adress" value={form.adress || ''}  />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput5">
      <Form.Label>Telefone</Form.Label>
      <Form.Control onChange={handleChange} type="number" name="telnumber" value={form.telnumber || ''} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput6">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={handleChange} type="email" name="storemail" value={form.storemail || ''}  />
    </Form.Group>
    <Button onChange={handleChange} onClick={submitForm}>Enviar</Button>
  </Form>
  </ModalTeste></Darker>
  )
}
const Darker=styled.div`
  background-color:rgba(0,0,0,0.5);
  width:100%;
  min-height:100vh;
  position:absolute;
  top:0;
`;
const ModalTeste=styled.div`
  background-color:#fff;
  padding:1em 2em;
  width:50vw;
margin:2em auto;

  form{
    width:100%;
    padding:1em 0;
  }
`;
const ButtonClose=styled.button`
font-size:20px;
background-color:transparent;
box-shadow:none;
border:none;
width:20px;
position:absolute;
right:25%;
top:1.5em;
`;
export default User
