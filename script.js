document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".reveal");
    const revealItems = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((el) => observer.observe(el));

    // Efeito escalonado (stagger)
    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

});
