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

//SERVICIOS
let iconosServicios = document.querySelectorAll(".contenedor-iconos");

let contenidoTitulos = [
  '<span class="span-titulo-servicios">construimos las mejores marcas.</span>' +
    '<span class="span-titulo-servicios">impulsa tu negocio al siguiente nivel.</span>' +
    '<span class="span-titulo-servicios">soluciones hechas a medida.</span>',

  '<span class="span-titulo-servicios">soluciones de marketing personalizadas.</span>' +
    '<span class="span-titulo-servicios">impulsa tu negocio al siguiente nivel.</span>' +
    '<span class="span-titulo-servicios">soluciones hechas a medida.</span>',

  '<span class="span-titulo-servicios">dirección de diseño para empresas</span>' +
    '<span class="span-titulo-servicios">impulsa tu negocio al siguiente nivel.</span>' +
    '<span class="span-titulo-servicios">soluciones hechas a medida.</span>',

  '<span class="span-titulo-servicios">creación de contenido profesional.</span>' +
    '<span class="span-titulo-servicios">impulsa tu negocio al siguiente nivel.</span>' +
    '<span class="span-titulo-servicios">soluciones hechas a medida.</span>',

  '<span class="span-titulo-servicios">investigación profesional de consumidores.</span>' +
    '<span class="span-titulo-servicios">impulsa tu negocio al siguiente nivel.</span>' +
    '<span class="span-titulo-servicios">soluciones hechas a medida.</span>',
];
let contenidoTextos = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem molestias, qui commodi placeat quidem consequatur asperiores, fuga iure sequi voluptatem tempore dolore odit nulla ab quisquam sed unde pariatur! Iure architecto necessitatibus fuga, provident dignissimos.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem molestias, qui commodi placeat quidem consequatur asperiores, fuga iure sequi voluptatem tempore dolore odit nulla ab quisquam sed unde pariatur! Iure architecto necessitatibus fuga, provident dignissimos id ratione recusandae.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem molestias, qui commodi placeat quidem consequatur asperiores, fuga iure sequi voluptatem tempore dolore odit nulla ab quisquam sed unde pariatur! Iure architecto necessitatibus fuga.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem molestias, qui commodi placeat quidem consequatur asperiores, fuga iure sequi voluptatem tempore dolore odit nulla ab quisquam sed unde pariatur! Iure architecto necessitatibus fuga, provident dignissimos id ratione recusandae hic nesciunt unde ad.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum rem molestias, qui commodi placeat quidem consequatur asperiores, fuga iure sequi voluptatem tempore dolore odit nulla ab quisquam sed unde pariatur! Iure architecto necessitatibus fuga, provident dignissimos id ratione recusandae hic nesciunt unde ad illum officiis aspernatur qui ab maxime.",
];

let cambiarContenido = (e) => {
  let esteIcono = e.currentTarget;
  for (let i = 0; i < 5; i++) {
    if (esteIcono.dataset.valor == i) {
      let tituloServicios = document.querySelector(".titulo-servicios");
      tituloServicios.innerHTML = contenidoTitulos[i];

      let textoServicios = document.querySelector(".textos-secundarios");
      textoServicios.innerHTML = contenidoTextos[i];
    }
  }
};

let cambiarEstilos = (e) => {
  let esteIcono = e.currentTarget;
  iconosServicios.forEach((icono) => {
    icono.classList.remove("seleccionado");
  });
  esteIcono.classList.add("seleccionado");
};

iconosServicios.forEach((icono) => {
  icono.addEventListener("click", cambiarContenido);
});
iconosServicios.forEach((icono) => {
  icono.addEventListener("click", cambiarEstilos);
});

//CONTACTO (ICONOS SEGUIR)
const animacionIconos = (e) => {
  let contenedorIconos = e.currentTarget.querySelector(
    ".contenedor-icono-footer"
  );
  gsap.to(contenedorIconos, {
    duration: 0.5,
    top: "100%",
    ease: Power4.easeOut,
  });
  let titulosIconos = e.currentTarget.querySelector(".titulos-icono");
  gsap.to(titulosIconos, {
    opacity: 1,
    duration: 0.5,
    margin: "0px",
    ease: Power4.easeOut,
  });
};

const animacionIconosSalida = (e) => {
  let contenedorIconos = e.currentTarget.querySelector(
    ".contenedor-icono-footer"
  );
  gsap.to(contenedorIconos, {
    duration: 0.5,
    top: "0px",
    ease: Power4.easeOut,
  });
  let titulosIconos = e.currentTarget.querySelector(".titulos-icono");
  gsap.to(titulosIconos, {
    opacity: 0,
    duration: 0.5,
    margin: "0px 0px 30px",
    ease: Power4.easeOut,
  });
};

let iconosContactoFooter = document.querySelectorAll(".iconos-contacto-footer");

iconosContactoFooter.forEach((icono) => {
  icono.addEventListener("mouseover", animacionIconos);
});
iconosContactoFooter.forEach((icono) => {
  icono.addEventListener("mouseleave", animacionIconosSalida);
});
