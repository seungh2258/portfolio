$(function(){
    //'./product.html?pname=베이스'
    var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   ./product.html?pname=베이스
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex2.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
    // '문자열'.substring(시작인덱스 , 자를개수) 
    // 'abcdefg'.substring(2 , 3) ->  'cde'
    // params = 'pname=베이스' 
    
    key = params.split("=")[0];  //'pname'
    value = params.split("=")[1];  // '베이스'
    }   
    getParams();  //함수호출



   //ajax 처리

   $.ajax({
       url: './data/product_data_sub2.json',
       dataType: 'json',
       success: function(data){ //json파일에 연결이 완료되면 자동으로 호출되는 함수
            //data 매개변수 -> json파일에 있는 모든 객체배열이 자동 저장된다
           var useData = data.product_data_sub2; //useData => 모든 객체배열이 담겨있다
           
           function dataPrint(arr){  //검색된 또는 전체 상품리스트 출력
                   //arr = useData(전체상품) / newArray(검색된상품)
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       var $Price = arr[i].Price;
                       var $Descript = arr[i].Descript;
                       var $Image = arr[i].Image;

                       $Price=$Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                       txt+='<li>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       txt+='<dd>'+$Price+' 원</dd>';
                       txt+='<dd>'+$Descript+'</dd>';
                       txt+='</dl>';
                       txt+='<a href="#" class="pop_open">자세히보기</a>';  //팝업창 열기 태그 추가
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           
           var newArray = []; //검색된 상품을 담기위한 배열
           var search_on =false;  
           //검색어가 넘어오지 않았을 때 false , 검색어가 넘어왔을 때 true
           //초기실행, 함수호출
            
           if(value){
                //다른페이지에서 검색어 입력을 하였을때...
                newArray = useData.filter(function(element){
                    return element.Name.includes(value); //상품명에 검색어가 포함되어 있는 배열을 return
                });
                //newArray => 검색된 상품만 배열에 담겨있다
                //console.log(newArray);

                if(newArray.length!=0){ //검색된 상품이 배열에 있으면...
                  dataPrint(newArray);
                }else{ //검색된 상품이 배열에 없으면...
                    $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>');
                }
                search_on =true;  //검색어가 넘어왔다
           }else{   //다른 페이지에서 검색어가 넘어오지 않았을 때
                dataPrint(useData); //전체상품을 다 출력~~
                search_on =false; //검색어가 넘어오지 않았다
           }
           

           //검색버튼을 클릭했을때...
           $('#btn').click(function(e){
                e.preventDefault();

                if($('#title').val()){ //검색어가 있으면
                    newArray = useData.filter(function(element){
                        //console.log($('#title').val());
                        //return element.Name == $('#title').val();
                        return element.Name.includes($('#title').val());
                    });
                    //console.log(newArray);
                    if(newArray.length!=0){
                        dataPrint(newArray);
                    }else{
                          $('.product_list').html('<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>');
                    }
                    search_on =true;  //검색어를 입력했다
                    $('#title').val('');
                }else{ //검색어가 없으면
                     alert('검색어를 입력하세요!');
                }
           });

           $('.btn_all').click(function(e){  //모두보기 클릭시
               e.preventDefault();
               dataPrint(useData);
               search_on =false; //검색어가 입력되지 않았다
           });

        //팝업처리 함수
        var pop_txt=""; //팝업에 삽입할 태그를 만든 변수
        function popchange(obj){
            //obj => 클릭한 제품에 대한 객체만 전달
            pop_txt=""; //이전에 만들어진 팝업에 삽입될 태그를 초기화(이전에 태그를 다 삭제)
            pop_txt+='<img src="'+ obj.pop_img +'" alt="">';
            pop_txt+='<p>'+ obj.Name +'</p>';
            pop_txt+='<span>'+ obj.pop_tit +'</span>';

            $('.modal_box .pop_con').html(pop_txt);
        }
      
        //팝업창 열기
        //$('.pop_open')는 계속해서 재 랜더링이 되어 만들어지기 때문에
        //$('.pop_open')에 직접 이벤트를 연결하면 처리되지 않는다.
        $(document).on('click', '.pop_open', function(e) {//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때..
            e.preventDefault();
            $('.product .modal_box').fadeIn('slow'); //팝업창 열기
            ind = $(this).index('.pop_open'); // 0 1 2 3 4 5 6 7
      
            if(search_on==false){//검색 안되었을때
                popchange(useData[ind]); //전체 객체배열에서 클릭한 인덱스에 해당하는 객체를 전달
            }else if(search_on==true){//검색 되었을때
                popchange(newArray[ind]); //검색된 객체배열에서 클릭한 인덱스에 해당하는 객체를 전달
            }
        });

        //팝업창 닫기
        $('.close_pop, .modal_box').click(function(e){  //모두보기 클릭시
            e.preventDefault();
            $('.product .modal_box').fadeOut('fast');
        });
  
       } 
   });
    
});