// Initialize a new Swiper instance for the element with class "mySwiper"
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  spaceBetween: 100,   // 100px space between slides
  grabCursor: true,    // Show grab cursor on hover (desktop)
  keyboard: {
    enabled: true,    // Enable keyboard navigation
  },

  // Responsive breakpoints
  breakpoints: {
     // On small screens (mobile), shows 1 slide
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    // On tablets, shows 2 slides
    720: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    // On larger screens, shows 3 slides
    1070: {
      slidesPerView: 3, 
      slidesPerGroup: 1,
    },
  },

  // Enable scrollbar and make it draggable
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,  // Allows user to drag scrollbar
    dragSize: 50, 
  },
  initialSlide: 0,
});
