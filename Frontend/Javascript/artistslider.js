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

document.querySelectorAll(".swiper").forEach((swiperEl) => {
  const swiperClass = [...swiperEl.classList].find((cls) =>
    cls.endsWith("-swiper")
  );
  const artists = performers[swiperClass];
  const section = swiperEl.closest(".performers-section");
  const nameBox = section.querySelector(".artist-name");
  const descBox = section.querySelector(".artist-description");
  const wrapper = swiperEl.querySelector(".swiper-wrapper");
  const infoBox = section.querySelector(".artist-info-box");

  // Create pagination container
  const pagination = document.createElement("div");
  pagination.className = "custom-pagination";

  // Clear existing slides but keep structure
  wrapper.innerHTML = "";

  // Variables for drag functionality
  let isDragging = false;
  let startPos = 0;
  let currentIndex = 0;

  // Create slides
  artists.forEach((artist, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.style.visibility = index === 0 ? "visible" : "hidden";
    slide.style.display = index === 0 ? "flex" : "none";
    slide.style.justifyContent = "center";
    slide.style.alignItems = "center";

    const circle = document.createElement("div");
    circle.className = "artist-circle";
    circle.style.width = "400px";
    circle.style.height = "400px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "#ccc";
    circle.style.border = "3px solid white";
    circle.style.transition = "all 0.6s ease-in"; // Add transition for animation

    // Set initial animation state
    if (index === 0) {
      circle.style.opacity = "1";
      circle.style.transform = "scale(0.85)";
    } else {
      circle.style.opacity = "0";
      circle.style.transform = "scale(0.75)";
    }

    slide.appendChild(circle);
    wrapper.appendChild(slide);

    // Create pagination dot
    const dot = document.createElement("div");
    dot.className = "pagination-dot";
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(dot);
  });

  // Add drag events
  wrapper.addEventListener("mousedown", dragStart);
  wrapper.addEventListener("touchstart", dragStart, { passive: true });
  wrapper.addEventListener("mousemove", drag);
  wrapper.addEventListener("touchmove", drag, { passive: false });
  wrapper.addEventListener("mouseup", dragEnd);
  wrapper.addEventListener("mouseleave", dragEnd);
  wrapper.addEventListener("touchend", dragEnd);

  // Add pagination to DOM
  infoBox.parentNode.insertBefore(pagination, infoBox.nextSibling);

  // Initialize first artist
  if (artists.length > 0) {
    updateArtist(0);
    // Force show first circle with animation
    const firstCircle = wrapper.querySelector(".artist-circle");
    firstCircle.style.opacity = "1";
    firstCircle.style.transform = "scale(0.85)";
  }

  function dragStart(e) {
    if (artists.length <= 1) return;

    isDragging = true;
    startPos = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    wrapper.style.cursor = "grabbing";
  }

  function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const currentPosition = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    const diff = currentPosition - startPos;
  }

  function dragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    wrapper.style.cursor = "grab";

    const movedBy =
      (e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX) -
      startPos;

    if (movedBy < -50 && currentIndex < artists.length - 1) {
      goToSlide(currentIndex + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  function goToSlide(index) {
    if (index < 0 || index >= artists.length || index === currentIndex) return;

    const slides = wrapper.querySelectorAll(".swiper-slide");
    const circles = wrapper.querySelectorAll(".artist-circle");
    const dots = pagination.querySelectorAll(".pagination-dot");

    // Animate out current circle
    circles[currentIndex].style.opacity = "0";
    circles[currentIndex].style.transform = "scale(0.75)";

    setTimeout(() => {
      // Hide current slide
      slides[currentIndex].style.display = "none";
      slides[currentIndex].style.visibility = "hidden";
      dots[currentIndex].classList.remove("active");

      // Show new slide
      slides[index].style.display = "flex";
      slides[index].style.visibility = "visible";
      dots[index].classList.add("active");

      // Animate in new circle
      circles[index].style.opacity = "1";
      circles[index].style.transform = "scale(0.85)";

      updateArtist(index);
      currentIndex = index;
    }, 300); // Match animation duration
  }

  function updateArtist(index) {
    // Start fade out
    nameBox.classList.add("fade-out");
    descBox.classList.add("fade-out");

    setTimeout(() => {
      // Update content
      nameBox.innerHTML = artists[index].name;
      descBox.innerHTML = artists[index].description;

      // Start fade in
      nameBox.classList.remove("fade-out");
      descBox.classList.remove("fade-out");
      nameBox.classList.add("fade-in");
      descBox.classList.add("fade-in");

      // Remove fade-in class after animation
      setTimeout(() => {
        nameBox.classList.remove("fade-in");
        descBox.classList.remove("fade-in");
      }, 400);
    }, 250);
  }
});
