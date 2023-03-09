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

});