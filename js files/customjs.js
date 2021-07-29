 // jquery mixtrup gallery plugin
  var mixer = mixitup('.gallery');
  // jquery circle progress bar plupin
    $('.circlechart').circlechart();

    // jquery magnific plugin
    $(document).ready(function () {
      
      $('.list').click(function(){
          $(this).addClass('active').siblings().removeClass('active');      
      });
      

      
      $('.imageSection').magnificPopup({

        delegate: "a",
        type: "image",
        imageSection: {
          enabled: true
        }

      });
      

    });
    

$(window).scroll(function () {

  if ($(this).scrollTop()>500) {
    $('.scrollUp').fadeIn(400);
  } else {
    $('.scrollUp').fadeOut(300);
  }
});

$('.scrollUp').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
});


