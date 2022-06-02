import React from "react"
import ButtonComponent from "../common/ButtonComponent"
import styled from "styled-components"

const LeftButtonBoxStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: var(--leftButtonBox-radius);
    padding-bottom: var(--logo-margin);
    padding-top: var(--logo-margin);
`

const LeftButtonBoxComponent = () => {

    return (
        <LeftButtonBoxStyle>
            <ButtonComponent id = "3xButton" src ="./img/3x3.png"/>
            <ButtonComponent id = "4xButton" src ="./img/4x4.png"/>
            <ButtonComponent id = "5xButton" src ="./img/5x5.png"/>
            <ButtonComponent id ="startButton" src="./img/startButton.png"/>
        </LeftButtonBoxStyle>
    )
}

export default LeftButtonBoxComponent