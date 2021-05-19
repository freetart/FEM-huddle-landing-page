"use strict";

const sidebar = () => {
  const sidebarOpenBtn = document.querySelector(".nav__hamburger--open");
  const sidebarCloseBtn = document.querySelector(".nav__hamburger--close");
  const sidebarEl = document.querySelector(".nav__sidebar");
  const overlay = document.querySelector(".overlay");

  // show sidebar
  sidebarOpenBtn.addEventListener("click", () => {
    sidebarEl.classList.add("show");
    overlay.classList.remove("hidden");
  });

  // close sidebar
  sidebarCloseBtn.addEventListener("click", () => {
    sidebarEl.classList.remove("show");
    overlay.classList.add("hidden");
  });

  // close sidebar via overlay
  overlay.addEventListener("click", () => {
    sidebarEl.classList.remove("show");
    overlay.classList.add("hidden");
  });
};
sidebar();

// preloader
const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();
