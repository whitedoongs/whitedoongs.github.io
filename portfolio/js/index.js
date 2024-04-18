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

  //화면 세팅
  const theme = localStorage.getItem('theme'); // dark, light 시스템 테마 설정을 가져옴.
  console.log(theme);
  if(theme) {
      document.documentElement.setAttribute('data-theme', theme);
  }

  // 시스템설정확인 window.matchMedia() :: CSS의 미디어쿼리가 현재 페이지에 해당하는지 확인.
  function toggleTheme() {
    // 저장된 값이 없다면 시스템 설정을 기준으로 한다.
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    // console.log(currentTheme)
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    // console.log(newTheme, currentTheme)

    // 최상위 엘리먼트에 설정, 로컬 스토리지에 설정을 저장.
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }


  const btn = document.querySelector('.btn_setting_toggle');
  btn.addEventListener('click', function() {
      toggleTheme();
  });

});