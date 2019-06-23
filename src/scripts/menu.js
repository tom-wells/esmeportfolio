const menuButton = document.querySelector('.toggle-button')

const menuTag = document.querySelector('nav')
const closeTag = document.querySelector('.nav-close')
const containerSection = document.querySelector('.container')

menuButton.addEventListener('click', function() {
    menuButton.classList.add('open')
    menuTag.classList.add('open')
    containerSection.classList.add('open')
    closeTag.class.remove('open')
})

closeTag.addEventListener('click', function() {
    closeTag.classList.add('open')
    menuButton.classList.remove('open')
    menuTag.classList.remove('open')
    containerSection.classList.remove('open')

})
