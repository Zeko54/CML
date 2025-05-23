window.onload = function () {
  const mybutton = document.getElementById("arrowBtn");

  // Shows or hide the button based on scroll position
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block"; // Show button when scrolled down more than 20px
    } else {
      mybutton.style.display = "none"; // Hide button when near top of the page
    }
  };

  // Scroll the page to the top when top button is clicked
  window.topFunction = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};