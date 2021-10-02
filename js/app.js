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
