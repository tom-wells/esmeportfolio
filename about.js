const aboutTag = document.querySelector('.nav-links .about-me')
const aboutSection = document.querySelector('section .about')

const workTag = document.querySelector('.nav-links .work')
const workSection = document.querySelector('.photos')

const resumeTag = document.querySelector('.nav-links .my-resume')
const resumeSection = document.querySelector('section .resume')




const navTag = document.querySelector('nav')

aboutTag.addEventListener('click', function(){
    aboutSection.classList.add('open-about')
    workSection.classList.add('close-work')
    resumeSection.classList.remove('open-resume')
    navTag.classList.remove('open')
    containerSection.classList.toggle('open')

})

workTag.addEventListener('click', function(){
    aboutSection.classList.remove('open-about')
    workSection.classList.remove('close-work')
    resumeSection.classList.remove('open-resume')
    navTag.classList.remove('open')
    containerSection.classList.toggle('open')

})

resumeTag.addEventListener('click', function(){
    aboutSection.classList.remove('open-about')
    workSection.classList.add('close-work')
    resumeSection.classList.add('open-resume')
    navTag.classList.remove('open')
    containerSection.classList.toggle('open')

})


