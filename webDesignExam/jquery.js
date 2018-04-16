$(document).ready(function(){

  $('.hide').click(function(){
    $('.pic1').hide();
    $('.image_container').css({
      'justify-content':'center'
    });
  });

  $('.show').click(function(){
    $('.pic1').show();
  })

});
