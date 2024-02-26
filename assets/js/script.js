const extensionIcon = document.querySelector('.extension-icon');
const extensionWidget = document.querySelector('.extension-widget');

extensionWidget.style.display = 'none';

extensionIcon.addEventListener('click', () => {
        
        extensionWidget.style.display = 'block';
});

document.body.addEventListener('click', () => {
    extensionWidget.style.display = 'none';
})