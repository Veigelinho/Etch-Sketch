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
drawButton.innerText = "SINGLE"

const rainbowButton = document.createElement('button')
rainbowButton.innerText = "RAINBOW"

const shadesButton = document.createElement('button')
shadesButton.innerText = '50 SHADES'

const sizePicker = document.getElementById('gridsizepicker')



for (let i = 1; i < 257; i++) {
    const singleGridElm = document.createElement("div")
    singleGridElm.classList.add('grid-elm')
    singleGridElm.addEventListener('mouseover', changeColor);
    singleGridElm.addEventListener('mousedown', changeColor)
    grid.appendChild(singleGridElm)

}

leftBar.append(drawButton, rainbowButton, shadesButton, rubberButton)
rightBar.append(colorPicker)


const DEFAULT_COLOR = '#333333'; 
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

var currentColor = DEFAULT_COLOR;
var currentMode = DEFAULT_MODE;
var currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

const body = document.body





colorPicker.oninput = (e) => setCurrentColor(e.target.value), setCurrentMode('color')
drawButton.onclick = () => setCurrentMode('color')
rubberButton.onclick = () => setCurrentMode('rubber')
rainbowButton.onclick = () => setCurrentMode('rainbow')
shadesButton.onclick = () => setCurrentMode('shades')
sizePicker.oninput = (e) => createGrid(e)



function createGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}


function changeColor(e) {
    if (currentMode == 'color') {
        e.target.style.backgroundColor = currentColor;
        console.log(e.target.style.backroundColor)
        }

    else if (currentMode == 'rubber') {
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
        e.target.style.backgroundColor = `${currentColor}${opacity}`

    }
}



