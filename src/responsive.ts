const navbar = document.querySelector("#navbar-container") as HTMLDivElement;
const menu = document.querySelector("#navbar-menu") as HTMLDivElement;

export function responsive() {
    menu.addEventListener("click", () => navbar.classList.toggle("active"));
}