export function scrollAnimation() {
    const elements = document.querySelectorAll<HTMLDivElement>(".hidden");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } else {
                entry.target.classList.remove("show")
            }
        })
    });

    elements.forEach((element) => observer.observe(element));
};