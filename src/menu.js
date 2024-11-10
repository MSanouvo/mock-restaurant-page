import macraonImage from "./images/macaron.jpg"

function displayMenu(){
    //header and main box
    const container = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.classList.add('menu')
    //sub box with all the menu items (pic and text)
    const menuBox = document.createElement('div')
    menuBox.classList.add('menu-box')

    const header = document.createElement('h1')
    header.textContent = 'Menu'

    const macaron = document.createElement('img')
    macaron.classList.add('menu-img')
    macaron.src = macraonImage

    const macraonDescription = document.createElement('span')
    macraonDescription.classList.add('menu-text')
    macraonDescription.textContent = "Macrarons (3 count) ...... $12.99"
    
    menu.appendChild(header)
    menuBox.appendChild(macaron)
    menuBox.appendChild(macraonDescription)
    container.appendChild(menu)
    menu.appendChild(menuBox)
}

export {displayMenu}