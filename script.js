//import { frontLappear } from "./frontL.js"
import { addblue, removeblue, checkLowerFrame, checkLeftFrame, checkRightFrame } from "./functions.js"
import { SquareAppear } from "./square.js"
import { Goleft, Goright } from "./directions.js"

let mainEl = document.querySelector("main")
let rotatebtn = document.querySelector("#rotate")
let leftbtn = document.querySelector("#left")
let rightbtn = document.querySelector("#right")
let squarebtn = document.querySelector("#square")
let frontLbtn = document.querySelector("#frontL")
let currentIndex = []
//let placedblocks = []



// creating 400 divs inside the main
for (let i = 0; i < 400; i++) {
    let div = document.createElement("div")
    div.classList.add("block")
    mainEl.appendChild(div)
}

let alldivs = document.querySelectorAll("main div")
console.log(alldivs)



rotatebtn.addEventListener("click", rotate)

leftbtn.addEventListener("click", () => {
    Goleft(alldivs, currentIndex)
})

rightbtn.addEventListener("click", () => {
    Goright(alldivs, currentIndex)
})

squarebtn.addEventListener("click", () => SquareAppear(alldivs, currentIndex))

frontLbtn.addEventListener("click", () => {
    frontLappear()
})





function rotate() {
    console.log("rotated")
}