/*global $, alert, console*/


$(function () {
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function() {
        myHeader.height($(window).height());
        
        mySlider.each(function (){
        $(this).css('paddingTop',($('.bxslider li').height())*3 );
        });
        
    });
    
    // Links Add Active Calss
    
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        });
    
    // adjust bx slider items center
      mySlider.each(function (){
        $(this).css('paddingTop',($('.bxslider li').height())*3 );
        });
    // trigger the bo-slider
    
     mySlider.bxSlider({
        pager: false
        });

    // Smooth Scroll to Div
    
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' +$(this).data('value')).offset().top
            },1000);
    });
    
    // our Auto Slider Code
    
    (function autoSlider () {
        $('.slider .active').each(function () {
           if (!$(this).is(':last-child')) {
            $(this).delay(3000).fadeOut(1000, function () {
                $(this).removeClass('active').next().addClass('active').fadeIn("normal");
                autoSlider ();
                });
        } else {
            $(this).delay(3000).fadeOut(1000, function () {
               $(this).removeClass('active');
               $('.slider div').eq(0).addClass('active').fadeIn();
               autoSlider ();
            });
        }
        });
        }());
    
});
