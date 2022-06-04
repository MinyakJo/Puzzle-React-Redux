

const changeWidth = (col) => {
    const puzzle = document.getElementsByName("puzzle")

    switch(col){
        case 3:
            Array.from(puzzle).forEach(element => {
                element.style.width = "32%"
                element.style.height = "32%"
            })
            break
        case 4:
            Array.from(puzzle).forEach(element => {
                element.style.width = "24%"
                element.style.height = "24%"
            })
            break
        case 5:
            Array.from(puzzle).forEach(element => {
                element.style.width = "19%"
                element.style.height = "19%"
            })
            break
        default:
            console.log("Error")
    }
}

export default changeWidth