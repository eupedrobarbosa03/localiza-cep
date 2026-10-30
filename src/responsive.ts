const navbar = document.querySelector("#navbar-container") as HTMLDivElement;
const menu = document.querySelector("#navbar-menu") as HTMLDivElement;
const navbarLinks = document.querySelectorAll<HTMLLinkElement>("#navbar-container a");

export function responsive() {
    menu.addEventListener("click", () => navbar.classList.toggle("active"));
    navbarLinks.forEach((link) => link.addEventListener("click", () => navbar.classList.remove("active")))
}