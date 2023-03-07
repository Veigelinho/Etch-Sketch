const body = document.body
// const etchGridDiv = 
var containerDiv = document.querySelector('.container')

for (let i = 1; i < 257; i++) {
    let thisContainerDiv = document.createElement("div")
    // thisContainerDiv.innerText = `${i}`
    // thisContainerDiv.innerText = `x`
    thisContainerDiv.setAttribute('class', `gridItem${i}`)
    containerDiv.append(thisContainerDiv)
    console.log(thisContainerDiv.getAttribute('class'))
}




// etchGridDiv.setAttribute('class', 'gridbox')
// etchGridDiv.innerText = "testing2"

// body.append(etchGridDiv)