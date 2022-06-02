import React from "react"
import { useDispatch } from "react-redux"
import { setCol, reload } from "../../action/action"
import ImgComponent from "./ImgComponent"

const ButtonComponent = (props) => {

    const dispatch = useDispatch()

    const onClickEvent = (event) => {
        const target = event.currentTarget.id

        const leftBar = document.getElementById("leftBar")
        const foldButtonBox = document.getElementById("foldButtonBox")
        const foldButton = document.getElementById("foldButton")
        const main = document.getElementById("main")
        const question = document.getElementById("puzzleBoxQuestion")
        const x3Button = document.getElementById("3xButton")
        const x4Button = document.getElementById("4xButton")
        const x5Button = document.getElementById("5xButton")
        const timer = document.getElementById("timer")

        switch(target){
            case "foldButton":
                if(leftBar.style.left == "-241px"){
                    leftBar.style.left = "0px"
                    foldButtonBox.style.marginLeft = "var(--leftBar-width)"
                    foldButton.firstChild.src = "./img/backLightBrown.png"
                    main.style.width = "calc(100% - var(--leftBar-width))"
                }else{
                    leftBar.style.left = "-241px"
                    foldButtonBox.style.marginLeft = "0"
                    foldButton.firstChild.src = "./img/forwardLightBrown.png"
                    main.style.width = "calc(100% - var(--foldButtonBox-width))"
                }
                break
            case "resetButton":
            case "startButton":
                question.style.display = "flex"
                timer.style.display = "flex"
                leftBar.style.left = "-241px"
                foldButtonBox.style.marginLeft = "0"
                foldButton.firstChild.src = "./img/forwardLightBrown.png"
                main.style.width = "calc(100% - var(--foldButtonBox-width))"

                dispatch(reload())

                break
            
            case "3xButton":
                dispatch(setCol(3))
                question.style.display = "none"
                timer.style.display = "none"
                x3Button.style.border = "solid 1px var(--border-color)"
                x4Button.style.border = "none"
                x5Button.style.border = "none"
                break

            case "4xButton":
                dispatch(setCol(4))
                question.style.display = "none"
                timer.style.display = "none"
                x4Button.style.border = "solid 1px var(--border-color)"
                x3Button.style.border = "none"
                x5Button.style.border = "none"
                break

            case "5xButton":
                dispatch(setCol(5))
                question.style.display = "none"
                timer.style.display = "none"
                x5Button.style.border = "solid 1px var(--border-color)"
                x4Button.style.border = "none"
                x3Button.style.border = "none"
                break
        }
    }

    return (
        <button id = {props.id} onClick = {onClickEvent}>
            <ImgComponent src = {props.src}/>
        </button>
    )
}

export default ButtonComponent