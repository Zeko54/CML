const performers = {
  "duo-swiper": [
    {
      name: "D & A<br>ACOUSTIC",
      description:
        "D & A Acoustic Duo is the perfect harmony of two souls, blending their unique styles into a sound that’s intimate, raw, and deeply moving. With every strum and every note, they weave genres together, turning familiar melodies into something uniquely theirs. <br /><br />More than just performers, they are storytellers—creating music that feels personal, timeless, and effortlessly connected.",
    },
    {
      name: "SKA & MASH <br> DUO",
      description:
        "DEF Band PH is the sound of fearless creativity—where dynamic rhythms, powerful vocals, and bold melodies collide. Their music isn’t just played; it’s unleashed, breaking boundaries and pulling listeners into something fresh and electrifying. <br /><br />More than a band, they are a movement—an invitation to feel, to move, and to get lost in the sound.",
    },
  ],
  "band-swiper": [
    {
      name: "SWEET SOUL <br> BAND",
      description:
        "Sweet Soul Band is the heartbeat of timeless grooves, where smooth harmonies, infectious rhythms, and pure emotion come to life. With every note, they channel the spirit of soul, funk, and R&B, creating an experience that moves both the heart and the feet. <br /><br />More than a performance, their music is a feeling—one that lingers long after the last song fades.",
    },
    {
      name: "ABC PH BAND",
      description:
        "ABC Band PH channels raw passion into every note, blending rock, pop, and soul into music that speaks beyond words. Their sound isn’t just heard—it’s felt, carrying the highs and lows of their journey in every melody, every beat. <br /><br />More than a band, they are emotion in motion, turning life’s stories into songs that resonate with the soul.",
    },
    {
      name: "DEF PH BAND",
      description:
        "DEF Band PH is the sound of fearless creativity—where dynamic rhythms, powerful vocals, and bold melodies collide. Their music isn’t just played; it’s unleashed, breaking boundaries and pulling listeners into something fresh and electrifying. <br /><br />More than a band, they are a movement—an invitation to feel, to move, and to get lost in the sound.",
    },
  ],
  "solo-swiper": [
    {
      name: "SHAMIKSHA THE <br> VIOLINIST",
      description:
        "Her violin doesn’t just play notes—it tells stories, evokes emotions, and leaves audiences breathless. Whether it’s a classical masterpiece or a modern fusion, Shamiksha brings a unique energy and passion to every performance. <br /><br />Her style is more than technique; it’s an experience. Each note is a journey, every melody a memory waiting to be made.",
    },
    {
      name: "VLADA SOLO <br> PIANIST",
      description:
        "Trained in the rigorous Soviet classical tradition, she refined her artistry in Kyiv before taking her talent across the world, performing at some of the most prestigious hotels. From Turkey to the Middle East, each performance is more than music; it is a reflection of her passion, discipline, and love for the instrument. <br /><br />With every chord, she tells a story—one of dedication, elegance, and the timeless power of the piano.",
    },
  ],
  "dj-swiper": [
    {
      name: "DJ AYA",
      description:
        "A DJ, a performer, a storyteller, and a musical sorceress who transports audiences into fantastical realms with her electrifying sets. Known for blending high-energy beats with an immersive cosplay experience, DJ Aya stands at the intersection of music, gaming, anime, and pop culture. <br /><br />With every performance, she transforms into iconic characters, turning the DJ booth into a stage where sound and spectacle collide.",
    },
    {
      name: "DJ FREECS",
      description:
        "He’s the pulse of the party, turning every event into an electrifying experience. With seamless genre-blending, live remixing, and creative mashups, he transforms tracks into something fresh and unexpected. <br /><br />Feeding off the crowd’s energy, he doesn’t just play music—he crafts a dynamic, immersive journey that keeps the dancefloor alive and unforgettable.",
    },
  ],
  "group-swiper": [
    {
      name: "G-SWAG DANCERS",
      description:
        "The G-Swag Dancers are the embodiment of movement, rhythm, and modern dance culture. Blending hip-hop, krumping, popping, and the latest dance trends, they bring an electrifying energy to every performance. <br /><br />With innovative choreography and a passion for self-expression, they don’t just follow the beat—they set it, redefining what it means to move in style.",
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
