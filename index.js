// ----- MENU RESPONSIVE -----
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ----- SCROLL REVEAL -----
ScrollReveal().reveal(".section__header", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
  delay: 200,
});
ScrollReveal().reveal(".program__card, .service__content, .testimonial__card", {
  duration: 1200,
  origin: "bottom",
  distance: "60px",
  interval: 200,
});

// ----- CHANGEMENT DE NAV AU SCROLL -----
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(30,30,47,0.95)";
    nav.style.padding = "0.7rem 5%";
  } else {
    nav.style.background = "rgba(30,30,47,0.9)";
    nav.style.padding = "1rem 5%";
  }
});

// ----- SLIDER TESTIMONIAL -----
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: { delay: 3000 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
