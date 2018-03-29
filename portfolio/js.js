// $(document).ready(function(){
  var portfolio_t = $('.portfolio').offset().top;
  var about_t = $('#aboutContainer').offset().top;

// scroll nav color change
  $(document).scroll(function(){
    if ($(this).scrollTop()< ( portfolio_t-$('nav').height() )  ){
      $('.navhome').css({
        'color': '#B28247'
      });
      $('.navportfolio').css({
        'color':'#919191'
      });
      $('.navabout').css({
        'color':'#919191'
      });
    } else if ($(this).scrollTop()>=( portfolio_t-$('nav').height() ) && $(this).scrollTop()<about_t-$('nav').height()) {
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


  // click nav color change
  // $('nav a').click(function(){

    // $(this).addClass('changeColor');
    // $('nav a').not(this).css({
    //   'color':'#919191'
    // });
    // $(this).css({
    //   'color':'#B28247'
    // });
  // }) ????



// });
