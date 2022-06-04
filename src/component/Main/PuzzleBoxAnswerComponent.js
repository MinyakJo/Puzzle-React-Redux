import React from "react"
import style from "./MainCSS/PuzzleBoxAnswerStyle.module.scss"
import ImgComponent from "../Common/ImgComponent"
import H2Component from "../Common/H2Component"

const PuzzleBoxAnswerComponent = () => {

    return (
        <div id = {style.puzzleBoxAnswer} className="puzzleBox">
            <H2Component id="answer" text="Answer"/>
            <ImgComponent src = "./img/board.jpg"/>
        </div>
    )
}

export default PuzzleBoxAnswerComponent