import React from "react"

import styled from "styled-components"
import LeftBarButtonBoxComponent from "../LeftBar/LeftBarButtonBoxComponent"

const LeftBarBoxStyle = styled.div`
    height: calc(100% - 72px + var(--logo-margin));
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: var(--border-radius);
        background-color: #e2e2e2;
    }
`

const LeftBarBoxComponent = () => {

    return (
        <LeftBarBoxStyle>
            <LeftBarButtonBoxComponent/>
        </LeftBarBoxStyle>
    )
}

export default LeftBarBoxComponent