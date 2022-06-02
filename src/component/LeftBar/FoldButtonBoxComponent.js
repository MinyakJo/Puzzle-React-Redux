import React from "react"

import styled from "styled-components"
import ButtonComponent from "../common/ButtonComponent"

const FoldButtonBoxStyle = styled.div`
    display: flex;
    position: relative;
    width: var(--foldButtonBox-width);
    flex-direction: column;
    margin-top: var(--foldButton-margin);
    margin-left: var(--leftBar-width);

    transition: all 1.5s;
`

const FoldButtonBoxComponent = () => {
     
    return (
        <FoldButtonBoxStyle id = "foldButtonBox">
                <ButtonComponent id = "foldButton" src = "./img/backLightBrown.png"/>
        </FoldButtonBoxStyle>
    )
}

export default FoldButtonBoxComponent