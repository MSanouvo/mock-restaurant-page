

function displayPage(){
    const container = document.querySelector('#content')
    const header = document.createElement('h1')
    header.textContent = 'Restaurant'

    container.appendChild(header)
}

export {displayPage}