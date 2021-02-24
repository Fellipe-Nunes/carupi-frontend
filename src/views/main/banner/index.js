
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getCarList } from '../../../store/carlist/carlist.action'
import bg from '../../../assets/images/funddo-carros.jpg'



export default () => {

  const dispatch = useDispatch()  
   
  useEffect(() => {
     dispatch(getCarList())
    
     
  }, [dispatch])
  const carsState=useSelector((state) => state.carlist?.all)

  const [index, setIndex] = useState(0);

const scroll=(direction)=>{
  var element=document.getElementById("carouselThumbnails");

  if(direction==="left"){
    element.scrollLeft+=200;
  }
  else{
    element.scrollLeft-=200;
  }
}
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}


  return (
 <BannerContainer backgroundimage={bg}>
       <Carousel indicators={false} controls={false}  activeIndex={index} onSelect={handleSelect}>
         {carsState.map((car,index)=>
      <CarouselItem key={index} backgroundimage={car.photo}>
     
        <CarouselText>
          <h3>{car.carmodel}</h3>
          <span>{car.brand} {car.year}</span>
        </CarouselText>
      </CarouselItem>)}
    
    </Carousel>
    <ThumbnailWrapper>
    <ButtonArrow onClick={()=>scroll("right")}>{"<"}</ButtonArrow>
   
    <CarouselThumbnails id="carouselThumbnails">

      {carsState.map((car,index)=><CarouselThumbnail key={index} backgroundimage={car.photo} onClick={()=>setIndex(index)}>

      </CarouselThumbnail>
      )}
   
    </CarouselThumbnails>
    <ButtonArrow onClick={()=>scroll("left")}>{">"}</ButtonArrow>
    </ThumbnailWrapper>
</BannerContainer>
 
     )}
     
// Styled Components
const ThumbnailWrapper=styled.div`
display:flex;
width:80%;
margin:auto;
margin-top:-50px;
position:relative;
align-items:center;
`;
const ButtonArrow=styled.button`
width:30px;
color:#fff;
background-color:goldenrod;
height:30px;
border:none;
z-index:9;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;
const CarouselThumbnails=styled.div`
  display:flex;
width:110%;
  height:80px;
  overflow:hidden;
  scroll-behavior: smooth;
 

`;
const CarouselThumbnail=styled.div`
  width:20%;
  min-width:100px;
  height:80px;
  margin:0 5px;
  background-image:url(${props => props.backgroundimage});
background-size:cover;
background-color:rgba(0,0,0,0.7);
background-position:center;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;

const BannerContainer = styled.div`
width:100%;
background-color:#201E27;
padding-bottom:2em;
background-image:url(${props => props.backgroundimage});
background-size: cover;

    background-position: bottom;
`
const CarouselText=styled(Carousel.Caption)`
width:30%;
background:rgba(0,0,0, 0.7);
bottom:50%;
left:10%;
padding:0.5em;
@media(max-width:768px){
  width:40%;
}
`;
const CarouselItem = styled(Carousel.Item) `
background-image:url(${props => props.backgroundimage});
background-size:70%;
background-repeat:no-repeat;
height:400px;
width:100%;
padding:5vh;
background-position:center;
`;