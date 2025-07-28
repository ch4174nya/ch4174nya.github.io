// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found!');
        return;
    }
    console.log('Theme toggle button found and event listener attached.');
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    // Check if user has previously chosen a theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else if (prefersDarkScheme.matches) {
        // If no saved preference, but OS prefers dark mode
        document.body.classList.add('dark-mode');
    }
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        // Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        console.log('Theme toggled:', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
});
