document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Booking Form
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Booking submitted successfully!');
        form.reset();
    });

    // Audience Buttons
    document.querySelectorAll('.audience-card button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.booking-card').scrollIntoView({ behavior: 'smooth' });
        });
    });

});
// Scroll to Driver Registration Form
const joinDriverBtn = document.querySelector('.audience-card.dark button');
const driverSection = document.getElementById('driver-register');

if (joinDriverBtn && driverSection) {
    joinDriverBtn.addEventListener('click', () => {
        driverSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Driver Form Submission
const driverForm = document.getElementById('driverForm');

if (driverForm) {
    driverForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = driverName.value.trim();
        const phone = driverPhone.value.trim();
        const city = driverCity.value.trim();
        const vehicle = vehicleType.value;
        const license = licenseNumber.value.trim();

        if (!name || !phone || !city || !vehicle || !license) {
            alert('Please fill all fields');
            return;
        }

        alert(
            `Driver Registered Successfully!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `City: ${city}\n` +
            `Vehicle: ${vehicle}\n\n` +
            `Our team will contact you soon.`
        );

        driverForm.reset();
    });
}
// Optional: Dynamic WhatsApp message
const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
    const message = encodeURIComponent(
        'Hi Route 39, I would like to book a ride. Please assist me.'
    );
    const phoneNumber = '9626593939'; // change if needed

    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
}
