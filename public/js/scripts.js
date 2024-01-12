/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



var k = 1;

function toggleMore(){
    const vh = document.documentElement.clientWidth;
    console.log(vh);
    if(k==1){
        document.getElementById("toggleButton").setAttribute('data-bs-target', ".collapsible2");
        document.getElementById("toggleButton").setAttribute('aria-expanded', 'true');
        k++;
        
        scrollToSec('scrollTo1', 200);
        
    }else{
        if(k==2 && document.getElementById("toggleButton").getAttribute('aria-expanded')=="true"){
            if(vh<1000){
                const element = document.getElementById("toggleButton");
                element.remove();
            }else{
                document.getElementById("toggleButton").innerHTML = "HIDE";
                k++;
            
                scrollToSec('scrollTo2', 200);;
            }
        }else{
        if(k==3 && document.getElementById("toggleButton").getAttribute('aria-expanded')=="false"){
                document.getElementById("toggleButton").setAttribute('data-bs-target', ".collapsible");
                document.getElementById("toggleButton").setAttribute('aria-expanded', 'false');
                k++;
                document.getElementById("toggleButton").innerHTML = "HIDE";
                scrollToSec('scrollTo1', 200);
            
        }else{
            
            if(k==4 && document.getElementById("toggleButton").getAttribute('aria-expanded')=="false" && vh>1000){
                k=1;
                document.getElementById("toggleButton").innerHTML = "MORE";
                    scrollToSec('portfolio', 50);
                
            }}
        }
    }
}


function scrollToSec(section, int){
    var targetElement = $('#'+section);
    $('html, body').stop().animate({
        scrollTop: (targetElement.offset().top - int)
    }, 550, 'easeInOutExpo');
}

$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});