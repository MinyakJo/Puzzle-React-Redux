import React from "react"
import H2Component from "../common/H2Component"
import PuzzleComponent from "./PuzzleComponent"
import { useSelector } from "react-redux"

const PuzzleBoxQuestionComponent = () => {

    const col = useSelector(state => state.col)
    const newList = []

    for(let i = 0; i < col*col; i++){
        newList.push(i)
    }

    return (
        <div id ="puzzleBoxQuestion" className="puzzleBox">
            <H2Component id="question" text="Question"/>
            {
                newList.map(element => <PuzzleComponent id = {element}/>)
            }
        </div>
    )
}

export default PuzzleBoxQuestionComponent