import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { puzzleClick } from "../../action/action"
import ImgComponent from "../common/ImgComponent"
import styled from "styled-components"

const PuzzleStyle = styled.div`
    display: table;
    width: 24%;
    aspect-ratio: 1/1;
    border: 1px solid var(--border-color);

    & img{
        display: table-row;
        width: 100%;
    }
`

const PuzzleComponent = (props) => {

    const random = useSelector(state => state.randomList[props.id])
    const src = useSelector(state => state.imgList[random])
    const dispatch = useDispatch()

    const puzzleClickEvent = (event) => {
        const target = event.target.parentNode.id
        dispatch(puzzleClick(parseInt(target)))
    }

    return (
        <PuzzleStyle id = {props.id} className = "puzzle" onClick = {puzzleClickEvent}>
            <ImgComponent src = {src}/>
        </PuzzleStyle>
    )
}

export default PuzzleComponent