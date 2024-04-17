import { addblue, removeblue, checkLowerFrame, checkLeftFrame, checkRightFrame } from "./functions.js"
let alldivs = document.querySelectorAll("main div")
console.log(alldivs)
let currentIndex = []

export function frontLappear() {
    alldivs[7].classList.add("blue")
    alldivs[8].classList.add("blue")
    alldivs[9].classList.add("blue")
    currentIndex.push(7, 8, 9)
    console.log(currentIndex)
    setTimeout(() => {
        frontLMove(currentIndex)
    }, 400)
}

function frontLMove() {

    removeblue(alldivs, currentIndex)

    for (let i = 0; i < currentIndex.length; i++) {
        currentIndex[i] += 16
    }

    addblue(alldivs, currentIndex)


    console.log(currentIndex)
}