import macraonImage from "./images/macaron.jpg"

function displayMenu(){
    const container = document.querySelector('#content')
    const macaron = document.createElement('img')
    macaron.src = macraonImage
    const macraonDescription = document.createElement('span')
    macraonDescription.textContent = "something something something"
    
    container.appendChild(macaron)
    container.appendChild(macraonDescription)
}

export {displayMenu}