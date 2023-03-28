const grid = document.querySelector('.grid')
const leftBar = document.querySelector('.leftbar')
const rightBar = document.querySelector('.rightbar')
const activeClass = document.querySelector('button.active')

const topScale = document.getElementById('topscale')
topScale.innerText = `${document.querySelector('#gridsizepicker').max}x${document.querySelector('#gridsizepicker').max}`
const bottomScale = document.getElementById('bottomscale')
bottomScale.innerText = `${document.querySelector('#gridsizepicker').min}x${document.querySelector('#gridsizepicker').min}`

const colorPicker = document.createElement("input")
colorPicker.id = "chosencolor"
colorPicker.type = "color"
colorPicker.value = "#333333" 


const rubberButton = document.createElement("button")
rubberButton.classList.add("rubber")
rubberButton.innerText = "RUBBER"

const clearButton = document.createElement('button')
clearButton.classList.add('clear')
clearButton.innerText = 'CLEAR'

const drawButton = document.createElement("button")
drawButton.classList.add("draw")
drawButton.innerText = "SINGLE"

const rainbowButton = document.createElement('button')
rainbowButton.innerText = "RAINBOW"

const shadesButton = document.createElement('button')
shadesButton.innerText = '50 SHADES'

const sizePicker = document.getElementById('gridsizepicker')

const gridSizeValue = document.getElementById('gridsizevalue')




leftBar.append(drawButton, rainbowButton, shadesButton, rubberButton, clearButton)
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
    activeButton(newMode);
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
sizePicker.onchange = (e) => changeGridSize(e.target.value)
sizePicker.onmousemove = () => updateGridValue()
clearButton.onclick = () => reloadGrid()




function updateGridValue () {
    gridSizeValue.innerText = `${sizePicker.value}     x     ${sizePicker.value}`
}

function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
}

function changeGridSize(value) {
    setCurrentSize(value)
    clearGrid()
    createGrid(value)
}

function clearGrid() {
    grid.innerHTML = ''
}

function createGrid (size) {
    setCurrentSize(size)


    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const singleGridElm = document.createElement("div")
        singleGridElm.classList.add('grid-elm')
        singleGridElm.addEventListener('mouseover', changeColor);
        singleGridElm.addEventListener('mousedown', changeColor)
        grid.appendChild(singleGridElm)
    
    }

}


function changeColor(e) {
    if (currentMode == 'color') {
        e.target.style.backgroundColor = currentColor;
        
        
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



function activeButton (newMode) {
    if (currentMode === 'color') {
        drawButton.classList.remove('active')
    }

        else if (currentMode === 'rainbow')  {
            rainbowButton.classList.remove('active')
        }
        
        else if (currentMode === 'shades')  {
            shadesButton.classList.remove('active')
        }

        else if (currentMode === 'rubber')  {
            rubberButton.classList.remove('active')
        }

    if (newMode === 'color') {
        drawButton.classList.add('active')
        // activeClass.style.backgroundColor = `${currentColor}`;
    }

        else if (newMode === 'rainbow')  {
            rainbowButton.classList.add('active')
        }
        
        else if (newMode === 'shades')  {
            shadesButton.classList.add('active')
        }

        else if (newMode === 'rubber')  {
            rubberButton.classList.add('active')
        }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE)
    updateGridValue()
} 