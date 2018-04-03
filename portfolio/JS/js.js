// scroll nav color change
var portfolio_t = $('.portfolio').offset().top-200;
var about_t = $('#aboutContainer').offset().top-100;

// alert(portfolio_t-$('nav').height())
$(document).scroll(function(){
  if (  $(this).scrollTop()< ( portfolio_t-$('nav').height() )  ){
    $('.navhome').css({
      'color': '#B28247'
    });
    $('.navportfolio').css({
      'color':'#919191'
    });
    $('.navabout').css({
      'color':'#919191'
    });
  } else if ($(this).scrollTop()>=( portfolio_t-$('nav').height()) && $(this).scrollTop()<about_t-$('nav').height()) {
    $('.navhome').css({
      'color':'#919191',
    });
    $('.navportfolio').css({
      'color':'#B28247'
    });
    $('.navabout').css({
      'color':'#919191'
    });
  } else if($(this).scrollTop()>=about_t-$('nav').height()){
    $('.navhome').css({
      'color':'#919191',
    });
    $('.navportfolio').css({
      'color':'#919191'
    });
    $('.navabout').css({
      'color':'#B28247'
    });
  };
});


$(document).ready(function(){

  $(".navportfolio, .navabout").on("click", function(event) {
    // console.log($($(this).attr("href")).offset());
    var scrollTargetID = $(this).attr("href");
    var scrollPos = $(scrollTargetID).offset().top;
    scrollPos -= $("nav").height();
    $("html, body").animate({ scrollTop: scrollPos }, 500);
    // alert(scrollPos);
    return false;
  });
});
