const menuBtn = document.getElementById("menu_btn");
const menuBckg = document.getElementById("menu_bckg");
const sideMenu = document.getElementById("menu_bar");
const closeBtn = document.getElementById("closeBtn");

function closeMenu() {
  menuBckg.style.transform = "translateX(100%)";
  document.body.style.overflow = "auto";
}

menuBtn.addEventListener("click", () => {
  menuBckg.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

menuBckg.addEventListener("click", closeMenu);
sideMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeBtn.addEventListener("click", closeMenu)
