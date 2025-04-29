const performers = {
  "duo-swiper": [
    {
      name: "D & A<br>ACOUSTIC",
      description: "D & A Acoustic Duo is the perfect harmony of two souls...",
    },
    {
      name: "M & J<br>ACOUSTIC",
      description: "Chill and upbeat covers of your favorite songs.",
    },
  ],
  "solo-swiper": [
    {
      name: "JAY SMOOTH",
      description: "Solo pop artist with smooth vocals.",
    },
    {
      name: "LOLA JANE",
      description: "Acoustic and soul covers for intimate gigs.",
    },
  ],
  "band-swiper": [
    {
      name: "THE VIBRANTS",
      description: "Energetic funk band with live horns.",
    },
    {
      name: "ECHO BEAT",
      description: "Modern rock band with EDM fusion.",
    },
    {
      name: "SUNSET GROOVE",
      description: "Reggae fusion group for chill evenings.",
    },
  ],
  "dj-swiper": [
    {
      name: "DJ AYA",
      description: "Anime-themed, cosplay DJ sets with high-energy beats.",
    },
    {
      name: "DJ LEX",
      description: "Mixes hip-hop, trap, and Afrobeat with style.",
    },
  ],
  "group-swiper": [
    {
      name: "G-SWAG DANCERS",
      description: "Urban dance crew redefining modern moves.",
    },
  ],
};

const swiperElements = document.querySelectorAll(".swiper");

swiperElements.forEach((swiperEl) => {
  const swiperClass = [...swiperEl.classList].find((cls) =>
    cls.endsWith("-swiper")
  );
  const artistList = performers[swiperClass];
  const section = swiperEl.closest(".performers-section");
  const nameBox = section.querySelector(".artist-name");
  const descBox = section.querySelector(".artist-description");

  const swiperWrapper = swiperEl.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";

  // Create slides
  artistList.forEach((artist, index) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    const circle = document.createElement("div");
    circle.classList.add("artist-circle");
    circle.style.opacity = "0"; // Start all circles hidden

    slide.appendChild(circle);
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper(`.${swiperClass}`, {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 600,
    grabCursor: true,
    effect: "slide",
    allowTouchMove: true,
    resistanceRatio: 0.7, // Smoother drag

    on: {
      init: function () {
        // Show only initial active circle
        this.slides.forEach((slide, i) => {
          const circle = slide.querySelector(".artist-circle");
          circle.style.opacity = i === this.activeIndex ? "1" : "0";
        });
      },
      sliderMove: function () {
        // Hide all circles during drag
        this.slides.forEach((slide) => {
          slide.querySelector(".artist-circle").style.opacity = "0";
        });
      },
      touchEnd: function () {
        updateContent(this.realIndex);
      },
      slideChangeTransitionEnd: function () {
        if (!this.isDragging) {
          updateContent(this.realIndex);
        }
      },
    },
  });

  function updateContent(currentIndex) {
    // Hide all circles first
    swiper.slides.forEach((slide) => {
      slide.querySelector(".artist-circle").style.opacity = "0";
    });

    // Text fade out
    nameBox.classList.add("fade-out");
    descBox.classList.add("fade-out");

    setTimeout(() => {
      // Update text
      nameBox.innerHTML = artistList[currentIndex].name;
      descBox.innerHTML = artistList[currentIndex].description;

      // Text fade in
      nameBox.classList.remove("fade-out");
      descBox.classList.remove("fade-out");
      nameBox.classList.add("fade-in");
      descBox.classList.add("fade-in");

      // Show only current circle with animation
      const activeCircle =
        swiper.slides[swiper.activeIndex].querySelector(".artist-circle");
      activeCircle.style.opacity = "1";
      activeCircle.classList.add("circle-fade-in");

      // Remove animation class after it completes
      setTimeout(() => {
        activeCircle.classList.remove("circle-fade-in");
      }, 600);
    }, 150);
  }

  // Initialize first slide
  updateContent(0);
});
