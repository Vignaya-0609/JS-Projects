document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.btn i');

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
