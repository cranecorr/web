$(function () {
  $('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: 2000,
    verticalSwiping: true,
    // responsive:
  });
  
  $('.header-slider').mousewheel(function(e) {
    e.preventDefault();
  
    if (e.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  })


  
});