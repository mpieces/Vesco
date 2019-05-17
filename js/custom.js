// Services 

// used to make a function available once page has loaded

// short form: $(function() {  });


$(document).ready(function() {
// animate on scroll
    new WOW().init();
});


// Team

$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
        
    });
});


// Testimonials

$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
        
    });
});