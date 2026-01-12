document.addEventListener('DOMContentLoaded', () => {

    /* ================= NAVBAR SCROLL ================= */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ================= MOBILE MENU ================= */
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            // Toggle icon
            const icon = toggle.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    /* ================= SCROLL ANIMATIONS ================= */
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    /* ================= FORMS & FEEDBACK ================= */
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerText;

            // Loading State
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
            btn.disabled = true;

            setTimeout(() => {
                showToast('Booking submitted successfully! We will call you shortly.');
                bookingForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    const driverForm = document.getElementById('driverForm');

    if (driverForm) {
        driverForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = driverForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Registering...';
            btn.disabled = true;

            setTimeout(() => {
                showToast('Registration successful! Welcome to Route 39.');
                driverForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Custom Toast Notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;

        // Add toast styles dynamically if not present
        if (!document.getElementById('toast-style')) {
            const style = document.createElement('style');
            style.id = 'toast-style';
            style.innerHTML = `
                .toast-notification {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%) translateY(100px);
                    background: #333;
                    color: #fff;
                    padding: 12px 24px;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    opacity: 0;
                    transition: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                    z-index: 10000;
                    font-weight: 500;
                }
                .toast-notification.show {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
                .toast-notification i { color: #4ade80; }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);

        // Remove after 3s
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    /* ================= SCROLL TO SECTION ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    toggle.querySelector('i').classList.remove('fa-times');
                    toggle.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });

    /* ================= BACKGROUND ROTATION ================= */
    const hero = document.getElementById('hero');
    const heroImages = ["image/bg1.jpg", "image/bg2.jpg"];
    // Ensure these images exist or fallback gracefully

    if (hero && heroImages.length > 0) {
        let currentIndex = 0;
        // Preload images
        heroImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % heroImages.length;
            hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
        }, 5000);

        // Set initial
        hero.style.backgroundImage = `url('${heroImages[0]}')`;
    }
});
