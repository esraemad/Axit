$(function(){
    'use strict';
    
   $(window).scroll(function(){
                   
        if($(window).scrollTop() >= $('.navbar').height())
        {
            $('.navbar').addClass("scrltest");
            /*'background','rgba(0,0,0,0.5)'*/
        }
       else
        {
            $('.navbar').removeClass("scrltest");
            /*'background','rgba(0,0,0,0.9)');*/
            
               
        }
    
       
   });
    
});



// taabs
 
$('.ul-tab li').click(function(){
    //add active class
    $(this).addClass('active').siblings().removeClass('active');
    //hide all div
    $('.cont-tab > div').hide();
    //show click div
    $($(this).data('class')).show();
    
});

