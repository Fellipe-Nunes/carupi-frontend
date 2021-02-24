import React, { useEffect, useState } from "react";
import {Modal, Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {getUsersList} from '../../../store/userlist/userlist.action'
import UserForm from './userform'
import { userRemove } from "../../../store/user/user.action";
import CustomList from "../../list"
import styled from 'styled-components'


export default () => {
  
  
  const [modalShow, setModalShow] = useState(false);
  const[editUser, setEditUser]  = useState({})
  const dispatch = useDispatch()
  const usersState = useSelector((state) => state.userlist.all);
  const [refresh, setRefresh] = useState(false);  
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getUsersList())
    setRefresh(false)
  }, [dispatch,modalShow, refresh])
   
  const deleteUser = async (editCar) => {
    await userRemove(editUser)
    setShow(false)
    setRefresh(true)
  }

  const handleClose = () => setShow(false);

  const ModalConfirmation = () => {
    return (
      <>
      <Modal show={show} >
       <ModalWraper>
        <Modal.Header closeButton={false}>
          <Modal.Title>Deletando {editUser.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja continuar?</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="warning" onClick={()=> deleteUser(editUser)}>
            Confirmar
          </Button>
          </Modal.Footer>
        </ModalWraper>
      </Modal>
    </>)
  }



  return (
    <>
    {modalShow &&<UserForm user={editUser} setModalShow={setModalShow}/>}
    {show && <ModalConfirmation user={editUser}  setShow={setShow}/>}
     
      <CustomList columnsNames={[ "Ativo","Admin", "Usuário","Nome Completo","Email", "Data de Nascimento","Filial"]} 
      columns={["is_active","is_admin","username","fullname","email", "birthdate","company"]}
      list={usersState}
      editAction={(user)=>{setModalShow(true);setEditUser(user)}}
      deleteAction={(user)=>{setShow(true);setEditUser(user)}}
      addAction={()=>setModalShow(true)}
      />

    </>
  );
};


const ModalWraper = styled.div `
background-color:#343a40;
color:#fff;

`
