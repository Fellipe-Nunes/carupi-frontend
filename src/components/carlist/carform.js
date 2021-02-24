import React, {useState}from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {saveCar} from '../../store/carlist/carlist.action'
import styled from 'styled-components'


const CarForm = ({user, setModalShow}) => {

  const [form, setForm] = useState(user);
  const dispatch  = useDispatch()
  const branch = useSelector(state => state.branchlist.all)

 
  


  const handleChange = (attr) => {
    const {value, name} = attr.target;
  
    
    if (name === 'photo') {
      let file = attr.target.files[0]
      setForm({
        ...form,
        'photo' : file
      })  
     
    }
else{
    setForm({
      ...form,
      [name]:value
    })}
    return
}
  
  const submitForm = async () => {
   
      let data = new FormData()
    
        Object.keys(form).forEach(key => (data.append(key,form[key])))

    const config = {
      headers:{
          'Content-type':'multipart/form-data'
      }
    }
    
      await dispatch(saveCar(data, config))
      setModalShow(false)
  }
  
    return (
      <Darker>
      <ModalTeste>
      <ButtonClose onClick={()=>setModalShow(false)} >x</ButtonClose>
        <h3>Cadastro de Carros</h3>
      
      <Form>
      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Marca</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="brand" value={form.brand || ''} placeholder="Ferrari" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="carmodel" value={form.carmodel || ''} placeholder="500GT" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput4">
        <Form.Label>Ano</Form.Label>
        <Form.Control onChange={handleChange} type="number" name="year" value={form.year || ''} placeholder="Ex:2002" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Condição</Form.Label>
        <Form.Control onChange={handleChange} type="text" name='carstatus' value={form.carstatus || ''}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput5">
        <Form.Label>Combustível</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="fueltype" value={form.fueltype || ''} placeholder="Ex:Gasolina" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput6">
        <Form.Label>Placa</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="carplate" value={form.carplate || ''} placeholder="Ex:qwe3214" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput7">
        <Form.Label>Chassi</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="chassis" value={form.chassis || ''} placeholder="Ex:321654987" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput8">
        <Form.Label>Cor</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="color" value={form.color || ''} placeholder="ex:Grafite" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput9">
        <Form.Label>Localidade</Form.Label>
        <Form.Control onChange={handleChange} as="select" value={form.location} size="sm" name="location" custom><option></option>{branch.map((local, i) => <option defaultValue='0'  key ={i} value={local._id}>{local.fakename}</option>
    )}</Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput10">        
        <Form.File id="exampleFormControlFile1" onChange={handleChange} type="file" name="photo"  label="Insira a imagem" />
      </Form.Group>      
      <Button onClick={()=>submitForm(form)}>Enviar</Button>
    </Form>
    </ModalTeste></Darker>
    )
} 
export default CarForm
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
