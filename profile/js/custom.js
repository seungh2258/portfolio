$(document).ready(function(){

  //변수 ht에 브라우저의 높이값을 저장
  var ht = $(window).height();	
  //브라우저의 높이값을 section의 높이값으로 지정
  $("section").height(ht);
  //$("section").css('height',ht);
  
  //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
  $(window).on("resize",function(){
    ht = $(window).height();	
    $("section").height(ht);

    // 리사이즈 직후 현재 섹션 기준으로 상단 타이틀 재동기화 (깜빡임 없이)
    var idx = getIndexByScroll();
    setMenuOnByIndex(idx);
    showTopTitle(idx);
  });

  /* -------------------- (추가) 상단 타이틀 전환 상태/헬퍼 -------------------- */
  var currentTitleIdx = 0;

  // 초기: Home만 보이게 (확실히 hide 후 show)
  $(".top_title li").hide().removeClass("active").eq(0).show().addClass("active");

  function showTopTitle(index){
    if(index === currentTitleIdx) return;
    var $items = $(".top_title li");
    $items.filter(".active").stop(true,true).fadeOut(200, function(){
      $(this).removeClass("active");
      $items.eq(index).stop(true,true).hide().addClass("active").fadeIn(350);
    });
    currentTitleIdx = index;
  }

  // 현재 스크롤 기준으로 보이는 섹션 인덱스(화면 중앙 기준)
  function getIndexByScroll(){
    var scrollY = $(window).scrollTop();
    var centerY = scrollY + $(window).height() * 0.5;
    var bestIdx = 0, bestDist = Infinity;
    $("#section_wrap > section").each(function(i){
      var top = $(this).offset().top;
      var dist = Math.abs(centerY - top);
      if(dist < bestDist){ bestDist = dist; bestIdx = i; }
    });
    return bestIdx;
  }

  // 메뉴 on 하이라이트 동기화 (앞의 두 li는 버튼/프로필)
  function setMenuOnByIndex(i){
    $("#menu li:not(:nth-child(1), :nth-child(2))").removeClass("on");
    $("#menu li").eq(i + 2).addClass("on");
  }
  /* ----------------------------------------------------------------------- */

  // 메뉴 버튼 클릭 시 (첫 번째, 두 번째 <li> 건너뛰기)
  $("#menu li:not(:nth-child(1), :nth-child(2))").on("click", function (e) {
    e.preventDefault();
    var ht = $(window).height();
    var i = $(this).index() - 2; // 프로필 제외
    if (i < 0) return;

    var nowTop = i * ht;
    $("html,body").stop().animate({ scrollTop: nowTop }, 1400);

    // 클릭 시 활성화도 즉시 반영
    setMenuOnByIndex(i);

    // (추가) 클릭으로 바뀐 섹션에 맞춰 상단 타이틀도 페이드 전환
    showTopTitle(i);
  });
  
  $(window).on("scroll", function () {
    var ht = $(window).height();
    var scroll = $(window).scrollTop();
    var sCount = $("section").length;  // 섹션 개수 자동 인식

    for (var i = 0; i < sCount; i++) {
      if (scroll >= ht * i && scroll < ht * (i + 1)) {
        // 프로필 li(첫 번째)는 제외하고 'on'만 지움
        $("#menu li:not(:nth-child(1), :nth-child(2))").removeClass("on");
        // 실제 활성화는 (i번째 섹션) -> (i+1번째 li) 에 부여
        $("#menu li").eq(i + 2).addClass("on");

        // (추가) 스크롤로 바뀐 섹션에 맞춰 상단 타이틀도 페이드 전환
        showTopTitle(i);
      }
    }
  });
  
  //section위에서 마우스 휠을 움직이면
  $("section").on("mousewheel",function(event, delta){    
    var ind = $(this).index(); // 0 1 2 3
    var cnt = $("section").size()-1; //3
    //console.log(cnt);
    console.log(delta);
    //위로휠(+1) , 아래로휠(-1)
    //마우스 휠을 올렸을때	
    if (delta == 1 && ind!=0) { //+1 
      //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
      var prev = $(this).prev().offset().top;
      //문서 전체를 prev에 저장된 위치로 이동
      $("html,body").stop().animate({"scrollTop":prev},'slow');
      return false;
    //마우스 휠을 내렸을때	 
    }else if (delta == -1 && ind!=cnt) {  //-1
      //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
      var next = $(this).next().offset().top;
      //문서 전체를 next에 저장된 위치로 이동
      $("html,body").stop().animate({"scrollTop":next},'slow');   
      return false;                                      
    }
  });
  

  /* ---- Spotlight 타이밍: 로드 +4s 등장 → +2s 성장 ---- */
(function(){
  var spotlight = document.querySelector('#section_wrap section:nth-of-type(1) .spotlight');
  if (!spotlight) return;

  // 4초 뒤: 페이드인 등장
  setTimeout(function(){
    spotlight.classList.add('is-visible');

    // 등장 2초 후: 세로로 길어짐
    setTimeout(function(){
      spotlight.classList.add('grow');
    }, 2000);
  }, 4000);
})();

/* ---- Home Alert 등장 효과 ---- */
(function(){
  const alerts = document.querySelectorAll('#section_wrap section:nth-of-type(1) .home_alert');
  if (!alerts.length) return;

  // 5초 뒤부터 순차적으로 등장
  alerts.forEach((alert, index) => {
    setTimeout(() => {
      alert.classList.add('is-visible');
    }, 7500 + index * 400); // 각 alert 간 약간의 간격
  });
})();


});



  /* ----------------------------------------------------------------------- */



const hello = document.querySelector(".hello__div");
setInterval(hello__function, 20000);
function hello__function() {
  hello.style.display = "none";
  setTimeout(function () {
    hello.style.display = "flex";
  }, 10);
}




