// console.dir(item1);

'use strict'

let item1 = [...document.querySelectorAll(".item1")]
let item2 = [...document.querySelectorAll(".item2")]

// top Random Colors start

let randomNum1 = function () {
    return Math.floor(Math.random() * 255 + 1) + 0
}

let randomNum2 = function () {
    return Math.floor(Math.random() * 999) + 1
}

for (let i = 0; i < item1.length; i++) {
    item1[i].addEventListener("click", () => {
        item1[i].style.background = `rgba(${randomNum1()}, ${randomNum1()}, ${randomNum1()}, 0.${randomNum2()})`
    })    
}

// top Random Colors end



// bottom Random Colors start

let randomNum3 = function () {
    return Math.floor(Math.random() * 360) + 1
}

for (let k = 0; k < item2.length; k++) {
    item2[k].addEventListener("click", () => {
        item2[k].style.background = `linear-gradient(${randomNum3()}deg, rgba(${randomNum1()}, ${randomNum1()}, ${randomNum1()}, .${randomNum2()}), rgba(${randomNum1()}, ${randomNum1()}, ${randomNum1()}, .${randomNum2()}))`
    })
}
