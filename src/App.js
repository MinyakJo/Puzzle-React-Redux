import React from "react"
import style from "./PublicStyle.module.scss"
import LeftBarComponent from "./component/LeftBar/LeftBarComponent"
import MainComponent from "./component/Main/MainComponent"
import FoldButtonBoxComponent from "./component/LeftBar/FoldButtonBoxComponent"

const App = () => {

    return (
            <React.Fragment>
                <LeftBarComponent/>
                <FoldButtonBoxComponent/>
                <MainComponent/>
            </React.Fragment>
        )
}

export default App