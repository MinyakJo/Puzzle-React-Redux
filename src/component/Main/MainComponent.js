import React from "react"

import PuzzleBoxAnswerComponent from "./PuzzleBoxAnswerComponent"
import PuzzleBoxQuestionComponent from "./PuzzleBoxQuestionComponent"
import ButtonComponent from "../common/ButtonComponent"
import TimerComponent from "./TimerComponent"
import styeld from "styled-components"

const MainStyle = styeld.main`
    display: flex;
    width: calc(100% - var(--leftBar-width));
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    transition: all 1.5s;
    overflow-y: scroll;
`

const MainComponent = () => {

    return (
        <MainStyle id = "main">
            <PuzzleBoxQuestionComponent/>
            <TimerComponent/>
            <PuzzleBoxAnswerComponent/>
            <ButtonComponent id = "resetButton" src = "./img/reload.png"/>
        </MainStyle>
    )
}

export default MainComponent