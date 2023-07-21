import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>U&A</Logo>
          <NavHolder>
            <Navs>Home</Navs>
            <Navs>Solution</Navs>
            <Navs>About Us</Navs>
            <Navs>Our Partners</Navs>
            <Navs>Contact Us</Navs>
          </NavHolder>
          <ButtonHolder>
            <Button>Login</Button>
            <Button2>Sign-Up</Button2>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  border-bottom: 1px solid grey;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid skyblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavHolder = styled.div`
width: 55%;
display: flex;
justify-content: center;
`;

const Navs = styled.div`
margin-left: 15px;
font-size: 16px;
font-weight: 400;
`;

const ButtonHolder = styled.div`
width: 25%;
display: flex;
justify-content: center;
align-items: center;
`;

const Button = styled.div`
font-size: 18px;
font-weight: 600;
margin-left: 10px;

`;

const Button2 = styled.div`
font-size: 18px;
font-weight: 600;
margin-left: 10px;

`;
