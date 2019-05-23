// Services 

// used to make a function available once page has loaded

// short form: $(function() {  });


$(document).ready(function() {
// animate on scroll
    new WOW().init();
});

// Work

$(function() {

    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
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


// Stats

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
        // 2 second animation duration
    });
});

// Clients

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
        
    });
});