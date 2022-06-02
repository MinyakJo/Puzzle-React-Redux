import React from "react"

import LogoComponent from "./LogoComponent"
import LeftBarBoxComponent from "./LeftBarBoxComponent"
import styled from "styled-components"

const LeftBarStyle = styled.nav`
    position: fixed;
    width: var(--leftBar-width);
    height: 100%;
    border-right: 1px solid var(--border-color);
    left: 0;

    transition: left 1.5s;
`

const LeftBarComponent = () => {

    return (
        <LeftBarStyle id = "leftBar">
            <LogoComponent/>
            <LeftBarBoxComponent/>
        </LeftBarStyle>
    )
}

export default LeftBarComponent