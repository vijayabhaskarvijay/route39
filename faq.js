document.querySelectorAll(".faq-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
        const item = trigger.parentElement;
        const content = item.querySelector(".faq-content");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
