var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  spaceBetween: 100,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  initialSlide: 0,
});
