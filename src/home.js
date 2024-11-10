import homeImage from "./images/sweet-treat.png"
function displayPage(){
    const container = document.querySelector('#content')
    const header = document.createElement('img')
    header.classList.add('home-img')
    header.src = homeImage

    const hoursBox = document.createElement('div')
    hoursBox.classList.add('hours-container')
    const hours = document.createElement('span')
    hours.classList.add('hour-head')
    hours.textContent = 'Hours'
    const daysGrid = document.createElement('div')
    daysGrid.classList.add('days-grid')
    const hoursGrid = document.createElement('div')
    hoursGrid.classList.add('hours-grid')

    container.appendChild(header)
    container.appendChild(hoursBox)
    hoursBox.appendChild(hours)
    hoursBox.appendChild(daysGrid)
    hoursBox.appendChild(hoursGrid)
    createDays('Monday')
    createDays('Tuesday')
    createDays('Wednesday')
    createDays('Thursday')
    createDays('Friday')
    createDays('Saturday')
    createDays('Sunday')
    createHours()

    function createDays(day){
        const days = document.createElement('span')
        days.textContent = day
        days.classList.add('days')
        daysGrid.appendChild(days)
    }
    
    function createHours(){
        for(let i=0; i<6; i++){
            const hours = document.createElement('span')
            hours.textContent = '10:00am - 8:00pm'
            hours.classList.add('hours')
            hoursGrid.appendChild(hours)
        }
        
    }
}

export {displayPage}