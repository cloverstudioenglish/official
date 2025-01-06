const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 500,
// });
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content iframe", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".story__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".story__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".story__content h2", {
  ...scrollRevealOption,
  delay: 10,
});
ScrollReveal().reveal(".story__content p", {
  ...scrollRevealOption,
  delay: 10,
});
// ScrollReveal().reveal(".story__content p", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// ScrollReveal().reveal(".story__content .story__btn", {
//   ...scrollRevealOption,
//   delay: 2000,
// });

ScrollReveal().reveal(".client__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".client__content h2", {
  ...scrollRevealOption,
  delay: 10,
});

ScrollReveal().reveal(".client__content h4", {
  ...scrollRevealOption,
  delay: 10,
});

ScrollReveal().reveal(".gift", {
  ...scrollRevealOption,
  delay: 10,
});

ScrollReveal().reveal(".subscribe", {
  ...scrollRevealOption,
  delay: 10,
});

var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }

const swiper = new Swiper(".swiper", {
  loop: true,
});
