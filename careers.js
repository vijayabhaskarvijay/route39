document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".apply-btn");
    const roleInput = document.getElementById("role");
    const form = document.getElementById("careerForm");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            roleInput.value = btn.dataset.role;
            document.getElementById("apply").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your application has been submitted. Our team will contact you soon.");
        form.reset();
    });

});
