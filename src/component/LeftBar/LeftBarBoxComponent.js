import React from "react"
import style from "./LeftBarCSS/LeftBarBoxStyle.module.scss"
import LeftBarButtonBoxComponent from "./LeftBarButtonBoxComponent"

const LeftBarBoxComponent = () => {

    return (
        <div className = {style.leftBarBox}>
            <LeftBarButtonBoxComponent/>
        </div>
    )
}

export default LeftBarBoxComponent