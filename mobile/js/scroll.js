var ymenuh = $('.year').height();
var y2020 = $('.history1').offset().top-ymenuh*2-200;
var y2000 = $('.history2').offset().top-ymenuh*2-150;
var y1980 = $('.history3').offset().top-ymenuh*2-150;
var y1960 = $('.history4').offset().top-ymenuh*2-150;        

$('.year li a').click(function(e){
    e.preventDefault();
    var ytarget = 0;

    if($(this).hasClass('link1')){
        ytarget = y2020;
    }else if($(this).hasClass('link2')){
        ytarget = y2000;
    }else if($(this).hasClass('link3')){
        ytarget = y1980;
    }else if($(this).hasClass('link4')){
        ytarget = y1960;
    }
    $('html, body').stop().animate({'scrollTop':ytarget},'slow');
});

$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if(scroll>=810){
        $('header').hide();
        $('#content .content_area .year').addClass('fix');
    }else{
        $('header').show();
        $('#content .content_area .year').removeClass('fix');
    }

    $('.year li a').removeClass('spy');

    if(scroll>=y2020 && scroll<y2000){
        $('.year li:eq(0) a').addClass('spy');
    }else if(scroll>=y2000 && scroll<y1980){
        $('.year li:eq(1) a').addClass('spy');
    }else if(scroll>=y1980 && scroll<y1960){
        $('.year li:eq(2) a').addClass('spy');
    }else if(scroll>=y1960){
        $('.year li:eq(3) a').addClass('spy');
    }
    
});