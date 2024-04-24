// adds blue class to current index divp


export function addblue(alldivsparameter, currentIndexparameter) {
    console.log("currentIndex in addblue function is", currentIndexparameter)
    for (let i = 0; i < currentIndexparameter.length; i++) {
        alldivsparameter[currentIndexparameter[i]].classList.add("blue")
    }
}

//removes blue class from every div
export function removeblue(alldivsparameter) {

    for (let i = 0; i < alldivsparameter.length; i++) {
        alldivsparameter[i].classList.remove("blue")
    }
}

// next position is going out of frame or block will be placed upon another block
export function checkLowerFrame(alldivsparameter, currentIndexparameter) {
    for (let i = 0; i < currentIndexparameter.length; i++) {
        if (alldivsparameter[currentIndexparameter[i] + 16] === undefined || alldivsparameter[currentIndexparameter[i] + 16].classList.contains("placed")) {
            return true;
        }
    }
    return false;
}

export function checkLeftFrame(alldivsparameter, currentIndexparameter) {
    for (let i = 0; i < currentIndexparameter.length; i++) {
        if (currentIndexparameter[i] % 16 == 0 || alldivsparameter[currentIndexparameter[i] - 1].classList.contains("placed")) {
            return true;
        }
    }
    return false;
}

export function checkRightFrame(alldivsparameter, currentIndexparameter) {
    for (let i = 0; i < currentIndexparameter.length; i++) {
        if (currentIndexparameter[i] % 16 == 15 || alldivsparameter[currentIndexparameter[i] + 1].classList.contains("placed")) {
            return true;
        }
    }
    return false;
}




export function makeempty(param) {
    param = []
    return param
}