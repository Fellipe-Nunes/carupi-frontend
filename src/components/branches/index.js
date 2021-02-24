import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BranchForm from './branchform'
import CustomList from '../../components/list'
import { branchRemove, getBranches } from "../../store/branchlist/branchlist.action";

export default () => {
  const [modalShow, setModalShow] = useState(false);
  const [editBranch, setEditBranch]  = useState({})
  const dispatch = useDispatch()  
  const branchState=useSelector((state) => state.branchlist.all);
  

  useEffect(() => {
     dispatch(getBranches())
  }, [dispatch, modalShow])
   
 
  return (
    <>
     {modalShow && <BranchForm branch={editBranch} setModalShow={setModalShow}/>}

      <CustomList columnsNames={[
      "Nome da Filial",
      "Nome Fantasia",
      "Responsável",
      "Endereço",
      "Telefone",
      "Email"
      ]} 
      columns={[
        "storename",
        "fakename",
        "legalowner",
        "adress",
        "telnumber",
        "storemail"
        ]}
      list={branchState}
      editAction={(branch)=>{setModalShow(true);setEditBranch(branch)}}
      deleteAction={(branch)=>branchRemove(branch)}
      addAction={()=>{setEditBranch({});setModalShow(true)}}
      />
      
</>
  );
};

