import React from "react"

import PuzzleBoxAnswerComponent from "./PuzzleBoxAnswerComponent"
import PuzzleBoxQuestionComponent from "./PuzzleBoxQuestionComponent"
import ButtonComponent from "../common/ButtonComponent"
import TimerComponent from "./TimerComponent"


const MainComponent = () => {

    return (
        <main id = "main">
            <PuzzleBoxQuestionComponent/>
            <TimerComponent/>
            <PuzzleBoxAnswerComponent/>
            <ButtonComponent id = "resetButton" src = "./img/reload.png"/>
        </main>
    )
}

export default MainComponent