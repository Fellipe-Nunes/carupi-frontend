import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBranches } from '../../store/branchlist/branchlist.action'
import { getCarList } from '../../store/carlist/carlist.action'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'
import bg from "../../assets/images/carros-title.jpg"
import PageTitle from "../layout/pageTitle"

const MainCarList = () => {

    const dispatch = useDispatch()  
   
  useEffect(() => {
     dispatch(getCarList())
     dispatch(getBranches())
     
  }, [dispatch])
  const carsState=useSelector((state) => state.carlist?.all)
  const branchState=useSelector((state) => state.branchlist?.all)
  
  const branchName = (car) => branchState.filter(branch => car.location === branch._id).map((item)=>item.fakename)

  return (
    <>
    <PageTitle background={bg} title="Nossos carros"/>
    <Container>
     
    <CardWrapper>
        {carsState.map((car, i)=>{ 
          const {photo,carmodel,color,brand,year}=car;      
        return<Card key={i}>
          <CardImg background={photo}>
          </CardImg>

          <CardBody>
            <CardTitle>{carmodel} - {year}</CardTitle>
            <span>{brand} {color} </span>
           <span> disponivel na {branchName(car)}</span>
          </CardBody>
        </Card>  }             
        )}
    </CardWrapper>
    </Container>
    </>
  )
}

export default MainCarList

const CardBody=styled.div`
color:#fff;
padding:0.5em;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
width:55%;
text-align:center;
`;
const CardTitle=styled.strong`
font-size:1.2em;
  color:goldenrod;
  `;
const CardImg=styled.div`
width:45%;
clip-path: polygon(0% 0%,100% 0%,75% 100%,0% 100%);
min-width:170px;
background-image:url(${props => props.background});
background-size:cover;
background-position: center;
background-color:rgba(0,0,0,.9);

`;
const Card = styled.div`
    display:flex;
    width:48%;
    height:150px;
    background-color:rgba(0,0,0,0.7);
    justify-content:space-between;
   margin:1em 0;
   @media (max-width:768px){
    width:100%;
  }
    :hover{
      transform:scale(1.1);
    }

`;
const CardWrapper=styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;

`;