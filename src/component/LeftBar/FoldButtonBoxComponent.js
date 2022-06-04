import React from "react"
import style from "./LeftBarCSS/FoldButtonBoxStyle.module.scss"
import ButtonComponent from "../Common/ButtonComponent"


const FoldButtonBoxComponent = () => {
     
    return (
        <div id = {style.foldButtonBox}>
            <ButtonComponent id = "foldButton" src = "./img/backLightBrown.png"/>
        </div>
    )
}

export default FoldButtonBoxComponent