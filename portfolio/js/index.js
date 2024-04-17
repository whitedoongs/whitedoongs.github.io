$(document).ready(function(){
  let SwiperTop = new Swiper('.swiper_top, .swiper_btm', {
    spaceBetween: 0,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true, 
    slidesPerView:'auto',
    slidesPerGroup : 1,
    autoHeight : true,
    allowTouchMove: false,
  });

  let SwiperMiddle = new Swiper('.swiper_mid', {
    spaceBetween: 0,
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true, 
    slidesPerView:'auto',
    slidesPerGroup : 1,
    autoHeight : true,
    allowTouchMove: false,
  });

  //navi
  $('#nav ul li').click(function () {
    var idx = $(this).index() + 1;
    $('html, body').stop().animate({
      scrollTop: $('[data-content="sec0' + idx + '"]').offset().top - 100
    }, 800);
  });
});