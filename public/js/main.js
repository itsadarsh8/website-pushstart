$(document).ready(function(){
    $('.sidenav').sidenav({
        draggable: true,
        preventScrolling: true
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
  });



  