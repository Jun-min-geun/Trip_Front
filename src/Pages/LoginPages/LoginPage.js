import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Body from "../../Components/Common/Body";



const Loginpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const LoginpageContent = () => {
        return (
            <>

            </>
        )
    }


    return (
        <Body>
            <LoginpageContent />
        </Body>
    )
}
export default Loginpage;