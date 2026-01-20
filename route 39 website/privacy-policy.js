document.addEventListener("DOMContentLoaded", () => {

    /* Scroll to Top Button */
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑";
    scrollBtn.className = "scroll-top-btn";
    scrollBtn.title = "Scroll to top";
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    /* Section Highlight on Scroll */
    const sections = document.querySelectorAll(".policy-container section");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section;
            }
        });

        sections.forEach(section => section.classList.remove("active"));
        if (currentSection) {
            currentSection.classList.add("active");
        }
    });

});
