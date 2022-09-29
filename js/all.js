$(document).ready(function () {
    $('.menu > li > a').click(function(event){
        event.preventDefault();
        $(this).parent().find('.menu_dropdown').slideToggle();
        $(this).parent().siblings().find('.menu_dropdown').slideUp();
        $(this).toggleClass('active');
    });

    //回最上面箭頭
    function showBtnCondition() {
      if ($(this).scrollTop() > 100) {
        $('#top').fadeIn();
          } else {
           $('#top').fadeOut();           
          }
        }
        $('#top').click(function(event){
          event.preventDefault;
          //body會滾到卷軸0的位置，花3秒時間滾到
          $('html,body').animate({scrollTop:0},1000);
        });
    $(window).scroll(showBtnCondition);

    //燈箱效果
    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true
      });
    
    //swiper輪播
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
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