import React from "react";
import { NavLink } from "react-router-dom";
import {RiArrowDropDownLine} from "react-icons/ri"
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>U&A</Logo>
          <NavHolder>
            <Navs>Home</Navs>
            <Navs style={{display: "flex"}}>Solution
                <Icon />
            </Navs>
            <Navs>About Us</Navs>
            <Navs>Our Partners</Navs>
            <Navs>Contact Us</Navs>
          </NavHolder>
          <ButtonHolder>
            <Button to="/register">Login</Button>
            <Button2>Sign-Up</Button2>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Icon = styled(RiArrowDropDownLine)``

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

const Button = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  height: 40px;
  width: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #263136;
`;

const Button2 = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  /* padding: 10px 15px; */
  background-color: #66ccf4;
  border-radius: 20px;
  color: white;
  height: 40px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: whitesmoke;
    color: #66ccf4;
    transition: all 400ms ease-in-out;
  }
`;
