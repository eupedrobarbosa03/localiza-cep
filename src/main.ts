import { applicationLocalizaCEP } from "./app.js";
import { flagsDOM } from "./flags.js";
import { responsive } from "./responsive.js";
import { scrollAnimation } from "./scroll-animation.js";
import { animation } from "./text-animation.js";


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("show");
        animation();
        scrollAnimation();
        flagsDOM();
        responsive();
        applicationLocalizaCEP();
    }, 500);
});