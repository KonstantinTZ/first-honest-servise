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

menuLinks.forEach(function (elem) {

    elem.addEventListener('click', function () {
        burgerBtn.classList.remove('burger--active');

        menuNav.classList.remove('header__nav--active');

        feedbackNav.classList.remove('feedback--active');
    })
})

// swiperJs lib


const heroSwiper = new Swiper('.hero-swiper', {

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 50,

    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});

let hiddenElement = document.getElementById("lastRow");
let scrollButton = document.getElementById("scrollButton");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "end", behavior: "smooth" });
  scrollButton.classList.add('is-hidden');

}

scrollButton.addEventListener("click", handleButtonClick);