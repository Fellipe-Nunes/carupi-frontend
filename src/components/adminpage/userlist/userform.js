import React, {useState}from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import {userSave} from '../../../store/user/user.action'

const User = ({user, setModalShow}) => {

const [form, setForm] = useState(
user  
)
const dispatch  = useDispatch()
const branch = useSelector(state => state.branchlist.all)

const handleChange = (attr) => {
  const {value, name, checked} = attr.target

 const isChecked = name ==='is_active' || name==='is_admin'

 setForm({
   ...form,
   [name]:isChecked ? checked : value
 }) 
}
const submitForm = async () => {
   
   await dispatch(userSave(form))
    setModalShow(false)
    setForm({})
  
}

  return (
    <Darker>
    <ModalTeste>
    <ButtonClose onClick={()=>setModalShow(false)} >x</ButtonClose>
      <h3>Cadastro de usuário</h3>
    
    <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Nome Completo</Form.Label>
      <Form.Control onChange={handleChange} type="text" name='fullname' value={form.fullname || ''} placeholder="Ex: Marta da Silva"/>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput2">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={handleChange} type="email" name="email" value={form.email || ''} placeholder="name@example.com" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput3">
      <Form.Label>Usuário</Form.Label>
      <Form.Control onChange={handleChange} type="email" name="username" value={form.username || ''} placeholder="Escolha um apelido" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput4">
      <Form.Label>Senha</Form.Label>
      <Form.Control onChange={handleChange} type="password" name="password" value={form.password || ''} placeholder="Mínimo 6 caracteres" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput5">
      <Form.Label>Filial</Form.Label>
      <Form.Control onChange={handleChange} as="select" value={form.company} size="sm" name="company" custom><option></option>{branch.map((local, i) => <option defaultValue='0'  key ={i} value={local._id}>{local.fakename}</option>
    )}</Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput6">
      <Form.Label>Data de Nascimento</Form.Label>
      <Form.Control onChange={handleChange} type="date" name="birthdate" value={form.birthdate || ''} placeholder="ex: 15/11/1998" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox1">
      <Form.Check onClick={handleChange} onChange={handleChange} type="checkbox" checked={form.is_active? true : false} name="is_active" value={form.is_active || ''} label="Funcionário Ativo" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox2">
      <Form.Check onChange={handleChange} onClick={handleChange} type="checkbox" checked={form.is_admin? true : false} name="is_admin" value={form.is_admin || ''} label="Administrador" />
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
