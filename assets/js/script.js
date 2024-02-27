// Extension widget js
const extensionIcon = document.querySelector('.extension-icon');
const extensionWidget = document.querySelector('.extension-widget');


extensionIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    extensionWidget.classList.toggle('visible');
    extensionIcon.style.display = 'none';
});

document.body.addEventListener('click', () => {
    if (extensionWidget.classList.contains('visible')) {
        extensionWidget.classList.remove('visible');
        extensionIcon.style.display = 'block';
    }
});

extensionWidget.addEventListener('click', (e) => {
    e.stopPropagation();
});

// 3D title effect js

const tiltContainer = document.querySelector('.tilt-container');

tiltContainer.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    tiltContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

tiltContainer.addEventListener('mouseleave', () => {
    tiltContainer.style.transition = 'transform 1s ease-in-out';
    tiltContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

tiltContainer.addEventListener('mouseenter', () => {
    tiltContainer.style.transition = 'none';
});

