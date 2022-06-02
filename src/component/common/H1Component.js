import React from "react"
import styled, { css } from "styled-components"

const H1Style = styled.h1`
    ${props => {
        const id = props.id

        switch(id){
            case "logoText":
                return css`
                    display: inline-block;
                    margin-left: var(--logo-margin);
                    color: var(--main-color);                `
        }
    }}
`

const H1Component = (props) => {

    return (
        <H1Style id = {props.id}>{props.text}</H1Style>
    )
}

export default H1Component