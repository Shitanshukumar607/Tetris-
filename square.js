import { addblue, removeblue, checkLowerFrame, checkLeftFrame, checkRightFrame } from "./functions.js"




// this function makes the square partially appear 
export function SquareAppear(alldivspara, currentIndexpara) {
    alldivspara[7].classList.add("blue")
    alldivspara[8].classList.add("blue")
    currentIndexpara.push(7, 8)
    console.log("alldivspara is ", alldivspara)

    console.log(currentIndexpara)
    setTimeout(() =>
        SquareMove(alldivspara, currentIndexpara), 500)
}


// makes the square go down .
// here in this function we first remove all the blue class from its current position and give class blue to the next position 
function SquareMove(alldivspara, currentIndexpara) {

    console.log(alldivspara) //this is undefined which is defined in ur console 
    removeblue(alldivspara)

    for (let i = 0; i < currentIndexpara.length; i++) {
        currentIndexpara[i] += 16
    }

    addblue(alldivspara, currentIndexpara)

    console.log(currentIndexpara)


    if (currentIndexpara.length == 2) {
        alldivspara[7].classList.add("blue")
        alldivspara[8].classList.add("blue")
        currentIndexpara.push(7, 8)
    }

    // we check if the next position is going out of frame or not
    if (checkLowerFrame(alldivspara, currentIndexpara)) {

        for (let i = 0; i < currentIndexpara.length; i++) {
            alldivspara[currentIndexpara[i]].classList.add("placed")

        }
        
        setTimeout(() => {
            currentIndexpara = []
            SquareAppear(alldivspara, currentIndexpara)
        }, 300)

    } else {
        setTimeout(SquareMove(alldivspara, currentIndexpara), 300)
    }



}
