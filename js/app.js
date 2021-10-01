var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
  speed: 1000,
  lazy: true,
  preloadImages: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
