import mixitup from "mixitup";
import ScrollReveal from "scrollreveal";
import Swiper, { Pagination } from "swiper";
import "swiper/css/bundle";

/* ==================== Loading ==================== */
const loaderContainer = document.getElementById("loader-container");
const main = document.getElementById("main");
window.addEventListener("load", function () {
  setInterval(function () {
    loaderContainer.classList.remove("active__loader");
    main.classList.remove("remove__main");
  }, loaderContainer.dataset.second * 1000 + 100);
});
/* ========================== Hamburger Menu ===================*/
const hamburgerMenus = document.querySelectorAll(".hamburger__menu");
const navMenu = document.getElementById("nav-menu");
hamburgerMenus.forEach((hamburgerMenu) => {
  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active__nav");
  });
});
/* ======================== Nav link click ======================== */
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((nl) => {
  nl.addEventListener("click", () => {
    if (navMenu.classList.contains("active__nav")) {
      navMenu.classList.remove("active__nav");
    }
  });
});
/* ==================================== Nav Active Links ======================= */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight
      ? sectionsClass.classList.add("active__link")
      : sectionsClass.classList.remove("active__link");
  });
}
window.addEventListener("scroll", scrollActive);
/* ========================= Header Background on scroll =========================== */
function scrollHandle() {
  const header = document.getElementById("header");
  window.scrollY >= 250
    ? header.classList.add("active__header")
    : header.classList.remove("active__header");
}
window.addEventListener("scroll", scrollHandle);
/* ============================== Mixitup filter ============================= */
let mixerProject = mixitup(".project__card-container", {
  selectors: {
    target: ".project__card",
  },
  animation: {
    duration: 400,
  },
});
const projectLink = document.querySelectorAll(".project__filter-item");
function activeProject() {
  projectLink.forEach((item) => {
    item.classList.remove("active__project");
  });
  this.classList.add("active__project");
}
projectLink.forEach((item) => {
  item.addEventListener("click", activeProject);
});
/* ================================ Testimonial Swipper js ================================== */
let testimonialSwiper = new Swiper(".testimonialSwiper", {
  modules: [Pagination],
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    800: {
      slidesPerView: 1,
      grabCursor: true,
    },
    1140: {
      slidesPerView: 1,
      spaceBetween: 65,
      grabCursor: true,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* ==================== scroll top ================= */
const scrollUp = document.getElementById("scroll-up");
const scrollShow = () => {
  scrollY >= 350
    ? scrollUp.classList.add("show__scroll")
    : scrollUp.classList.remove("show__scroll");
};
window.addEventListener("scroll", scrollShow);
scrollUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
/* ================================== Footer Date =========================== */
const footerDate = document.getElementById("footer-year");
const date = new Date();
footerDate.innerHTML = "&copy;" + date.getFullYear();
footerDate.setAttribute("data-year", date.getFullYear());
/* =========================== Theme Toggler ================================== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark__mode";
const iconTheme = "bx-sun";
// Validate if theme object already in loaclstorge
if (!localStorage.getItem("theme")) {
  localStorage.setItem(
    "theme",
    JSON.stringify({ mode: "light", icon: "bx bx-moon" })
  );
}
// get theme from localstorage
const { mode, icon } = JSON.parse(localStorage.getItem("theme"));
// get current theme
const getCurrntMode = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-sun" : "bx bx-moon";
document.body.classList[mode === "dark" ? "add" : "remove"](darkTheme);
themeButton.classList[icon === "bx bx-sun" ? "add" : "remove"](iconTheme);
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem(
    "theme",
    JSON.stringify({ mode: getCurrntMode(), icon: getCurrentIcon() })
  );
});
/* ============================== scroll reveal ================================ */
const sr = new ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 800,
  delay: 500,
});
sr.reveal(".home__handler");
sr.reveal(".home__subtitle", { origin: "left" });
sr.reveal(".section__title", { delay: 700 });
sr.reveal(".home__discription", {
  delay: 300,
});
sr.reveal(".home__info-list", {
  delay: 300,
});
sr.reveal(".about__description", {
  delay: 300,
});
sr.reveal(".project__description", {
  delay: 300,
});
sr.reveal(".resume__description", {
  delay: 300,
});
sr.reveal(".pricing__description", {
  delay: 300,
});
sr.reveal(".blog__description", {
  delay: 300,
});
sr.reveal(".client__description", {
  delay: 300,
});
sr.reveal(".home__info-list", { delay: 700 });
sr.reveal(".client__name", { delay: 700 });
sr.reveal(".contact__info", { delay: 700 });
sr.reveal(".btn", { delay: 300 });
sr.reveal(".contact__from", { delay: 700 });
sr.reveal(".resume__services", { delay: 300 });
sr.reveal(".resume__education", { delay: 300 });
sr.reveal(".resume__award", { delay: 300 });
sr.reveal(".resume__exp", { delay: 300 });
sr.reveal(".project__card", { delay: 600 });
sr.reveal(".pricing__card", { delay: 600 });
sr.reveal(".blog__card", { delay: 600 });
