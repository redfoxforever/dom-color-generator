// console.dir(item1);

'use strict'

let item1 = document.querySelectorAll(".item1")
let item2 = document.querySelectorAll(".item2")


// top Random Colors start

let randomNum1 = function () {
    return Math.floor(Math.random() * 255 + 1) + 0
}

let randomNum2 = function () {
    return Math.floor(Math.random() * 9) + 1
}

for (let i = 0; i < item1.length; i++) {
    item1[i].addEventListener("click", () => {
        item1[i].style.background = `rgba(${randomNum1()}, ${randomNum1()}, ${randomNum1()}, .${randomNum2()})`
    })    
}

// top Random Colors end



// bottom Random Colors start

let randomNum3 = function () {
    return Math.floor(Math.random() * 360) + 1
}

let randomNum4 = function () {
    return Math.floor(Math.random() * 99) + 1
}

let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for (let y = 0; y < 6; y++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

for (let k = 0; k < item2.length; k++) {
    item2[k].addEventListener("click", () => {
        item2[k].style.background = `linear-gradient(${randomNum3()}deg, ${randomColor()}, ${randomColor()})`
    })
}
