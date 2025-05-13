let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollpos = currentScrollPos;
});

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}