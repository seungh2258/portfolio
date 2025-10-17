 var swiper1 = new Swiper('.swiper_1', {
            //autoHeight: true, //각각의 슬라이드 높이는 유동
            slidesPerView:3, //단수
            spaceBetween:0, //단사이 여백(px단위 생략)
            loop:true, //무한 반복
            //freeMode: true, //터치 만큼 자유롭게 이동
            centeredSlides: true, //센터 슬라이드 위치(먄약 단수가 2개이면 양쪽은 반반씩 보임)
            //initialSlide:1, //시작 슬라이드(0~)
            //effect: 'fade', //페이드효과(단수가 1단이 된다)
            //effect:'flip', //3D 회전효과(단수가 1단이 된다)
            navigation: {    //이전/다음 버튼
        nextEl: '.swiper_1_next',
        prevEl: '.swiper_1_prev',
      },
      //pagination: {   //페이지 네이션
        //el: '.swiper_1_pagination',
        //dynamicBullets: true,
        //clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      //},
      //autoplay: {  //자동
       // delay: 3000,
        //disableOnInteraction: false
     // },

     scrollbar: {  //하단 스크롤바
        el: '.swiper-scrollbar',
        //hide: true
      }
        });




 var swiper2 = new Swiper('.swiper_2', {
            //autoHeight: true, //각각의 슬라이드 높이는 유동
            slidesPerView:1, //단수
            spaceBetween:5, //단사이 여백(px단위 생략)
            //loop:true, //무한 반복
            //freeMode: true, //터치 만큼 자유롭게 이동
            centeredSlides: true, //센터 슬라이드 위치(먄약 단수가 2개이면 양쪽은 반반씩 보임)
            //initialSlide:1, //시작 슬라이드(0~)
            effect: 'fade', //페이드효과(단수가 1단이 된다)
            //effect:'flip', //3D 회전효과(단수가 1단이 된다)
            navigation: {    //이전/다음 버튼
        nextEl: '.swiper_2_next',
        prevEl: '.swiper_2_prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper_2_pagination',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
      //autoplay: {  //자동
       // delay: 3000,
        //disableOnInteraction: false
     // },

     //scrollbar: {  //하단 스크롤바
        //el: '.swiper-scrollbar',
        //hide: true
      //}
        });