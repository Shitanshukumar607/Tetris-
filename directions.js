import { addblue, removeblue, checkLowerFrame, checkLeftFrame, checkRightFrame } from "./functions.js" 

import { SquareMove } from "./square.js" 


export function Goleft(alldivspara, currentIndexpara) {
    
    console.log("this is inside the goleft function and currentindex is", currentIndexpara)

    

    if (currentIndexpara.length !== 2 && !checkLeftFrame(alldivspara, currentIndexpara)) {
        console.log("left")
        console.log("currentIndex is ", currentIndexpara)
        removeblue(alldivspara, currentIndexpara)
        for (let i = 0; i < currentIndexpara.length; i++) {
            currentIndexpara[i] -= 1
        }
        console.log("currentIndex is ", currentIndexpara)
        addblue(alldivspara, currentIndexpara)
    }
}

export function Goright(alldivspara, currentIndexpara) {
    console.log("this is inside the goright function")
    if (currentIndexpara.length !== 2 && !checkRightFrame(alldivspara, currentIndexpara)) {
        console.log("right")
        removeblue(alldivspara, currentIndexpara)
        for (let i = 0; i < currentIndexpara.length; i++) {
            currentIndexpara[i] += 1
        }
        addblue(alldivspara, currentIndexpara)
    }
}
