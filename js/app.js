import { slideIndex } from "./glide";
import gsap from "gsap";
const cargando = document.getElementById("cargando");
window.onload = function () {
  cargando.classList.add("eliminado");
};

// importo gsap
// // llamo gspa
gsap.from(".logo, ul>li", {
  stagger: 0.1,
  x: 400,
  opacity: 0,
  duration: 1, //1 segundo
});
gsap.from(".punto", {
  stagger: 0.1,
  x: 50,
  opacity: 0,
  duration: 0.6, //1 segundo
});

// cargar api rest
const ulslide = document.querySelector(".glide__slides");

const cargaBanners = () => {
  fetch(
    "http://localhost/icza/api/collections/get/Banners/posts?token=19699268c383fc6d78989e43405c7a",
  )
    .then((res) => {
      return res.json();
    })
    .then((banners) => {
      const losbanners = banners.entries;
      losbanners.forEach((banner) => {
        if(!banner.liga==""){
          const li = `  
          <li class="glide__slide">
          <div class="bandeja">
            <h1>
             ${banner.Texto}
            </h1>
            <a href="${banner.liga}" class="btn">${banner.txt_btn}</a>
          </div>
          <img src="http://localhost/${banner.fondo_banner.path}" alt=" ${banner.Texto}" />
        </li>`;
        ulslide.innerHTML += li;
        }else{
          const li = `  
          <li class="glide__slide">
          <div class="bandeja">
            <h1>
             ${banner.Texto}
            </h1>
          </div>
          <img src="http://localhost/${banner.fondo_banner.path}" alt=" ${banner.Texto}" />
        </li>`;
        ulslide.innerHTML += li;
        }
   
      });
    })
    .then(() => {
      //llamo el carrusel
      slideIndex()
      console.log("2");
    });
};
//cargaBanners();

//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#nav");
    // const anchor = document.querySelector(".anchor");
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    }

    menuIco.addEventListener("click", abrirMenuFull);
    //anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

// insertar iconos de redes sociales
import Icono, { face, insta } from "./iconos";
const faceicono = new Icono("http://facebook.com", "#social", face);
faceicono.construirIcono();
const instaIcono = new Icono("http://instagram.com", "#social", insta);
instaIcono.construirIcono();

//menu efecto al hacer scroll
const body = document.getElementById("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

const WOW = require("wowjs");

window.wow = new WOW.WOW({
  live: false,
});
window.wow.init();
