
const changePuzzle = (randomList, col, clickId) => {
    
    let top = clickId - col
    let bottom = clickId + col
    let right = clickId + 1
    let left = clickId - 1

    let temp = null

    if((randomList[top] == col * (col - 1)) && (top >= 0)){
        temp = randomList[top]
        randomList[top] = randomList[clickId]
        randomList[clickId] = temp
    }else if((randomList[bottom] == col * (col - 1)) && (bottom < col * col)){
        temp = randomList[bottom]
        randomList[bottom] = randomList[clickId]
        randomList[clickId] = temp
    }else if((randomList[right] == col * (col - 1)) && (right % col != 0) && (right < col * col)){
        temp = randomList[right]
        randomList[right] = randomList[clickId]
        randomList[clickId] = temp
    }else if((randomList[left] == col * (col - 1)) && (left % col != col - 1) && (left >= 0)){
        temp = randomList[left]
        randomList[left] = randomList[clickId]
        randomList[clickId] = temp
    }
}

export default changePuzzle