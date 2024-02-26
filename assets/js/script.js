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
    e.stopPropagation(); // Prevent closing when clicking inside the widget
});
