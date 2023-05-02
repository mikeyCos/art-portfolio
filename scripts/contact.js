let currentPage = window.location.pathname;
let navLinks = document.querySelectorAll('.nav-items a');
navLinks.forEach(function(link) {
    if (currentPage === link.pathname) {
        link.setAttribute('class', 'active');
    }
});