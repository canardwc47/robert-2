function toggler() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Variables pour le Carrousel 1
let currentIndex1 = 0;
const prev1 = document.querySelector('.carousel1 .prev1');
const next1 = document.querySelector('.carousel1 .next1');
const carouselSlide1 = document.querySelector('.carousel1 .carousel-slide1');

function showSlide1(index) {
    const totalSlides = carouselSlide1.children.length;
    if (index >= totalSlides) {
        currentIndex1 = 0;
    } else if (index < 0) {
        currentIndex1 = totalSlides - 1;
    } else {
        currentIndex1 = index;
    }
    carouselSlide1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

function nextSlide1() {
    showSlide1(currentIndex1 + 1);
}

function prevSlide1() {
    showSlide1(currentIndex1 - 1);
}

// Variables pour le Carrousel 2
let currentIndex2 = 0;
const prev2 = document.querySelector('.carousel2 .prev2');
const next2 = document.querySelector('.carousel2 .next2');
const carouselSlide2 = document.querySelector('.carousel2 .carousel-slide2');

function showSlide2(index) {
    const totalSlides = carouselSlide2.children.length;
    if (index >= totalSlides) {
        currentIndex2 = 0;
    } else if (index < 0) {
        currentIndex2 = totalSlides - 1;
    } else {
        currentIndex2 = index;
    }
    carouselSlide2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

function nextSlide2() {
    showSlide2(currentIndex2 + 1);
}

function prevSlide2() {
    showSlide2(currentIndex2 - 1);
}

// Variables pour le Carrousel de logos
let currentIndexLogo = 0;
const prevLogo = document.querySelector('.carousel-logo .prevLogo');
const nextLogo = document.querySelector('.carousel-logo .nextLogo');
const carouselSlideLogo = document.querySelector('.carousel-logo .carousel-logo-slide');

function showSlideLogo(index) {
    const totalSlides = carouselSlideLogo.children.length;
    if (index >= totalSlides) {
        currentIndexLogo = 0;
    } else if (index < 0) {
        currentIndexLogo = totalSlides - 1;
    } else {
        currentIndexLogo = index;
    }
    carouselSlideLogo.style.transform = `translateX(-${currentIndexLogo * (100 / getVisibleItemsLogo())}%)`;
}

function nextSlideLogo() {
    showSlideLogo(currentIndexLogo + 1);
}

function prevSlideLogo() {
    showSlideLogo(currentIndexLogo - 1);
}

function getVisibleItemsLogo() {
    if (window.innerWidth <= 480) {
        return 3; // 3 logos sur les petits écrans
    } else if (window.innerWidth <= 768) {
        return 3; // 3 logos sur les écrans moyens
    } else {
        return 6; // 6 logos sur les grands écrans
    }
}

// Écouteurs d'événements pour les boutons précédent et suivant des carrousels
prev1.addEventListener('click', () => {
    prevSlide1();
});

next1.addEventListener('click', () => {
    nextSlide1();
});

prev2.addEventListener('click', () => {
    prevSlide2();
});

next2.addEventListener('click', () => {
    nextSlide2();
});

prevLogo.addEventListener('click', () => {
    prevSlideLogo();
});

nextLogo.addEventListener('click', () => {
    nextSlideLogo();
});

// Réajuster le défilement lors du redimensionnement de la fenêtre pour le Carrousel de logos
window.addEventListener('resize', () => {
    showSlideLogo(currentIndexLogo);
});

document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.classList.contains('active')) {
                panel.classList.remove('active'); // Retire la classe active pour cacher le panneau
            } else {
                panel.classList.add('active'); // Ajoute la classe active pour afficher le panneau
            }
        });
    }
});






