import React from "react"
import style from "./MainCSS/MainStyle.module.scss"
import PuzzleBoxAnswerComponent from "./PuzzleBoxAnswerComponent"
import PuzzleBoxQuestionComponent from "./PuzzleBoxQuestionComponent"
import ButtonComponent from "../Common/ButtonComponent"
import TimerComponent from "./TimerComponent"


const MainComponent = () => {

    return (
        <main id = {style.main}>
            <PuzzleBoxQuestionComponent/>
            <TimerComponent/>
            <PuzzleBoxAnswerComponent/>
            <ButtonComponent id = "resetButton" src = "./img/reload.png"/>
        </main>
    )
}

export default MainComponent