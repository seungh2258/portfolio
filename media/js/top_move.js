//상단 top 이동 코드
$('.top_move').click(function(e){
   e.preventDefault();

   $('html,body').stop().animate({'scrollTop':0}, 1000); //상단으로 부드럽게 스크롤을 이동
});

$(window).on('scroll', function(){ //스크롤 위치의 변화가 생기면..
   var scroll = $(window).scrollTop(); //스크롤탑의 위치를 변수에 담는다
   var visual_height = $('.visual').height();
   //console.log(scroll);
   if(scroll>920){
      $('.top_move').fadeIn('slow');
   }else{
      $('.top_move').fadeOut('fast');
   }
});