$(document).ready(function() {
    // add class on hamburger menu click
    $(".toggle-btn").click(function() {
        $(this).toggleClass('active');
        $('.navbar-nav').toggleClass('active');
    })
})