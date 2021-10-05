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
    el: ".swiper-pagination",
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

var swiper4 = new Swiper(".swiper-noticias", {
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//SCROLL LOGO

let logoTop = document.querySelector(".logo-top");

const scrollearBarraSuperior = () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    logoTop.style.opacity = 0;
  } else {
    logoTop.style.opacity = 1;
  }
};

window.onscroll = () => {
  scrollearBarraSuperior();
};

//GSAP TRABAJOS

const animacionImagen = (e) => {
  let contenidoImagen = e.currentTarget.querySelector(
    ".contenido-imagen-trabajo"
  );
  let imagen = e.currentTarget.querySelector(".imagenes-trabajos");
  gsap.to(contenidoImagen, {
    top: "0px",
    duration: 0.5,
    ease: Power4.easeOut,
  });
  gsap.to(imagen, {
    duration: 0.5,
    top: "50%",
    ease: Power4.easeOut,
  });
};

const animacionImagenSalida = (e) => {
  let contenidoImagen = e.currentTarget.querySelector(
    ".contenido-imagen-trabajo"
  );
  let imagen = e.currentTarget.querySelector(".imagenes-trabajos");
  gsap.to(contenidoImagen, {
    top: "-100%",
    duration: 0.5,
    ease: Power4.easeOut,
  });
  gsap.to(imagen, {
    duration: 0.5,
    top: "0px",
    ease: Power4.easeOut,
  });
};

let contenedorImagen = document.querySelectorAll(".col-imagen");

contenedorImagen.forEach((contenedor) => {
  contenedor.addEventListener("mouseover", animacionImagen);
});
contenedorImagen.forEach((contenedor) => {
  contenedor.addEventListener("mouseleave", animacionImagenSalida);
});
