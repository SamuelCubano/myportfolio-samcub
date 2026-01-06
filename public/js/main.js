// NAV - MENÚ HAMBURGUESA
const body = document.body;
const toggle = document.querySelector(".nav__toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeTriggers = document.querySelectorAll("[data-close-menu]");

function setMenu(open) {
  if (!toggle || !mobileMenu) return;
  body.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

if (toggle && mobileMenu) {
  let isOpen = false;

  toggle.addEventListener("click", () => {
    isOpen = !isOpen;
    setMenu(isOpen);
  });

  closeTriggers.forEach((el) => {
    el.addEventListener("click", () => {
      isOpen = false;
      setMenu(false);
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      isOpen = false;
      setMenu(false);
    }
  });
}
