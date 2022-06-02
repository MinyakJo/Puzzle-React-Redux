import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setTime } from "../../action/action"
import H2Component from "../common/H2Component"

const Timer = () => {

    const start = useSelector(state => state.start)
    const end = useSelector(state => state.end)
    const time = useSelector(state => state.time)
    const dispatch = useDispatch()
  
    useEffect(() => {
        if(start){
            const countup = setInterval(() => {
                dispatch(setTime())
            }, 1000);
            if(end){
                console.log("end")
                clearInterval(countup)
            }
            return () => clearInterval(countup)
        }
    })
    
    return (
        <div id = "timer">
            <H2Component id = "timerText" text = "경과 시간"/>
            <p>{time}초</p>
        </div>
    )
}

export default Timer