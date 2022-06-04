import React from "react"
import style from "./LeftBarCSS/LogoStyle.module.scss"
import ImgComponent from "../Common/ImgComponent"
import H1Component from "../Common/H1Component"

const LogoComponent = () => {

    return (
        <div id={style.logo}>
            <ImgComponent src="./img/logo2.png"/>
            <H1Component id = "logoText" text="Puzzle"/>
        </div>
    )
}

export default LogoComponent