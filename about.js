const aboutTag = document.querySelector('.nav-links .about-me')
const aboutSection = document.querySelector('section .about')

const workTag = document.querySelector('.nav-links .work')
const workSection = document.querySelector('.photos')

const navTag = document.querySelector('nav')

aboutTag.addEventListener('click', function(){
    aboutSection.classList.add('open-about')
    workSection.classList.add('close-work')
    navTag.classList.remove('open')

})

workTag.addEventListener('click', function(){
    aboutSection.classList.remove('open-about')
    workSection.classList.remove('close-work')
    navTag.classList.remove('open')

})