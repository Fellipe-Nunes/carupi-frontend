import React, { useState } from "react";
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/auth.action";
import Loading from '../loading'

export default () => {

  const dispatch = useDispatch();

  const [form, setForm]=useState({
    username:"fellipe",
    password:"12345678"
  })
  const loading = useSelector((state) => state.auth.loading)

  const handleChange = (attr) => {
    setForm({
      ...form,
      [attr.target.name]:attr.target.value
    })
  }
  const isSubmitValid = () => form.username && form.password

  const submitLogin = async (e) => {
    e.preventDefault()
    if (isSubmitValid()) {

      dispatch(login(form))
    }
  }


  return (
    <>
      <CustomLogin> 
        {loading? <Loading/> : (<Form>
          <Form.Group controlId="formBasic">
            <Form.Label>Usuário</Form.Label>
            <Form.Control onChange={handleChange} name="username" value={form.username || ""} type="text" placeholder="Insira seu usuário" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="password" value={form.password || ""} placeholder="Insira sua Senha" />
          </Form.Group>
          <Button onClick={submitLogin} disabled={!isSubmitValid()} type="submit" variant="primary">
            Submit
          </Button>
        </Form> )} 
      </CustomLogin>
    </>
  )
}

const CustomLogin = styled.div`
  width: 30%;
  background: transparent;
  margin-left:35%;
  margin-top:50px;
`