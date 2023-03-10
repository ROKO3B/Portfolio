'use strict';

$(function() {

    $('.js-btn').on('click', function () {        
      $('.sp-nav-menu , .btn-line').toggleClass('open'); 
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
      }, 4000);
  
});