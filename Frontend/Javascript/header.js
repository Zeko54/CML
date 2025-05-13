window.onload = function () {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
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

    // Attach toggle to global scope
    window.toggleMobileMenu = toggleMobileMenu;

    // Fix: use correct class if 'nav-item' doesn't exist
    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
        }
      });
    });
  };