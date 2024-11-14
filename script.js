let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');
const totalImages = images.length;
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function changeSlide() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    changeSlide();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    changeSlide();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    changeSlide();
}, 3000);


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    changeSlide();
}, 3000);

