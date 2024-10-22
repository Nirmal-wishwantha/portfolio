// Toggle the navigation menu and hamburger icon on click
document.getElementById('nav-icon').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
    this.classList.toggle('active');
});
