const body = document.body
// const etchGridDiv = 
const containerDiv = document.querySelector('.container')

const rubberButton = document.createElement("button")
body.append(rubberButton)
rubberButton.classList.add("rubber")
rubberButton.innerText = "RUBBER"

const drawButton = document.createElement("button")
body.append(drawButton)
drawButton.classList.add("draw")
drawButton.innerText = "DRAW"

for (let i = 1; i < 257; i++) {
    let thisContainerDiv = document.createElement("div")
    // thisContainerDiv.innerText = `${i}`
    // thisContainerDiv.innerText = `x`
    thisContainerDiv.setAttribute('class', `gridItem${i}`)
    containerDiv.append(thisContainerDiv)
    // console.log(thisContainerDiv.getAttribute('class'))
}

containerDiv.onmouseover = (e) => classAddRed(e)

function rubber (e) {
    if (e.target.matches("div.container > *")) {
        e.target.removeEventListener('onmouseover', classAddRed)
        e.target.classList.remove("hoverred")
        e.target.classList.add("hoverwhite")
        
    }
}

function classAddRed(e) {
    if (e.target.matches("div.container > *")) {
        e.target.classList.add("hoverred")
        if (e.target.classList.contains("hoverwhite")) {
            e.target.classList.remove("hoverwhite")
        }
        
        
    }
}

rubberButton.onclick = () => {
    containerDiv.removeEventListener('mouseover', classAddRed)
    containerDiv.addEventListener('mouseover', rubber)
}

drawButton.onclick = () => {
    containerDiv.classList.remove('hoverwhite')
    containerDiv.removeEventListener('mouseover', rubber)
    containerDiv.addEventListener('mouseover', classAddRed)
    
}

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

