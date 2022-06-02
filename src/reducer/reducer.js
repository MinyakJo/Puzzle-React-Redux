import { COL, PUZZLE_CLICK, RELOAD, TIME } from "../action/action"
import changePuzzle from "../module/changePuzzle"
import changeWidth from "../module/changeWidth"
import randomList from "../module/randomList"
import sliceImg from "../module/sliceImg"

const initState = {
    randomList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    imgList: sliceImg(4),
    col: 4,
    src: "./img/board.jpg",
    time: 0,
    count: 0,
    start: false,
    end: false
}

const reducer = (state = initState, action) => {

    switch(action.type){
        case RELOAD:
            changeWidth(state.col)
            return{
                ...state,
                randomList: randomList(state.col * state.col, state.col * (state.col - 1)),
                imgList: sliceImg(state.col, state.src),
                start: true
            }
        case PUZZLE_CLICK:
            state.count = 0
            changePuzzle(state.randomList, state.col, action.id)

            //정답인지 아닌지 확인
            state.randomList.forEach((element, index, arr) => { 
                if(element === index){ state.count += 1 }
            })
            
            if(state.count === state.col * state.col){
                state.end = true
                console.log("clear")
            }
            
            return{
                ...state
            }
        case COL:
            return{
                ...state,
                col: action.col
            }
        case TIME:
            return{
                ...state,
                time: state.time + 1
            }
        default:
            return state
    }
}

export default reducer