// for the reviews section in the index.html file
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

//for the prcing section in the index.html file, changing the pricing plan

let monthBtn = document.querySelector('.pricing .toggle-buttons .month-btn');

let yearBtn = document.querySelector('.pricing .toggle-buttons .year-btn');

let monthPlans = document.querySelectorAll('.pricing .box-container .month');

let yearPlans = document.querySelectorAll('.pricing .box-container .year');


yearBtn.onclick = function() {
    monthBtn.classList.remove('active');
    yearBtn.classList.add('active');

    monthPlans.forEach(plans => {plans.style.display = 'none'});
    yearPlans.forEach(plans => {plans.style.display = 'block'});
}

monthBtn.onclick = function() {
    yearBtn.classList.remove('active');
    monthBtn.classList.add('active');

    yearPlans.forEach(plans => {plans.style.display = 'none'});
    monthPlans.forEach(plans => {plans.style.display = 'block'});
}