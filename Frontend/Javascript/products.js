const productData = {
  promoDeals: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJP_rbQohrXaCvxNl0cHkg7ZCK989HI9-zdQ&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQov2BNKOXe22kDqKH-afurTMKlKDuwnMS4Q&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJP_rbQohrXaCvxNl0cHkg7ZCK989HI9-zdQ&s",
    },
  ],
  ourProducts: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQov2BNKOXe22kDqKH-afurTMKlKDuwnMS4Q&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJP_rbQohrXaCvxNl0cHkg7ZCK989HI9-zdQ&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQov2BNKOXe22kDqKH-afurTMKlKDuwnMS4Q&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJP_rbQohrXaCvxNl0cHkg7ZCK989HI9-zdQ&s",
    },
  ],
  productVideos: [
    { src: "https://youtu.be/jn5UNG1FPk8?si=FpdEkNfi-71o9X9x" },
    { src: "https://youtu.be/zKAiTPjtLpo?si=hdn-BZcz-MCTXOJc" },
    { src: "https://youtu.be/jn5UNG1FPk8?si=FpdEkNfi-71o9X9x" },
  ],
};

function loadProductContent() {
  const promoWrapper = document.querySelector(
    ".promoDeals-container .swiper-wrapper"
  );
  const galleryWrapper = document.querySelector(
    ".ourProducts-Gallerycontainer .swiper-wrapper"
  );
  const videoWrapper = document.querySelector(
    ".ourProducts-Videocontainer .swiper-wrapper"
  );

  productData.promoDeals.forEach((item) => {
    promoWrapper.innerHTML += `
        <div class="swiper-slide">
          <img src="${item.img}" alt="${item.alt}" />
        </div>
      `;
  });

  productData.ourProducts.forEach((item) => {
    galleryWrapper.innerHTML += `
        <div class="swiper-slide">
          <img src="${item.img}" alt="${item.alt}" />
        </div>
      `;
  });

  productData.productVideos.forEach((video) => {
    videoWrapper.innerHTML += `
        <div class="swiper-slide">
          <iframe src="${video.src}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadProductContent();

  new Swiper(".promoDeals-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".promoDeals-pagination",
      clickable: true,
    },
  });

  new Swiper(".ourProducts-Gallerycontainer", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".ourProducts-Videocontainer", {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
      el: ".ourProducts-scrollbar",
      draggable: true,
      dragSize: 50,
    },
  });
});
