$('.tabs div:eq(0)').show();  //첫번째 탭내용 열어라

$('.select_btn').click(function(e){ //탭메뉴 클릭 시
   e.preventDefault();
   $('.select ul').fadeIn('slow');  //탭서브메뉴를 열어라
});

$('.select ul li a').click(function(e){  //탭서브메뉴 클릭 시
   e.preventDefault();
   var txt = $(this).text(); //탭 서브메뉴의 텍스트를 추출
   var ind = $(this).parent().index();  //클릭한 li의 인덱스 추출 (더미 제외)
   
   console.log('선택된 텍스트:', txt);
   console.log('인덱스:', ind);
   
   $('.select_btn strong').text(txt);  //탭메뉴의 텍스트를 바꾸어라
   $('.select ul').fadeOut('fast'); //탭서브메뉴를 닫아라

   $('.tabs .tabs_inner').hide();           //모든 탭 내용을 안보이게..
   $('.tabs .tabs_inner').eq(ind - 1).show();  //클릭한 메뉴에 해당하는 탭 내용만 열어라 (더미 제외하므로 -1)
});