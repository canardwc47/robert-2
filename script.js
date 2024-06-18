function toggler(){
    const icon = document.querySelector('#toggler');
    const menu = document.querySelector('.menu');
    if(icon.innerHTML == "menu"){
        icon.innerHTML = "close";
        menu.style.display = "block";
    }
    else{
        icon.innerHTML = "menu";
        menu.style.display = "none";
    }
}


const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentSlide = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);
carousel.addEventListener('mousemove', drag);

carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('touchmove', drag);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel(index);
    });
});

function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
}

function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentSlide < indicators.length - 1) {
        currentSlide += 1;
    }
    if (movedBy > 100 && currentSlide > 0) {
        currentSlide -= 1;
    }
    updateCarousel(currentSlide);
}

function drag(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) {
        requestAnimationFrame(animation);
    }
}

function setSliderPosition() {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function updateCarousel(index) {
    currentTranslate = -index * 300; // Change 300 to the width of your carousel items if different
    prevTranslate = currentTranslate;
    setSliderPosition();

    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
