$(document).ready(function () {
    $('.menu > li > a').click(function(event){
        event.preventDefault();
        $(this).parent().find('.menu_dropdown').slideToggle();
        $(this).parent().siblings().find('.menu_dropdown').slideUp();
        $(this).toggleClass('active');
    });

    //回最上面箭頭
    $('.top a').click(function(event){
        event.preventDefault;
        //body會滾到卷軸0的位置，花3秒時間滾到
        $('html,body').animate({scrollTop:0},1000);
      });

    //燈箱效果
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true
      });
    
    //swiper輪播
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});