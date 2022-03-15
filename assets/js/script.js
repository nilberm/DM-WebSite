// ----------   Menu Toggle ---------------

const btnMobile = document.querySelector("#btn-mobile");

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

btnMobile.addEventListener("click", toggleMenu);
