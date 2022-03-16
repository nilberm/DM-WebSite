// ----------   Menu Toggle ---------------

const btnMobile = document.querySelector("#btn-mobile");
const btnMenuClick = document.querySelectorAll(".btn-menu-click");

function toggleMenu(event) {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active-menu");
  const active = nav.classList.contains("active-menu");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

function toggleMenuClose() {
  console.log("teste");
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active-menu");
}

btnMobile.addEventListener("click", toggleMenu);
