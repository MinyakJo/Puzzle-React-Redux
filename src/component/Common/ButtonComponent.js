import React from "react"
import variables from "../../Variables.module.scss"
import { useDispatch } from "react-redux"
import { setCol, reload } from "../../action/action"
import ImgComponent from "./ImgComponent"

const ButtonComponent = (props) => {

    const dispatch = useDispatch()

    const onClickEvent = (event) => {
        const target = event.currentTarget.id

        const leftBar = document.querySelector("#root nav")
        const x3Button = document.getElementById("3xButton")
        const x4Button = document.getElementById("4xButton")
        const x5Button = document.getElementById("5xButton")

        const foldButtonBox = document.querySelectorAll("#root div")[3]
        const foldButton = document.getElementById(`foldButton`)

        const main = document.querySelector("#root main")
        const question = document.querySelector(`main div`)
        const timer = document.getElementById("timer")
        
        switch(target){
            case "foldButton":
                if(leftBar.style.left == `-${variables.leftBarWidth}`){
                    leftBar.style.left = 0
                    foldButtonBox.style.marginLeft = variables.leftBarWidth
                    foldButton.firstChild.src = "./img/backLightBrown.png"
                    main.style.width = `calc(100% - ${variables.leftBarWidth})`
                }else{
                    leftBar.style.left = `-${variables.leftBarWidth}`
                    foldButtonBox.style.marginLeft = 0
                    foldButton.firstChild.src = "./img/forwardLightBrown.png"
                    main.style.width = `calc(100% - ${variables.foldButtonBoxWidth})`
                }
                break
            case "resetButton":
            case "startButton":
                question.style.display = "flex"
                timer.style.display = "flex"
                leftBar.style.left = `-${variables.leftBarWidth}`
                foldButtonBox.style.marginLeft = 0
                foldButton.firstChild.src = "./img/forwardLightBrown.png"
                main.style.width = `calc(100% - ${variables.foldButtonBoxWidth})`

                dispatch(reload())

                break
            
            case "3xButton":
                dispatch(setCol(3))
                question.style.display = "none"
                timer.style.display = "none"
                x3Button.style.border = `solid 1px ${variables.borderColor}`
                x4Button.style.border = "none"
                x5Button.style.border = "none"
                break

            case "4xButton":
                dispatch(setCol(4))
                question.style.display = "none"
                timer.style.display = "none"
                x4Button.style.border = `solid 1px ${variables.borderColor}`
                x3Button.style.border = "none"
                x5Button.style.border = "none"
                break

            case "5xButton":
                dispatch(setCol(5))
                question.style.display = "none"
                timer.style.display = "none"
                x5Button.style.border = `solid 1px ${variables.borderColor}`
                x4Button.style.border = "none"
                x3Button.style.border = "none"
                break
            default:
                console.log("error")
        }
    }

    return (
        <button id = {props.id} onClick = {onClickEvent}>
            <ImgComponent src = {props.src}/>
        </button>
    )
}

export default ButtonComponent