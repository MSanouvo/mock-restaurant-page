function displayAbout(){
    const content = document.querySelector('#content')
    const header = document.createElement('h1')
    header.textContent = 'About Us'
    const about = document.createElement('div')
    const aboutText = document.createElement('span')
    aboutText.textContent = 'Treating the community since XXXX. Contact us for catering or custom orders. Treating the community since XXXX. Contact us for catering or custom orders.'
    const contact = document.createElement('div')
    const contactNumber = document.createElement('span')
    const contactEmail = document.createElement('a')
    contactEmail.setAttribute('href', '')
    const contactHeader = document.createElement('h2')
    contactHeader.textContent = "Contact Us"
    contactNumber.textContent = "(123) 456-7890"
    contactEmail.textContent = "whoisthis@email.com"

    about.classList.add('about')
    contact.classList.add('contact')
    content.classList.add('about-us')

    about.appendChild(header)
    about.appendChild(aboutText)
    contact.appendChild(contactHeader)
    contact.appendChild(contactNumber)
    contact.appendChild(contactEmail)

    content.appendChild(about)
    content.appendChild(contact)

}

export {displayAbout}