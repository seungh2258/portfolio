
// @@@@@ N to N 슬라이더 @@@@@
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



    

// @@@@@ HYUNDAI N 슬라이더 @@@@@

var btn = $('button');
var body = $("body");

btn.on("click", function() {
  body.toggleClass("hide-images");
});




// @@@@@ N's Three Core DNAs 슬라이더 @@@@@

document.addEventListener('DOMContentLoaded', () => {
  const upBtn = document.querySelector(".dna_up");
  const downBtn = document.querySelector(".dna_down");
  const sidebar = document.querySelector(".dna_sidebar");
  const container = document.querySelector(".dna_slider");
  const mainSlide = document.querySelector(".dna_main_slide");

  if (!upBtn || !downBtn || !sidebar || !container || !mainSlide) return;

  const slideCount = mainSlide.children.length;
  let activeSlideIndex = 0;

  // ✅ 컨테이너 실제 높이 기준으로 초기 위치 잡기
  let height = container.clientHeight;
  sidebar.style.top = `-${(slideCount - 1) * height}px`;

  function changeSlide(direction) {
    if (direction === "up") {
      activeSlideIndex = (activeSlideIndex + 1) % slideCount;
    } else if (direction === "down") {
      activeSlideIndex = (activeSlideIndex - 1 + slideCount) % slideCount;
    }

    // ✅ 매번 컨테이너 높이 다시 가져오기 (반응형 대응)
    height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  }

  upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide("up");
  });

  downBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide("down");
  });
});



var swiper = new Swiper('.dna_swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.dna_pagination',
        clickable: false,
      },
    });