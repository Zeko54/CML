// Stores the initial vertical scroll position of the window
let prevScrollpos = window.pageYOffset;

// Listen for the scroll event on the window
window.addEventListener("scroll", function () {
  // Gets the header element by its ID
  const header = document.getElementById("header");

  // Gets the current vertical scroll position after scrolling
  let currentScrollPos = window.pageYOffset;

  // Shows header when scrolling up
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } 
  
  // Hides header when scrolling down
  else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollpos = currentScrollPos;
});

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}