var swiper2 = new Swiper(".swiper-proceso", {
  spaceBetween: 500,
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
  speed: 1000,
  lazy: true,
  preloadImages: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});

var swiper3 = new Swiper(".swiper-equipo", {
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
