import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    width: 100%;
    height: 4rem;
    background-color: white;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid black;
`;

const LogoDiv = styled.div`
    width: 20%;
    // border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MenuDiv = styled.div`
    width: 40%;
    margin-left: 35%;
    // border: 1px solid blue;
    height: 100%;
    display: flex;
    align-items: center;
`;
const Menu = styled.button`
    font-weight: 600;
    cursor: pointer;
    border: none;
    background-color: transparent ;
    width: 20%;
    height: 60%;
    margin: 2.5%;
    color: #18a0fb;
    font-family: MontserratSubTitle;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: #18a0fb;
    border-radius: 5px;
    width: 20%;
    height: 60%;
    margin: 2.5%;
    color: white;
    font-family: MontserratSubTitle;
`;

const Header = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate(`/Login`);
    };

    return (
        <Div>
            <LogoDiv>
                로고
            </LogoDiv>
            <MenuDiv>
                <Menu>Features</Menu>
                <Menu>Pricing</Menu>
                <Menu>Community</Menu>
                <Button onClick={goLogin}>Login</Button>
            </MenuDiv>
        </Div>
    );
};

export default Header;