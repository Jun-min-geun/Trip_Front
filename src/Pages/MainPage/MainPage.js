import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Body from "../../Components/Common/Body";
import FirstGo from "./Components/FirstGo"

const BannerDiv = styled.div`
    height: 14rem;
    border: 1px solid pink;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
`;

const BasicGoDiv = styled.div`
    height: 20rem;
    border: 1px solid pink;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
`;

const Mainpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const MainpageContent = () => {
        return (
            <>
                <BannerDiv>

                </BannerDiv>
                <BasicGoDiv>
                    <FirstGo/>
                </BasicGoDiv>
            </>
        )
    }


    return (
        <Body>
            <MainpageContent />
        </Body>
    )
}
export default Mainpage;