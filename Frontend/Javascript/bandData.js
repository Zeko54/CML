import bandData from "../Javascript/data-artist.js";

document.addEventListener("DOMContentLoaded", () => {
  const artist = document.body.getAttribute("data-artist");

  const galleryContainer = document.querySelector(
    ".gallery-container .swiper-wrapper"
  );
  const videoContainer = document.querySelector(
    ".video-container .swiper-wrapper"
  );

  // Load Gallery
  function loadGallery() {
    const galleryImages = bandData[artist].gallery;
    galleryImages.forEach((imageSrc) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("swiper-slide"); // Fixed class name

      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = "Gallery Image";

      galleryItem.appendChild(img);
      galleryContainer.appendChild(galleryItem);
    });
  }

  // Load Videos
  function loadVideos() {
    const videos = bandData[artist].videos;
    videos.forEach((video) => {
      const videoItem = document.createElement("div");
      videoItem.classList.add("swiper-slide", "video-item"); // Fixed class name

      const videoBox = document.createElement("div");
      videoBox.classList.add("video-box");

      // Iframe
      const iframe = document.createElement("iframe");
      iframe.src = video.src;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.classList.add("video-iframe");

      // Info
      const infoBox = document.createElement("div");
      infoBox.classList.add("video-info");

      const title = document.createElement("h1");
      title.textContent = video.title;

      const description = document.createElement("p");
      description.textContent = video.description;

      infoBox.appendChild(title);
      infoBox.appendChild(description);

      // Always add iframe then info (consistent layout)
      videoBox.appendChild(iframe);
      videoBox.appendChild(infoBox);

      videoItem.appendChild(videoBox);
      videoContainer.appendChild(videoItem);
    });
  }

  // Load dynamic content
  loadGallery();
  loadVideos();

  // Init Swipers AFTER content is inserted
  new Swiper(".gallery-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
      el: ".gallery-scrollbar",
      draggable: true,
    },
  });

  new Swiper(".video-container", {
    slidesPerView: 1,
    allowTouchMove: false,
    pagination: {
      el: ".video-pagination",
      clickable: true,
      type: "bullets",
    },
  });
});
