const grid = document.querySelector('.grid')
const main = document.querySelector('main')

for (let i = 1; i < 257; i++) {
    let singleGridElm = document.createElement("div")
    singleGridElm.id = `gridItem${i}`
    singleGridElm.addEventListener('mouseover', changeColor);
    singleGridElm.addEventListener("mousedown" , changeColor)
    grid.append(singleGridElm)

}

const colorPicker = document.createElement("input")
main.append(colorPicker)
colorPicker.id = "chosencolor"
colorPicker.type = "color"
colorPicker.value = "#333333" 
console.log(colorPicker.type)

const rubberButton = document.createElement("button")
main.append(rubberButton)
rubberButton.classList.add("rubber")
rubberButton.innerText = "RUBBER"


const drawButton = document.createElement("button")
main.append(drawButton)
drawButton.classList.add("draw")
drawButton.innerText = "DRAW"

main.append(colorPicker, drawButton, rubberButton)

const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';

var currentColor = DEFAULT_COLOR;
var currentMode = DEFAULT_MODE;

function setCurrentColor(newColor) {
    currentColor = newColor;

}

function setCurrentMode(newMode) {
    currentMode = newMode;

}

const body = document.body





colorPicker.oninput = (e) => setCurrentColor(e.target.value)







function changeColor(e) {
    console.log(e.target.style)
    e.target.style.backGroundColor = currentColor;
    console.log(e.target.style.backGroundColor)
}

// containerDiv.onmouseover = (e) => classAddRed(e)

// function rubber (e) {
//     if (e.target.matches("div.container > *")) {
//         e.target.removeEventListener('onmouseover', classAddRed)
//         e.target.classList.remove("hoverred")
//         e.target.classList.add("hoverwhite")
        
//     }
// }

// function classAddRed(e) {
//     if (e.target.matches("div.container > *")) {
//         e.target.classList.add("hoverred")
//         if (e.target.classList.contains("hoverwhite")) {
//             e.target.classList.remove("hoverwhite")
//         }
        
        
//     }
// }

// rubberButton.onclick = () => {
//     grid.removeEventListener('mouseover', classAddRed)
//     grid.addEventListener('mouseover', rubber)
// }

// drawButton.onclick = () => {
//     grid.classList.remove('hoverwhite')
//     grid.removeEventListener('mouseover', rubber)
//     grid.addEventListener('mouseover', classAddRed)
    
// }

// function removeRedEvent(e) {
//     if (e.target.matches("button")) {
//         console.log(e)
        // let gridelms = document.querySelectorAll("div.container > *")
        // for (elements of gridelms) {
        //     gridelms.classList.remove("hoverred")
        // }
        // containerDiv.removeEventListener("mouseover", eventListenerAddRed)
//     }
// }

