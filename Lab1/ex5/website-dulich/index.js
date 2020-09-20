$(document).ready(function(){
    // GLOBAL
        // HEADER
            // wrap nav from body to hr
    $('h1:first-child').nextUntil('hr').addBack().wrapAll("<nav class='navbar navbar-expand static-top'/>")
    // add class to div inside navbar
    $('nav:first-child div').addClass('navbar-nav ml-auto btn-group')
    $('nav:first-child div a').addClass('btn')

    // index.html ONLY
        // BODY - CAROUSAL SLIDE
    // wrap from 4 th div to prev to hr
    $('div').slice(3).prevUntil('hr').wrapAll("<div class='carousel slide w-50 mx-auto'/>")
    // carousel inner wrap
    $('.carousel').wrapInner("<div class='carousel-inner'/>")
    // make all div inside carousel-item
    $('.carousel .carousel-inner div').addClass('carousel-item')
    // format all img inside
    $('.carousel .carousel-inner img').addClass("d-block w-100")
    $('.carousel .carousel-inner img').css('height','500px')
    // wrap caption inside each 
    $('.carousel .carousel-inner h4').each(function() {
        $(this).next('p').addBack().wrapAll("<div class='carousel-caption w-75 d-none d-md-block bg-secondary font-weight-bold'/>")
    })
    $('.carousel .carousel-inner .carousel-caption').css('opacity','0.7')
    // add first active
    $('.carousel .carousel-inner .carousel-item:last-child').addClass('active')
    // control button
    $('.carousel').append(`<a class="carousel-control-prev" href=".carousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href=".carousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>`)
    // console.log(document.location.href.match(/[^\/]+$/)[0]

    // )
})