const body = document.body
// const etchGridDiv = 
const containerDiv = document.querySelector('.container')

const rubberButton = document.createElement("button")
body.append(rubberButton)
rubberButton.classList.add("rubber")
rubberButton.innerText = "RUBBER"

for (let i = 1; i < 257; i++) {
    let thisContainerDiv = document.createElement("div")
    // thisContainerDiv.innerText = `${i}`
    // thisContainerDiv.innerText = `x`
    thisContainerDiv.setAttribute('class', `gridItem${i}`)
    containerDiv.append(thisContainerDiv)
    // console.log(thisContainerDiv.getAttribute('class'))
}

containerDiv.addEventListener("mouseover", eventListenerAddRed)
document.addEventListener("onclick", removeRedEvent)

function eventListenerAddRed(e) {
    if (e.target.matches("div.container > *")) {
        e.target.classList.add("hoverred")
        console.log(e.target.classList)
    }
}



function removeRedEvent(e) {
    if (e.target.matches("button.rubber")) {
        containerDiv.removeEventListener("mouseover", eventListenerAddRed)
    }
}

// var function  

// etchGridDiv.setAttribute('class', 'gridbox')
// etchGridDiv.innerText = "testing2"

// body.append(etchGridDiv)