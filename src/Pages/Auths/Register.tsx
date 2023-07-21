import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
    <Container>
                <Main>
                    <Card>
                    <Title>Sign Up</Title>

                         <InputHolder>
                             <InputText>User Name</InputText>
                           <Input placeholder="User Name"
                                
                            />
                            <Error>User Name Error</Error>
                        </InputHolder>

                        <InputHolder>
                            <InputText>Email</InputText>
                            <Input placeholder="Email" />
                            <Error>email error</Error>
                        </InputHolder>

                        <InputHolder>
                            <InputText>Password</InputText>
                            <Input placeholder="Password" />
                            
                        </InputHolder>

                        <InputHolder>
                            <InputText>Confirm</InputText>
                            <Input placeholder="Confirm" />
                           
                        </InputHolder>


                        <Button >Sign Up</Button>

                        <TextHolder>
                            <Line />
                            <MyText>or</MyText>
                            <Line />
                        </TextHolder>

                        <Link
                            style={{ textDecoration: "none", color: "#10222a" }}
                            to="/sign-in"
                        >
                            <Button >Sign In</Button></Link>

                    </Card>

                </Main>
            </Container>
        </div>
    )
}

export default Register

const MyText = styled.div`
margin: 0 5px
`

const Line = styled.div`
height: 1px;
width: 100%;
background-color: #837583
`

const TextHolder = styled.div`
display:flex;
width: 99%;
align-items: center;
`

const Button = styled.button`
width: 99%;
height: 40px;
justify-content: center;
align-items: center;
display:flex;
background-color: #66ccf4;

color: white;
border-radius: 3px;
cursor: pointer;
border: 0;
outline: none;
font-family: Poppins;
font-size: 15px;
margin-top: 20px;

`

const Error = styled.div`
font-size: 12px;
color: #033257;
text-align: right;
display: none;
`

const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 3px;
height: 30px;
width: 97%;
padding-left: 5px;

::placeholder{
    font-size: 12px;
}
`

const InputText = styled.div`
font-size: 13px;
`

const InputHolder = styled.div`
margin: 10px 0;
`

const Title = styled.div`
text-align: center;
font-weight: 700;
color: #220122; 
margin-bottom: 10px
`

const Card = styled.form`
width: 280px;
min-height: fit-content;
border: 1px solid silver;
border-radius: 5px;
padding: 20px 10px 
`

const Main = styled.div`
display:flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;

`

const Container = styled.div`
display:flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
color: #220122 
`