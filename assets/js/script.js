const extensionIcon = document.querySelector('.extension-icon');
const extensionWidget = document.querySelector('.extension-widget');

extensionWidget.style.display = 'none';

extensionIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        if(extensionWidget.style.display === 'none') {
            extensionWidget.style.display = 'block';
            extensionIcon.style.display = 'none'
        }else {
            extensionWidget.style.display = 'none'
            extensionIcon.style.display = 'block';
        }
});

document.body.addEventListener('click', () => {
    extensionWidget.style.display = 'none';
    extensionIcon.style.display = 'block';
})

extensionWidget.addEventListener('click', (e) => {
    e.stopPropagation();
})