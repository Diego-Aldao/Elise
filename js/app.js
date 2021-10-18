//SWIPER HEADER PRINCIPAL
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
window.onload = () => {
  //SWIPER PROCESO
  var swiper2 = new Swiper(".swiper-proceso", {
    spaceBetween: 500,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //SWIPER EQUIPO
  var swiper3 = new Swiper(".swiper-equipo", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //SWIPER NOTICIAS
  var swiper4 = new Swiper(".swiper-noticias", {
    spaceBetween: 50,
    grabCursor: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //SCROLL LOGO
  const scrollearBarraSuperior = () => {
    let logoTop = document.querySelector(".logo-top");

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

  let cambiarContenidoServicios = (e) => {
    let esteIcono = e.currentTarget;
    let tituloServicios = document.querySelector(".titulo-servicios");
    let textoServicios = document.querySelector(".textos-secundarios");
    for (let i = 0; i < 5; i++) {
      if (esteIcono.dataset.valor == i) {
        tituloServicios.innerHTML = contenidoTitulos[i];
        textoServicios.innerHTML = contenidoTextos[i];
        gsap.to(tituloServicios, {
          opacity: 0,
          duration: 0,
          top: "20px",
        });
        gsap.to(textoServicios, {
          opacity: 0,
          duration: 0,
          top: "20px",
        });
      }
    }
    gsap.to(tituloServicios, {
      opacity: 1,
      duration: 0.3,
      top: "0px",
    });
    gsap.to(textoServicios, {
      opacity: 1,
      duration: 0.3,
      top: "0px",
    });
  };

  let cambiarEstilosServicios = (e) => {
    let esteIcono = e.currentTarget;
    iconosServicios.forEach((icono) => {
      icono.classList.remove("seleccionado");
    });
    esteIcono.classList.add("seleccionado");
  };

  iconosServicios.forEach((icono) => {
    icono.addEventListener("click", cambiarContenidoServicios);
    icono.addEventListener("click", cambiarEstilosServicios);
  });

  //CONTACTO (ICONOS SEGUIR)
  const animacionIconos = (e, iconoTop, tituloOpacity, tituloMargin) => {
    let contenedorIconos = e.currentTarget.querySelector(
      ".contenedor-icono-footer"
    );
    gsap.to(contenedorIconos, {
      duration: 0.5,
      top: iconoTop,
      ease: Power4.easeOut,
    });
    let titulosIconos = e.currentTarget.querySelector(".titulos-icono");
    gsap.to(titulosIconos, {
      opacity: tituloOpacity,
      duration: 0.5,
      margin: tituloMargin,
      ease: Power4.easeOut,
    });
  };

  let iconosContactoFooter = document.querySelectorAll(
    ".iconos-contacto-footer"
  );

  iconosContactoFooter.forEach((icono) => {
    icono.addEventListener("mouseover", function (e) {
      animacionIconos(e, "100%", 1, "0px");
    });
    icono.addEventListener("mouseleave", function (e) {
      animacionIconos(e, "0px", 0, "0px 0px 30px");
    });
  });
  /*LA MANERA QUE ENCONTRÉ DE PASAR EL EVENTO COMO ARGUMENTO CUANDO HAY MULTIPLES ARGUMENTOS 
  ES CON UNA FUNCION ANONIMA*/

  //CONTACTO INPUTS
  let animarInputs = (e) => {
    let divsAnimacion = document.querySelectorAll(".animacion-input");
    let esteDiv = e.currentTarget.querySelector(".animacion-input");
    divsAnimacion.forEach((div) => {
      gsap.to(div, {
        left: "-100%",
        duration: 0.5,
        ease: Power4.easeOut,
      });
    });
    gsap.to(esteDiv, {
      left: "0px",
      duration: 0.5,
      ease: Power4.easeOut,
    });
  };
  let parentInputs = document.querySelectorAll(".grupo-input");
  parentInputs.forEach((parent) => {
    parent.addEventListener("click", animarInputs);
  });

  const animarBtn = (e, bgLeft) => {
    let bgBoton = e.currentTarget.querySelector(".bg-texto-form");
    gsap.to(bgBoton, {
      left: bgLeft,
      duration: 0.5,
      ease: Power4.easeOut,
    });
  };

  let botones = document.querySelectorAll(".btn");
  botones.forEach((boton) => {
    boton.addEventListener("mouseleave", function (e) {
      animarBtn(e, "-100%");
    });
    boton.addEventListener("mouseover", function (e) {
      animarBtn(e, "0px");
    });
  });

  //NOTICIAS
  let animarTarjetas = (e, tarjetaUnoRIght, tarjetaDosRight) => {
    let tarjetaUno = e.currentTarget.querySelector(".tarjeta-1");
    let tarjetaDos = e.currentTarget.querySelector(".tarjeta-2");
    gsap.to(tarjetaUno, {
      right: tarjetaUnoRIght,
      duration: 1,
      ease: Power4.easeOut,
    });
    gsap.to(tarjetaDos, {
      right: tarjetaDosRight,
      duration: 1,
      ease: Power4.easeOut,
    });
  };

  let slidesNoticias = document.querySelectorAll(".slide-noticias");
  slidesNoticias.forEach((slide) => {
    slide.addEventListener("mouseover", function (e) {
      animarTarjetas(e, "-150%", "0px");
    });
    slide.addEventListener("mouseleave", function (e) {
      animarTarjetas(e, "0px", "-150%");
    });
    /*LA MANERA QUE ENCONTRÉ DE PASAR EL EVENTO COMO ARGUMENTO CUANDO HAY MULTIPLES ARGUMENTOS 
  ES CON UNA FUNCION ANONIMA*/
  });

  //EQUIPO
  const animacionImagenEquipo = (e, descripcionTop, imagenTop) => {
    let descripcionEquipo = e.currentTarget.querySelector(
      ".descripcion-equipo"
    );
    let imagenEquipo = e.currentTarget.querySelector(".imagenes-equipo");
    gsap.to(descripcionEquipo, {
      top: descripcionTop,
      duration: 0.5,
      ease: Power4.easeOut,
    });
    gsap.to(imagenEquipo, {
      top: imagenTop,
      duration: 0.5,
      ease: Power4.easeOut,
    });
  };

  let slideEquipo = document.querySelectorAll(".slide-equipo");
  slideEquipo.forEach((contenedor) => {
    contenedor.addEventListener("mouseover", function (e) {
      animacionImagenEquipo(e, "0px", "50%");
    });
    contenedor.addEventListener("mouseleave", function (e) {
      animacionImagenEquipo(e, "-100%", "0px");
    });
  });

  //LEAFLET (MAPA)
  let map = L.map("mapa").setView([-34.638434, -68.297539], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 17,
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);

  L.marker([-34.638434, -68.297539]).addTo(map).bindPopup("Elise").openPopup();

  setInterval(function () {
    map.invalidateSize();
  }, 100); //PARA QUE NO HAYA ERRORES DE TAMAÑO ENTRE EL MAPA Y EL CONTENEDOR DE BOOTSTRAP

  //OBSERVER
  const crearObservador = (animacion, tiempo) => {
    const secciones = document.querySelectorAll(animacion);

    const options = {
      root: null, //es el default, todo el viewport
      threshold: 0.3, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } //si no esta en la pantalla, termina la funcion
        gsap.to(entry.target, {
          top: "0px",
          opacity: 1,
          duration: tiempo,
          ease: Power4.easeOut,
        });
      });
    }, options);
    secciones.forEach((section) => {
      observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
    });
  };
  crearObservador(".intersection-obs", 0.8);
  crearObservador(".intersection-obs-2", 1);
  crearObservador(".intersection-obs-3", 0.5);
};
