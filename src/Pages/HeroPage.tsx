import React from 'react'
import styled from 'styled-components'
import pix from "../Assets/istockphoto-1489836036-612x612.jpg"

const HeroPage = () => {
  return (
    <div>
        <Container>
            <Main>
               <SectionA>
               <BigText>Blood donation is a simple act with a big impact.</BigText>
                <ConceptText>Blood donation is a simple act of compassion that can make a big difference. Please give the gift of life today."</ConceptText>
                <Get>
                    Get Started With Us
                </Get>
               </SectionA>
               <SectionB>
                <img src={pix} alt="" />
               </SectionB>
            </Main>
        </Container>
    </div>
  )
}

export default HeroPage

const SectionB =styled.div`
width: 55%;
object-fit: cover;
img{
    height: 100%;
    width: 100%;
}
`

const Get =styled.div`
padding: 10px 17px;
background-color: #66ccf4;
border-radius: 10px;
width: 180px;
margin-top: 10px;
`


const ConceptText =styled.div`
font-size: 16px;
line-height: 32px;
font-family: "Poppins";
font-weight: 400;
margin-top: 10px;

`
const BigText =styled.div`
color: #008db9;
font-size: 54px;
font-weight: 700;
font-family: "Arial Nova";
line-height: 60px;
text-align: left;
`

const SectionA =styled.div`
width: 45%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Main =styled.div`
width: 90%;
display: flex;

`

const Container =styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
`

