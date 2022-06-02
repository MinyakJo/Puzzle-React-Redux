import React from "react"
import ImgComponent from "../common/ImgComponent"
import H1Component from "../common/H1Component"
import styled from "styled-components"

const LogoStyle = styled.div`
    display: flex;
    width: calc(100% - var(--logo-margin) - var(--foldButtonBox-width));
    height: 72px;
    margin-left: var(--logo-margin);
    margin-top: var(--logo-margin);
    align-items: center;

    & img{
        width: var(--leftLogo-width-height);
        height: 72px;
    }
`

const LogoComponent = () => {

    return (
        <LogoStyle>
            <ImgComponent src="./img/logo2.png"/>
            <H1Component id = "logoText" text="Puzzle"/>
        </LogoStyle>
    )
}

export default LogoComponent