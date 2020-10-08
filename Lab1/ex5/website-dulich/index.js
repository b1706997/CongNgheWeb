// CONSTRUCTOR
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
jquery.type = 'text/javascript';
jquery.crossOrigin = "anonymous"
var bs = document.createElement('script');
bs.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
bs.type = 'text/javascript';
var bs_css = document.createElement('link')
bs_css.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
bs_css.rel = 'stylesheet'
document.getElementsByTagName('head')[0].insertAdjacentElement('afterbegin',jquery);
jquery.onload  =  function () { document.getElementsByTagName('head')[0].insertAdjacentElement('afterend',bs_css); bs_css.onload = function () { document.getElementsByTagName('head')[0].insertAdjacentElement('afterend',bs); bs.onload = function () {

    $(document).ready(function(){
    // GLOBAL
        // HEADER
        // wrap nav from body to hr
            $('h2:first').addClass('d-flex justify-content-center')
            $('h1:first').nextUntil('hr').addBack().wrapAll("<nav class='navbar navbar-expand static-top'/>")
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
            if("index.html".localeCompare(document.location.href.match(/[^\/]+$/)[0])==0)
            {
                // picture slide
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

            // *about.html
            if("about.html".localeCompare(document.location.href.match(/[^\/]+$/)[0])==0)
            {
                $("hr").eq(1).nextUntil('hr').wrapAll("<div class='row'>")
                $('.row div').addClass('col-6')
                $(".row img").addClass('col-6')
            }
            // *service.html
            if("service.html".localeCompare(document.location.href.match(/[^\/]+$/)[0])==0)
            {
                $('hr').eq(1).nextUntil('hr').wrapAll("<div class='row'>")
                $('.row div').addClass('col-4')
                $('.row').children('div').each(function(){
                    $(this).find('p:first').addClass('border rounded text-center col-12')
                    $(this).find('div').addClass('border rounded col-12 d-flex px-0 flex-column justify-content-around text-center')
                    $(this).find('div p:first').wrap("<div class='border p-0 jumbotron m-0'>")
                    $(this).find('div p:first').addClass('mt-3')
                    $(this).find('div p').addClass('m-3')
                    $(this).find('a').wrap("<div class='border pt-3 pb-3 jumbotron m-0'>")
                    $(this).find('a').addClass('btn btn-primary')
                })
            }
            // *faq
            if("faq.html".localeCompare(document.location.href.match(/[^\/]+$/)[0])==0)
            {
                $('hr').eq(1).nextUntil('hr').wrapAll("<div id='collapseContainer'>")
                let i=0
                $('#collapseContainer').children('div').each(function(){
                    let collapseString
                    let showString
                    i==0 ? collapseString="" : collapseString=" collapsed"
                    i==0 ? showString=" show" : showString=""
                    $(this).addClass('card')
                    $(this).find('p:first').wrap("<button class='btn btn-link"+collapseString+"' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapse"+i+"'/>")
                    $(this).find('button:first').wrap("<div class='card-header pt-2 pb-0' id='heading"+i+"'/>")
                    $(this).find('p:last').wrap("<div id='collapse"+i+"' class='collapse"+showString+"' data-parent='#collapseContainer' aria-labelledby='heading"+i+"'/>")
                    $(this).find('div:last').wrapInner("<div class='card-body'/>")
                    i++
                })
            }
    })
} } }