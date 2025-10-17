
// Motor Sports 그리드 이미지 교체

function changeMotorSportsImages() {
  const imgs = document.querySelectorAll('.motor_sports_grid1 li img');

  if (window.innerWidth <= 640) {
    // 640px 이하일 때 적용할 이미지 소스
    const newSrcs = [
      './images/main_mobile/motor_sports_grid1_1.png',
      './images/main_mobile/motor_sports_grid1_2.png',
      './images/main_mobile/motor_sports_grid1_3.png'
    ];
    imgs.forEach((img, index) => {
      if (newSrcs[index]) {
        img.src = newSrcs[index];
      }
    });

  } else if (window.innerWidth <= 1024) {
    // 1024px 이하일 때 적용할 이미지 소스
    const newSrcs = [
      './images/main_tablet/motor_sports_grid1_1.png',
      './images/main_tablet/motor_sports_grid1_2.png',
      './images/main_tablet/motor_sports_grid1_3.png',
      './images/main_tablet/motor_sports_grid1_4.png'
    ];
    imgs.forEach((img, index) => {
      if (newSrcs[index]) {
        img.src = newSrcs[index];
      }
    });

  } else {
    // 큰 화면일 때 원래 이미지 복구
    const originalSrcs = [
      './images/main/motor_sports_grid1_1.png',
      './images/main/motor_sports_grid1_2.png',
      './images/main/motor_sports_grid1_3.png',
      './images/main/motor_sports_grid1_4.png',
      './images/main/motor_sports_grid1_5.png'
    ];
    imgs.forEach((img, index) => {
      if (originalSrcs[index]) {
        img.src = originalSrcs[index];
      }
    });
  }
}

// 최초 실행 + 리사이즈 감지
window.addEventListener('load', changeMotorSportsImages);
window.addEventListener('resize', changeMotorSportsImages);



// 스와이퍼

// PC/태블릿 Swiper
var pcSwiper = new Swiper('.rolling_lab .pc_swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: -20,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.pc_swiper .swiper-pagination',
    clickable: true,
  }
});

// 모바일 Swiper (ex.html 기반)
var mobileSwiper = new Swiper('.rolling_lab .mobile_swiper', {
  autoHeight: true,
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.mobile_swiper .swiper-pagination',
    clickable: true,
  }
});