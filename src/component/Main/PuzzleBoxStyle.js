import styled, { css } from "styled-components"

const PuzzleBoxStyle = styled.div`
    width: 35%;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${props => {
        if(props.answer){
            return css`
                display: flex;
            `
        }
        if(props.question){
            return css`
                display: none;
            `
        }
    }}
`

export default PuzzleBoxStyle