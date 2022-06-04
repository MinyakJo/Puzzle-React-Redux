import React from "react"
import style from "./LeftBarCSS/LeftBarStyle.module.scss"
import LogoComponent from "./LogoComponent"
import LeftBarBoxComponent from "./LeftBarBoxComponent"

const LeftBarComponent = () => {

    return (
        <nav id = {style.leftBar}>
            <LogoComponent/>
            <LeftBarBoxComponent/>
        </nav>
    )
}

export default LeftBarComponent