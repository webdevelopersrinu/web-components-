let showNav = document.getElementById("mobile-menu-show");
let hiddenNav = document.getElementById("mobile-menu-close");
let mobileMenu = document.getElementById("mobile-menu");
showNav.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

hiddenNav.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
