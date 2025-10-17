var ymenuh = $('.history_menu').height();
var y2020 = $('.history_1').offset().top-ymenuh*2-230;
var y2000 = $('.history_2').offset().top-ymenuh*2-250;
var y1980 = $('.history_3').offset().top-ymenuh*2-250;
var y1960 = $('.history_4').offset().top-ymenuh*2-250;        

$('.history_menu li a').click(function(e){
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
        $('#content .content_area .history_menu').addClass('fix');
    }else{
        $('header').show();
        $('#content .content_area .history_menu').removeClass('fix');
    }

    $('.history_menu li a').removeClass('spy');

    if(scroll>=y2020 && scroll<y2000){
        $('.history_menu li:eq(0) a').addClass('spy');
    }else if(scroll>=y2000 && scroll<y1980){
        $('.history_menu li:eq(1) a').addClass('spy');
    }else if(scroll>=y1980 && scroll<y1960){
        $('.history_menu li:eq(2) a').addClass('spy');
    }else if(scroll>=y1960){
        $('.history_menu li:eq(3) a').addClass('spy');
    }
    
});