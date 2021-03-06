$(document).ready(function() {
//Homepage animation

  if($('.lavaLampWithImage li:first').hasClass('lavaLamp')){

    $('.wrapper').css('opacity', 0);
    $('.content').css('opacity', '0');
    $('.subnav').css('left', '-800px');
    $('.subnav li').css('left', '-800px');
    $('.content p').css('left', '800px');
    $('.content h2').css('left', '-800px');
    $('.content h2').css('position', 'relative');
  
    $('.wrapper').animate({
      opacity:1
    }, 800, function(){
      $('.content').animate({
        opacity:1
      }, 400, function(){
        $('.subnav').animate({
          left:0
        }, 400);
        $('.subnav li').animate({
          left:0
        }, 300);
        $('.content p').animate({
          left:0
        }, 300);
        $('.content h2').animate({
          left:0
        }, 300);
      });
    });
}

// Splash Animation
  $('.slide').css({'height' : '895px', 'width' : '895px', 'opacity' : '0.4', 'z-index' : '400'});
  $('.slide2').css({ 'left' : '245px'});
  $('.slide3').css({'left': '490px'});
  
  $('.slide').animate({
    width: 895,
    height:265,
    opacity:1
  }, 2500);
$('.slide').animate({opacity: 1.0}, 3000),

  $('.slide2').animate({
    top:0,
    left:0,
    opacity:0
  },600, function(){
    $('.slide3').animate({
      top:0,
      left:0,
      opacity:0
    },600, function(){
	 
      $('.sliding1').animate({
        left:265,
        top:10,
        opacity:1
      }, 2000, function(){
        $('.sliding2').animate({
          left:265,
          top:70,
          opacity:1
        }, 2000, function(){
          $('.sliding3').animate({
            left:265,
            top:130,
            opacity:1
          },2000, function(){
	          $('.sliding3').animate({
	            opacity:1
	          },5000, function(){
            window.location = './index.html';
            });
		  });
        });
      });
    });
  });
  //end
  
  // Campus Tour Animations
  $('.campus-tour').cycle({
	  fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });
  
});





