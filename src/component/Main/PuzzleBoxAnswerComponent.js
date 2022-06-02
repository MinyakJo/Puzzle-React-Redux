import React from "react"

import ImgComponent from "../common/ImgComponent"
import H2Component from "../common/H2Component"
import PuzzleBoxStyle from "./PuzzleBoxStyle"

const PuzzleBoxAnswerComponent = () => {

    return (
        <PuzzleBoxStyle answer>
            <H2Component id="answer" text="Answer"/>
            <ImgComponent src = "./img/board.jpg"/>
        </PuzzleBoxStyle>
    )
}

export default PuzzleBoxAnswerComponent