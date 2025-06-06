document.addEventListener("DOMContentLoaded", function () {
  const bgImages = [
    "/Images/ArtistPage/bg-1.jpg",
    "/Images/ArtistPage/bg-2.jpg",
    "/Images/ArtistPage/bg-3.jpg",
    "/Images/ArtistPage/bg-4.jpg",
    "/Images/ArtistPage/bg-5.jpg",
    "/Images/ArtistPage/bg-6.jpg",
  ];

  bgImages.forEach((img) => {
    new Image().src = img;
  });

  const performers = {
    "duo-swiper": [
      {
        name: "D & A<br>ACOUSTIC",
        description:
          "D & A Acoustic Duo is the perfect harmony of two souls, blending their unique styles into a sound that’s intimate, raw, and deeply moving. With every strum and every note, they weave genres together, turning familiar melodies into something uniquely theirs. <br /><br />More than just performers, they are storytellers—creating music that feels personal, timeless, and effortlessly connected.",
        image: "/Images/ArtistPage/D&A-Acoustic-Duo.webp",
      },
      {
        name: "SKA & MASH <br> DUO",
        description:
          "SKA & MASH Duo delivers high-energy performances that keep crowds moving. With infectious grooves, smooth harmonies, and a unique twist on classic and modern hits, they create an electrifying atmosphere that makes every event unforgettable.<br /><br />More than musicians, they are entertainers—blending talent and creativity to make music that connects with every audience, every time.",
        image: "/Images/ArtistPage/Ska&Mash.jpg",
      },
    ],
    "band-swiper": [
      {
        name: "SWEET SOUL <br> BAND",
        description:
          "Sweet Soul Band is the heartbeat of timeless grooves, where smooth harmonies, infectious rhythms, and pure emotion come to life. With every note, they channel the spirit of soul, funk, and R&B, creating an experience that moves both the heart and the feet. <br /><br />More than a performance, their music is a feeling—one that lingers long after the last song fades.",
        image: "/Images/ArtistPage/Sweet-Soul.webp",
        link: "/Pages/artists/sweet-soul.html",
      },
      {
        name: "ABC BAND PH ",
        description:
          "ABC Band PH channels raw passion into every note, blending rock, pop, and soul into music that speaks beyond words. Their sound isn’t just heard—it’s felt, carrying the highs and lows of their journey in every melody, every beat. <br /><br />More than a band, they are emotion in motion, turning life’s stories into songs that resonate with the soul.",
        image: "/Images/ArtistPage/Abcph.jpg",
        link: "/Pages/artists/abc-ph.html",
      },
      {
        name: "DEF BAND PH",
        description:
          "DEF Band PH is the sound of fearless creativity—where dynamic rhythms, powerful vocals, and bold melodies collide. Their music isn’t just played; it’s unleashed, breaking boundaries and pulling listeners into something fresh and electrifying. <br /><br />More than a band, they are a movement—an invitation to feel, to move, and to get lost in the sound.",
        image: "/Images/ArtistPage/Defph.jpg",
        link: "/Pages/artists/def-ph.html",
      },
    ],
    "solo-swiper": [
      {
        name: "SHAMIKSHA <br> THE VIOLINIST",
        description:
          "Her violin doesn’t just play notes—it tells stories, evokes emotions, and leaves audiences breathless. Whether it’s a classical masterpiece or a modern fusion, Shamiksha brings a unique energy and passion to every performance. <br /><br />Her style is more than technique; it’s an experience. Each note is a journey, every melody a memory waiting to be made.",
        image: "/Images/ArtistPage/Shamiksha.webp",
      },
      {
        name: "VLADA <br> SOLO PIANIST",
        description:
          "Trained in the rigorous Soviet classical tradition, she refined her artistry in Kyiv before taking her talent across the world, performing at some of the most prestigious hotels. From Turkey to the Middle East, each performance is more than music; it is a reflection of her passion, discipline, and love for the instrument. <br /><br />With every chord, she tells a story—one of dedication, elegance, and the timeless power of the piano.",
        image: "/Images/ArtistPage/Vlada.webp",
      },
    ],
    "dj-swiper": [
      {
        name: "DJ AYA",
        description:
          "A DJ, a performer, a storyteller, and a musical sorceress who transports audiences into fantastical realms with her electrifying sets. Known for blending high-energy beats with an immersive cosplay experience, DJ Aya stands at the intersection of music, gaming, anime, and pop culture. <br /><br />With every performance, she transforms into iconic characters, turning the DJ booth into a stage where sound and spectacle collide.",
        image: "/Images/ArtistPage/Dj-Aya.webp",
      },
      {
        name: "DJ FREECS",
        description:
          "He’s the pulse of the party, turning every event into an electrifying experience. With seamless genre-blending, live remixing, and creative mashups, he transforms tracks into something fresh and unexpected. <br /><br />Feeding off the crowd’s energy, he doesn’t just play music—he crafts a dynamic, immersive journey that keeps the dancefloor alive and unforgettable.",
        image: "/Images/ArtistPage/Dj-Freecs.webp",
      },
    ],
    "group-swiper": [
      {
        name: "G-SWAG DANCERS",
        description:
          "The G-Swag Dancers are the embodiment of movement, rhythm, and modern dance culture. Blending hip-hop, krumping, popping, and the latest dance trends, they bring an electrifying energy to every performance. <br /><br />With innovative choreography and a passion for self-expression, they don’t just follow the beat—they set it, redefining what it means to move in style.",
        image: "/Images/ArtistPage/G-Swag-Dancers.webp",
      },
    ],
  };

  // Grabbing modal and select outside for use in functions
  const modal = document.querySelector(".modal-overlay");
  const closeModalBtn = document.querySelector(".modal-close");
  const bandSelect = document.getElementById("bandSelect");

  // Loop through each swiper (performer section)
  document.querySelectorAll(".swiper").forEach((swiperEl) => {
    const swiperClass = [...swiperEl.classList].find((cls) =>
      cls.endsWith("-swiper")
    );
    const artists = performers[swiperClass];
    const section = swiperEl.closest(".performers-section");
    const nameBox = section.querySelector(".artist-name");
    const descBox = section.querySelector(".artist-description");
    const learnMoreBtn = section.querySelector(".learn-more-btn");
    const quoteBtn = section.querySelector(".quote-btn");
    const wrapper = swiperEl.querySelector(".swiper-wrapper");

    wrapper.innerHTML = "";
    let currentIndex = 0;

    // Populate slides for this section
    artists.forEach((artist, index) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      if (index !== 0) slide.classList.add("hidden");

      const circle = document.createElement("div");
      circle.className = "artist-circle";
      circle.style.backgroundImage = `url(${
        artist.image || "default-placeholder.jpg"
      })`;
      slide.appendChild(circle);
      wrapper.appendChild(slide);
    });

    // Add arrow navigation
    const leftArrow = document.createElement("button");
    leftArrow.className = "arrow-button arrow-left";
    leftArrow.innerHTML = "&#10094;";
    leftArrow.addEventListener("click", () => goToSlide(currentIndex - 1));

    const rightArrow = document.createElement("button");
    rightArrow.className = "arrow-button arrow-right";
    rightArrow.innerHTML = "&#10095;";
    rightArrow.addEventListener("click", () => goToSlide(currentIndex + 1));

    swiperEl.appendChild(leftArrow);
    swiperEl.appendChild(rightArrow);

    // Function to update artist info in section
    function updateArtist(index) {
      const slides = wrapper.querySelectorAll(".swiper-slide");
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
      });
      nameBox.innerHTML = artists[index].name;
      descBox.innerHTML = artists[index].description;
      if (learnMoreBtn && artists[index].link) {
        learnMoreBtn.onclick = () => {
          window.location.href = artists[index].link;
        };
      }
      // Optional: fade/animation code
    }

    // Function to handle left/right slide navigation
    function goToSlide(index) {
      if (index < 0 || index >= artists.length || index === currentIndex)
        return;

      const slides = wrapper.querySelectorAll(".swiper-slide");
      const currentSlide = slides[currentIndex];
      const nextSlide = slides[index];
      const currentCircle = currentSlide.querySelector(".artist-circle");
      const nextCircle = nextSlide.querySelector(".artist-circle");

      nameBox.classList.add("fade-out");
      descBox.classList.add("fade-out");
      currentCircle.classList.add("fade-out");

      setTimeout(() => {
        nameBox.innerHTML = artists[index].name;
        descBox.innerHTML = artists[index].description;
        if (learnMoreBtn && artists[index].link) {
          learnMoreBtn.onclick = () => {
            window.location.href = artists[index].link;
          };
        }
        currentSlide.classList.add("hidden");
        nextSlide.classList.remove("hidden");

        nameBox.classList.remove("fade-out");
        descBox.classList.remove("fade-out");
        nameBox.classList.add("fade-in");
        descBox.classList.add("fade-in");
        nextCircle.classList.remove("fade-out");
        nextCircle.classList.add("circle-fade-in");

        setTimeout(() => {
          nameBox.classList.remove("fade-in");
          descBox.classList.remove("fade-in");
          nextCircle.classList.remove("circle-fade-in");
        }, 600);
      }, 250);
      currentIndex = index;
    }

    // "Get a quote" button logic with pre-select
    quoteBtn.addEventListener("click", () => {
      modal.classList.add("open-modal");
      // Pick the artist name in the current slider as default
      let artistName = "";
      if (artists && artists.length > 0) {
        // Use currentIndex if exists, otherwise default to 0
        let idx = typeof currentIndex !== "undefined" ? currentIndex : 0;
        artistName = artists[idx].name.replace(/<br>/g, " ");
      }
      populateBandSelect(artistName);
    });

    // Show first artist on load
    updateArtist(0);
  });

  // Function to fill dropdown, selecting the provided artistName (if given)
  function populateBandSelect(selectedName = "") {
    if (!bandSelect) return;
    bandSelect.innerHTML = "";

    const allArtists = [
      ...performers["duo-swiper"],
      ...performers["band-swiper"],
      ...performers["solo-swiper"],
      ...performers["dj-swiper"],
      ...performers["group-swiper"],
    ];

    allArtists.forEach((artist) => {
      const option = document.createElement("option");
      option.value = artist.name.replace(/<br>/g, " ");
      option.textContent = artist.name.replace(/<br>/g, " ");
      if (option.value === selectedName) {
        option.selected = true;
      }
      bandSelect.appendChild(option);
    });
  }

  // Close modal button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("open-modal");
    });
  }

  // Modal option buttons "active" effect
  document.querySelectorAll(".modal-options").forEach((group) => {
    group.addEventListener("click", function (e) {
      if (e.target.classList.contains("option-btn")) {
        group
          .querySelectorAll(".option-btn")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
      }
    });
  });
});
