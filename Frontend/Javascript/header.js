var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Close nav when any nav link is clicked (on tablet/mobile)
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});