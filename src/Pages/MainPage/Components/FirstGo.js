import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";

const TitleDiv = styled.div`
    width: 100%;
    height: 15%;
    min-height: 32px;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-family: MontserratTitle;
    font-size: 32px;
`;

const ContentDiv = styled.div`
    width: 100%;
    height: 85%;

`;

const ContentBannerDiv = styled.div`
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
`;

const GoContent = styled.div`
    pointer: cursor;
    border: 1px solid black;
    height: 80%;
    width: 30%;
    margin: 0 2%;
    border-radius: 20%;
    
`;

function FirstGo() {

    return (
        <>
            <TitleDiv>
                <Title>WHERE TO GO?</Title>
            </TitleDiv>
            <ContentDiv>
                <ContentBannerDiv>
                    <GoContent></GoContent>
                    <GoContent></GoContent>
                    <GoContent></GoContent>
                </ContentBannerDiv>
            </ContentDiv>
        </>
    );
}

export default FirstGo;