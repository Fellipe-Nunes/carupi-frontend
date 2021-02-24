import React, { useEffect, useState} from "react";
import CarForm from './carform'
import styled from 'styled-components'
import {Button, Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {getCarList, removeCar} from '../../store/carlist/carlist.action'
import CustomList from "../list"
import { getBranches } from "../../store/branchlist/branchlist.action";

function CarList () {

  const [modalShow, setModalShow] = useState(false);
  const [editCar, setEditCar]  = useState({})
  const dispatch = useDispatch()
  const carsState=useSelector((state) => state.carlist.all)
  const [refresh, setRefresh] = useState(false);  
  const [show, setShow] = useState(false);
  
  
  useEffect(() => {
     dispatch(getCarList())
     dispatch(getBranches())
     setRefresh(false)
     
  }, [dispatch, modalShow, refresh])
   
  const handleClose = () => setShow(false);

  const ModalConfirmation = () => {
    return (
      <>
      <Modal show={show} >
       <ModalWraper>
        <Modal.Header closeButton={false}>
          <Modal.Title>Deletando {editCar.brand} {editCar.carmodel}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja continuar?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="warning" onClick={()=> deleteCar(editCar)}>
            Confirmar
          </Button>
          </Modal.Footer>
        </ModalWraper>
      </Modal>
    </>)
  }

  const deleteCar = async (editCar) => {
    await removeCar(editCar)
    setShow(false)
    setRefresh(true)
  }



  return (
    <>
     {modalShow && <CarForm user={editCar} setModalShow={setModalShow}/>}
     {show && <ModalConfirmation user={editCar}  setShow={setShow}/>}

      <CustomList columnsNames={["Condição","Marca","Modelo","Ano","Combustível","Cor"]} 
      columns={["carstatus","brand","carmodel","year","fueltype","color"]}
      list={carsState}
      editAction={(car)=>{setModalShow(true);setEditCar(car)}}
      deleteAction={(car)=>{setShow(true);setEditCar(car)}}
      addAction={()=>{setEditCar({}); setModalShow(true)}}
      />
      
</>
  );
};

export default CarList

const ModalWraper = styled.div `
background-color:#343a40;
color:#fff;

`



