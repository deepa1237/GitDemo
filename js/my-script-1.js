$(document).ready(function(){

   

  //////// Nav-btn & nav-menu /////////
    
    //navbar-toggle - on click 
$(".navbar-toggle").click(function(a){
    a.preventDefault(); //to stop page reload    
    $(this).toggleClass("navbar-toggle-cross"); //toggle dropdown btn img    
    $("#myNavbar").slideToggle(600); 
});
    


    

    
/* $(window).scroll(function(){
    $("#myNavbar").slideUp(400);
    $(".navbar-toggle").removeClass("navbar-toggle-cross"); 
}); */
    /*
//collapse - click outside to hide    
$(".section").click(function(){
    $("#myNavbar").slideUp(400); 
    $(".navbar-toggle").removeClass("navbar-toggle-cross");
    });
*/
   
if ($(window).width() > 767) { 
//Refresh js file on reload
    $(window).resize(function() {
        if ($(window).width() < 769) {
            location.reload();
        }
});
} 
    
  

///// s-2-arrow press //////
    
$(".s-2-arrow").click(function(){
          $("body").animate({
        scrollTop: $(".section-3").offset().top}, 1200, "swing");
    });
    

///// Form reset after submit /////
    
$('#submit').click(function(){
    $("form")[0].trigger("reset");
});
    
    
    
///// slick js /////    
    
/// section-1 slideshow //////
$('.s-1-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    swipe: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,  
});    
 
    
    
    
    
 /// GALLERY ////// 

$('.lightbox').hide();
    
$('.gal-thumb').click(function(){

    $("body").css("overflow","hidden");
    
    $('.lightbox').fadeIn('slow');
    
    $('.current').removeClass('current');
    $(this).addClass('current');
    
    var imgpath = $('.current').find('img').attr('src');    
    $('.imgbox').find('img').attr('src', imgpath);
    
    var caption = $('.current').find('p').text();
    $('.imgbox').find('p').text(caption);
    
    
   
});
    
$('.lightbox-cross').click(function(){
    
    $("body").css("overflow","auto");
    
    $('.lightbox').fadeOut();
    
    $('.current').removeClass('current');
}); 
    
  
$('.lightbox-next').click(function(){
    $('.current').removeClass('current').next('.gal-thumb').addClass('current');
    
    var imgpath = $('.current').find('img').attr('src');
    
    $('.imgbox').find('img').attr('src', imgpath).fadeIn();
    
     var caption = $('.current').find('p').text();
    $('.imgbox').find('p').text(caption);
});    
    
$('.lightbox-prev').click(function(){
    $('.current').removeClass('current').prev('.gal-thumb').addClass('current');
    
    var imgpath = $('.current').find('img').attr('src');
    
    $('.imgbox').find('img').attr('src', imgpath).fadeIn();
    
     var caption = $('.current').find('p').text();
    $('.imgbox').find('p').text(caption);
});     
    
    
    
    
////////// THE END ////////////    

}); 






