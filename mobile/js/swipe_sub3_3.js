var swiper1 = new Swiper('.swiper1', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

var swiper2 = new Swiper('.swiper2', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // 각 슬라이드별 그라디언트
      let gradients = [
        'linear-gradient(143deg, rgba(252, 87, 68, 1) 0%, rgba(210, 51, 34, 1) 100%)',
        'linear-gradient(143deg, rgba(255, 179, 107, 1) 0%, rgba(229, 138, 53, 1) 100%)',
        'linear-gradient(143deg, rgba(255, 238, 219, 1) 0%, rgba(250, 225, 193, 1) 100%)',
        'linear-gradient(143deg, rgba(179, 238, 245, 1) 0%, rgba(90, 180, 184, 1) 100%)'
      ];

      let idx = this.activeIndex;
      document.querySelector('.swiper2').style.background = gradients[idx % gradients.length];
    },
  },
});

// 초기 배경 지정
document.querySelector('.swiper2').style.background =
  'linear-gradient(143deg, rgba(252, 87, 68, 1) 0%, rgba(210, 51, 34, 1) 100%)';