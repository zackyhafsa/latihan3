const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const navbarNav = document.getElementById("navbar-nav");

menu.addEventListener("click", () => {
  navbar.classList.toggle("max-md:top-full");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbar.classList.remove("max-md:top-full");
  }
});

