// JavaScript Document

$(document).ready(function(){
    var cnt = $('.content_area .tab_menu li').size();

    $('.content_area .contlist:eq(0)').show();
    $('.content_area .tab1').addClass('current');

    $('.content_area .tab').click(function(e){
          e.preventDefault();
          
          var ind = $(this).index('.content_area .tab');

          $(".content_area .contlist").hide();
          $(".content_area .contlist:eq("+ind+")").fadeIn('slow');
          $('.tab').removeClass('current');
          $(this).addClass('current');
     });

setTimeout(function(){
    $(".content_area .tabs .tabs_inner:eq(1), .content_area .tabs .tabs_inner:eq(2), .content_area .tabs .tabs_inner:eq(3)").hide();
    } , 1000);
    
  });

