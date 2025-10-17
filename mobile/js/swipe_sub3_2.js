var swiper1 = new Swiper('.swiper1', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    });



var swiper2 = new Swiper('.swiper2', {
      autoHeight: true, //enable auto height
      spaceBetween: 20,
      pagination: {
        el: '.swiper2-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });




var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3.5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });