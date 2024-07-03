import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const Div = styled.div`
    width: 100%;
    height: 10rem;
    background-color: skyblue;;
    display: flex;
    align-items: center;
`;

const LogoDiv = styled.div`
    width: 20%;
    border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FootMenuDiv = styled.div`
    margin-left: 40%;
    width: 40%;
    border: 1px solid red;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {

    return (
        <Div>
            <LogoDiv>
                로고
            </LogoDiv>
            <FootMenuDiv>

            </FootMenuDiv>
        </Div>
    );
};

export default Footer;