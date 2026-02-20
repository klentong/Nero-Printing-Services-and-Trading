// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const seeMore = document.getElementById("seemore");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= GO TO ANOTHER FILE ==============//

seeMore.addEventListener("click", () => {
        window.location.href =  "about.html";
})

// ================= SCROLL FUNCTION =================
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// ================= FADE-IN ANIMATION =================
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            section.classList.add("show");
        }
    });
});

// ================= SERVICES CAROUSEL NAVIGATION =================
document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('.services-carousel .list');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const items = list.querySelectorAll('.item');
    const itemWidth = items[0].offsetWidth + 20; // item width + margin-right

    let currentIndex = 0; // start at first item

    function updateCarousel() {
        list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener('click', function () {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0; // loop back to first
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = items.length - 1; // loop to last
        }
        updateCarousel();
    });
});

