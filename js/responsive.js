const navbar = document.querySelector("#navbar-container");
const menu = document.querySelector("#navbar-menu");
export function responsive() {
    menu.addEventListener("click", () => navbar.classList.toggle("active"));
}
