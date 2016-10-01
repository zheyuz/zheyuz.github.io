$(function ()
{
  $('.tabs li').each(function(i){
    var _i = i;
    // alert(2);

    $(this).click(function(){

      $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');

      $('.tabContent').children('div').hide().eq(_i).show();
    });
  });
});
