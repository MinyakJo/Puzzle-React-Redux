import React from "react"
import "./css/App.css"
import "./css/Public.css"
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