let slides = document.querySelectorAll('.reviews .flex .slide-container .slide');

let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}


function prevSlide() {
    slides[currentSlide].classList.remove('active');    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}