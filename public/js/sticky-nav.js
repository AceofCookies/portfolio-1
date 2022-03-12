
let nav;

function updateMenuStickyness() {
  if (window.innerWidth > 992) {
    nav.classList.remove("sticky");
    return;
  }

  if (window.scrollY > nav.parentElement.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  nav = document.querySelector("nav");

  window.addEventListener("scroll", _.throttle(updateMenuStickyness, 16.66));
  window.addEventListener("resize", _.throttle(updateMenuStickyness, 100));
});
