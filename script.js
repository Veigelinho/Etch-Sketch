const grid = document.querySelector('.grid')
const leftBar = document.querySelector('.leftbar')
const rightBar = document.querySelector('.rightbar')

const colorPicker = document.createElement("input")
colorPicker.id = "chosencolor"
colorPicker.type = "color"
colorPicker.value = "#333333" 
console.log(colorPicker.type)

const rubberButton = document.createElement("button")
rubberButton.classList.add("rubber")
rubberButton.innerText = "RUBBER"


const drawButton = document.createElement("button")
drawButton.classList.add("draw")
drawButton.innerText = "DRAW"

const rainbowButton = document.createElement('button')
rainbowButton.innerText = "RAINBOW"

const shadesButton = document.createElement('button')
shadesButton.innerText = '50 SHADES'


for (let i = 1; i < 257; i++) {
    const singleGridElm = document.createElement("div")
    singleGridElm.classList.add('grid-elm')
    singleGridElm.addEventListener('mouseover', changeColor);
    singleGridElm.addEventListener('mousedown', changeColor)
    grid.appendChild(singleGridElm)

}

leftBar.append(colorPicker, drawButton, rainbowButton)
rightBar.append(rubberButton, shadesButton)


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
drawButton.onclick = () => setCurrentMode('color')
rubberButton.onclick = () => setCurrentMode('eraser')
rainbowButton.onclick = () => setCurrentMode('rainbow')
shadesButton.onclick = () => setCurrentMode('shades')





function changeColor(e) {
    if (currentMode == 'color') {
        e.target.style.backgroundColor = currentColor;
        console.log(e.target.style.backroundColor)
        }

    else if (currentMode == 'eraser') {
        e.target.style.backgroundColor = 'white'
    }

    else if (currentMode == 'rainbow') {
        const randomRed = Math.floor(Math.random() *256);
        const randomGreen = Math.floor(Math.random() *256);
        const randomBlue = Math.floor(Math.random() *256);

        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    }

    else if (currentMode == 'shades') {
        const opacity = Math.floor(Math.random() * 256).toString(16);
        const currentColorString = currentColor.slice(1)
        console.log(currentColorString)
       e.target.style.backgroundColor = `${currentColor}${opacity}`

    }
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

