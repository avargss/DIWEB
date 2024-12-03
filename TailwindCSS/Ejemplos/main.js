const darkModeInput = document.querySelector('#darkmode');
darkModeInput.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark'); /* Añade o quita la clase dark */
})