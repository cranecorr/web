$(function () {
  
  $('.slider').slick({
    arrows: false,
    autoplay: 2000,
    dots: true,
  });

  // $('.slider').mousewheel(function (e) {
  //   e.preventDefault();

  //   if (e.deltaY < 0) {
  //     $(this).slick('slickNext');
  //   } else {
  //     $(this).slick('slickPrev');
  //   }
  // });

});