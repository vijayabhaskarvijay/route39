
/* ================= HERO AUTO BACKGROUND ================= */

const hero = document.querySelector(".hero");

const heroImages = [
    "image\bg1.jpg",
    "image\bg2.jpg"
];

let currentIndex = 0;

function changeHeroBackground() {
    hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % heroImages.length;
}

// Initial image
changeHeroBackground();

// Change every 5 seconds
setInterval(changeHeroBackground, 5000);
