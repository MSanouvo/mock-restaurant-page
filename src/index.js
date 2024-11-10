import "./style.css"
import { displayPage } from "./home"
import { displayMenu } from "./menu"
import { displayAbout } from "./about"

displayPage()

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.lastChild)
    }
}

const content = document.querySelector('#content')
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const about = document.querySelector('#about')

home.addEventListener('click', () =>{
    removeChildren(content)
    displayPage()
})
menu.addEventListener('click', ()=>{
    removeChildren(content)
    displayMenu()
})

about.addEventListener('click', ()=>{
    removeChildren(content)
    displayAbout()
})