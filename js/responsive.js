const navbar = document.querySelector("#navbar-container");
const menu = document.querySelector("#navbar-menu");
const navbarLinks = document.querySelectorAll("#navbar-container a");
export function responsive() {
    menu.addEventListener("click", () => navbar.classList.toggle("active"));
    navbarLinks.forEach((link) => link.addEventListener("click", () => navbar.classList.remove("active")));
}
