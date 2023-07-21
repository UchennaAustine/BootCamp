import React from "react";
import styled from "styled-components";
import pix from "../Assets/share-case-a.png"

const Solution = () => {
  return (
    <div>
      <Container>
        <Main>
          <Title>Provided Solutions:</Title>
          <SectionHolder>
          <SectionA>
            <Brief>Share your Case</Brief>
            <BriefText>
              Post your blood request and get help from nearby donors in just
              few minutes.
            </BriefText>
            <Get>Get Started</Get>
          </SectionA>
          <SectionB>
            <img src={pix} alt="" />
          </SectionB>
          </SectionHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Solution;

const SectionB = styled.div`
width: 50%;
height: 100%;
object-fit: contain;

img{
    height: 100%;
    width: 100%;
}
`;

const SectionHolder = styled.div`
display: flex;
width: 100%;
height: 100%;   
`;

const Get = styled.div`
font-size: 16px;
`;

const BriefText = styled.div`
font-size: 22px;
line-height: 41.8px;
`;

const Brief = styled.div`
font-size: 32px;
`;

const Title = styled.div`
text-align: center;
`;

const SectionA = styled.div`
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: gold;
`;
