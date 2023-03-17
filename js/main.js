'use strict';

$(function() {

    $('.js-btn').on('click', function () {        
      $('.sp-nav-menu , .btn-line , #mask').toggleClass('open'); 
    })

    $('#mask').on('click',function () {
      $('.sp-nav-menu , .btn-line , #mask').
      removeClass('open');
    })


  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  $('.slider img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".slider img:first-child").fadeOut(3000);
        $(".slider img:nth-child(2)").fadeIn(3000);
        $(".slider img:first-child").appendTo(".slider");
      }, 6000);
  
});

function fadeAnime(){

  $('.works-item').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
}

  $(window).scroll(function (){
    fadeAnime();
  });


  $(window).on('load', function(){
    fadeAnime();
  });
