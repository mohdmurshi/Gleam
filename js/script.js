function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach an event listener to the 'About' link
document.querySelector('nav a[href="#hero"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of jumping to the section
    smoothScroll(this.getAttribute('href')); // Call smoothScroll function
});
document.querySelector('nav a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of jumping to the section
    smoothScroll(this.getAttribute('href')); // Call smoothScroll function
});
document.querySelector('nav a[href="#whatwedo"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of jumping to the section
    smoothScroll(this.getAttribute('href')); // Call smoothScroll function
});
document.querySelector('nav a[href="#portfolio"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of jumping to the section
    smoothScroll(this.getAttribute('href')); // Call smoothScroll function
});
document.querySelector('nav a[href="#contact"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior of jumping to the section
    smoothScroll(this.getAttribute('href')); // Call smoothScroll function
});

$('.navbar-nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});