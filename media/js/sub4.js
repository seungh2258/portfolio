// 슬라이더
var swiper = new Swiper('.center_swiper', {
      autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView:1,  //단수 (breakpoints: 의 포인트는 먼저 초기값을 모바일로 두어야 한다.640보다 작을 때)
      spaceBetween: 20,  //단사이 여백
      scrollbar: {
        el: '.center_scrollbar',
        hide: false,
      },
      breakpoints:{
        640 : {   //브라우저가 640이상
          slidesPerView: 1.5
        },
        768 : {   //브라우저가 768이상
          slidesPerView: 2.5
        },
        1024 : {  //브라우저가 1024이상
          slidesPerView: 3.5
        },
        1280 : {  //브라우저가 1280이상
          slidesPerView: 4.5
        }
      }
    });