const selector = document.getElementById('theme-selector');
const themeLink = document.getElementById('theme-link');

function switchTheme(themeName) {
    const themeScssPath = `/src/scss/theme-${themeName}.scss`;
    
    themeLink.href = themeScssPath;
}

if (selector) {
    selector.value = 'default';
}

selector.addEventListener('change', (event) => {

    switchTheme(event.target.value);
});
