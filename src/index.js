import "./style.css"
import { displayPage } from "./home"
import { displayMenu } from "./menu"

displayPage()

const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const about = document.querySelector('#about')

home.addEventListener('click', displayPage)
menu.addEventListener('click', displayMenu)