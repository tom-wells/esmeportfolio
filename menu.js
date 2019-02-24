const toggleTag = document.querySelector('.toggle-button')

const menuTag = document.querySelector('nav')

toggleTag.addEventListener('click', function() {

    menuTag.classList.toggle('open')
   
    console.log('open')

})