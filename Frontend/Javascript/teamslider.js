const swiper = new Swiper('.swiper', {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// Get custom buttons
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');


// Add click events to control swiper
leftArrow.addEventListener('click', () => swiper.slidePrev());
rightArrow.addEventListener('click', () => swiper.slideNext());
