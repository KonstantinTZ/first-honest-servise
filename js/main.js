let burgerBtn = document.querySelector('.burger');
let menuNav = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link')
let feedbackNav = document.querySelector('.feedback')

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');

    menuNav.classList.toggle('header__nav--active');

    feedbackNav.classList.toggle('feedback--active');

    // document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(elem){

    elem.addEventListener('click', function(){
        burgerBtn.classList.remove('burger--active');

        menuNav.classList.remove('header__nav--active');

        feedbackNav.classList.remove('feedback--active');
    })
})