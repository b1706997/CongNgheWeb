// CONSTRUCTOR
        // jquery
        var head = document.head
        var jQueryScript = document.createElement('script');  
        jQueryScript.setAttribute('src','./jquery-3.5.1.slim.min.js')
        // jQueryScript.setAttribute('crossOrigin','anonymous')
        // jQueryScript.setAttribute('integrity',"sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=")
        head.insertBefore(jQueryScript,head.childNodes[0])
        // boostrap's css
        var css = document.createElement('link')
        css.setAttribute('href','./bootstrap.min.css')
        head.insertBefore(css,head.childNodes[1])
        // bootstrap's js
        var js = document.createElement('script')
        js.setAttribute('src',"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js")
        head.insertBefore(js,head.childNodes[2])
function pageFind() {

}
$(document).ready(function(){
    // GLOBAL
        // HEADER
            // wrap nav from body to hr
    $('h1:first-child').nextUntil('hr').addBack().wrapAll("<nav class='navbar navbar-expand static-top'/>")
    // add class to div inside navbar
    $('nav:first-child div').addClass('navbar-nav ml-auto btn-group')
    $('.navbar-nav a').addClass('btn-primary')
    $('nav:first-child div a').addClass('btn')
    $('body').addClass('container')
        // FOOTER
    $('footer div').addClass('row')
    $('footer .row ul').addClass('btn-group col-6')
    $('footer .row a').addClass('btn text-primary')
    $('footer .row ul').css('list-style-type','none')
    $('footer .row p').addClass('col-6')
    
    // SPECIFIC PAGE
        // *index.html
            // picture create
            if("index.html".localeCompare(document.location.href.match(/[^\/]+$/)[0])==0)
            {
                var carouselInnerDiv = document.createElement('div')
                carouselInnerDiv.className='carousel-inner'
                var pictures = new Array()
                for(i=1;i<=3;i++) {
                    let pictureDiv = document.createElement('div')
                    pictureDiv.className = "carousel-item"
                    pictures[i-1] = document.createElement('img')
                    pictures[i-1].src='img/'+i+'.jpg'
                    pictures[i-1].className="d-block w-100 img-fluid"
                    pictures[i-1].style.height='420px'
                    pictureDiv.appendChild(pictures[i-1])
                    carouselInnerDiv.appendChild(pictureDiv)
                }
                var carouselDiv = document.createElement('div')
                carouselDiv.className="carousel slide w-100 mx-auto"
                carouselDiv.appendChild(carouselInnerDiv)
                $('hr:first').after(carouselDiv)
                // indicator
                $('.carousel-inner').before(`<ol class="carousel-indicators"> <li data-target=".carousel" data-slide-to="0" class="active"></li> <li data-target=".carousel" data-slide-to="1"></li> <li data-target=".carousel" data-slide-to="2"></li> </ol>`)
                // control
                $('.carousel-inner').after(`<a class="carousel-control-prev" href=".carousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href=".carousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>`)
                // make one active
                $('.carousel .carousel-inner .carousel-item:first').addClass('active')
                // ROW
                $('hr:first').nextUntil('hr').not('.carousel').slice(1).prev().wrapAll("<div class='row'/>")
                $('.row div').addClass('col-4 mt-5')
                // JUMBOTRON
                $('.row').next().addClass('jumbotron jumbotron-fluid')
                $('.jumbotron a').addClass('btn btn-primary')
                $('.jumbotron h4').nextUntil('.jumbotron a').addBack().wrapAll("<div class='display-5 ml-3'/>")
                $('.jumbotron a').addClass('float-right mr-5')
            }
    // $('hr:last').prevUntil('h4:last').addClass('jumbotron jumbotron-fluid')
    // // wrap from 4 thr:first-childh div to prev to hr
    // $('div').slice(3).prevUntil('hr').wrapAll("<div class='carousel slide w-75 mx-auto'/>")
    // // carousel inner wrap
    // $('.carousel').wrapInner("<div class='carousel-inner'/>")
    // // make all div inside carousel-item
    // $('.carousel .carousel-inner div').addClass('carousel-item')
    // // format all img inside
    // $('.carousel .carousel-inner img').addClass("d-block w-100")
    // $('.carousel .carousel-inner img').css('height','500px')
    // // wrap caption inside each 
    // $('.carousel .carousel-inner h4').each(function() {
    //     $(this).next('p').addBack().wrapAll("<div class='carousel-caption w-75 d-none d-md-block bg-secondary font-weight-bold'/>")
    // })
    // $('.carousel .carousel-inner .carousel-caption').css('opacity','0.7')
    // // add first active
    // $('.carousel .carousel-inner .carousel-item:last-child').addClass('active')
    // // control button
    console.log(document.location.href.match(/[^\/]+$/)[0])

    // )
})