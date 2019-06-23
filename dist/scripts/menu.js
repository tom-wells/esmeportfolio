const toggleTag = document.querySelector('.toggle-button')

const menuTag = document.querySelector('nav')

const containerSection = document.querySelector('.container')

toggleTag.addEventListener('click', function() {

    menuTag.classList.toggle('open')
    containerSection.classList.toggle('open')
   
    console.log('open')

})

