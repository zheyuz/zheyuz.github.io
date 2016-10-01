
$(document).ready(function() {
  // pcmenu

    $(".info ,.info_menu").hover(function(){
        $(".info_menu").toggleClass("info_menu_hover ");
        // $(".info_menu").animate({height:"35px"});
    });
    
    $(".order ,.order_menu").hover(function(){
        $(".order_menu").toggleClass("order_menu_hover ");
    });


// sticker
      $("#pcmenu").sticky({ topSpacing: 0 });


// sub info
    $(".sub_info").hover(function(event) {
       if(event.type == 'mouseenter') {
         $(".sub_info_more",this).fadeIn(1000);
         $(".sub_info_text",this).fadeIn(1000);
       } else {
         $(".sub_info_more",this).hide();
         $(".sub_info_text",this).hide();
       }
    });

    $(".sub_info").hover(function(){
        $(".sub_info_bg",this).toggleClass("sub_info_bg_hover ");
        $(".sub_info_store_01",this).toggleClass("sub_info_store_01_hover");
        $(".sub_info_store_02",this).toggleClass("sub_info_store_02_hover");
    });


// 最新文章
    $(".news_banner_con").hover(function(){
        $(".news_banner_more",this).toggleClass("news_banner_more_hover");   
    });

// search頁
    $(".search_banner_con").hover(function(){
        $(".search_banner_more",this).toggleClass("search_banner_more_hover");
    });

// search icon
    $(".icon01").click(function(){
        $(this).css({
          "background-image":"none",
          "background-color":"#E9E9E9",
          });

        $(this).animate({ 
          "width":"210px",
          "left":"-90%"
          },"slow");

        $('#search').css({
          "display":"block",
          });

        $('#s').delay("500").animate({
          "opacity":"1"
          },"slow");
    });


// slider
   $(function(){
        SyntaxHighlighter.all();
      });
      $(window).load(function(){
        
        $('.flexslider').flexslider({
          animation: "slide",
          start: function(slider){           
            //$('body').removeClass('loading');
            $("#loading").remove();
          }
        });
    });

    $(".simple-map ,.store-map").click(function() {
        $("html, body").animate({ scrollTop: 1240 }, "slow");
        return false;
    });



//商品數量
    $(".goods-num").click(function(){
        $(this).parent().find("ul.goods-numcon").css({
          "display":"block"
          });

        $(this).parent().find(".icon-01").css({
          "background-image":"url(img/icon-01-2.png)",
          "background-position":"left  1px",
          "top":"5px"
          });
    });

    $(".goods-numcon ").click(function(){
        $(this,"ul.goods-numcon").css({
          "display":"none"
          });
        $(this).parent().find(".icon-01").css({
          "background-image":"url(img/icon-01-1.png)",
          "background-position":"left  center",
          "top":"3px"
          }); 
    });



//查詢頁--訂單明細
    $(".inquiry-info02-btn01").click(function(){
        $(".inquiry-chickocn").show();
        return false;
    });

    $(".inquiry-chickocn-canncel").click(function(){
        $(".inquiry-chickocn").hide();
        return false;
    });


//查詢頁--寄送資料
    $(".inquiry-info02-btn02").click(function(){
        $(".inquiry-sentinfo").css({
          "display":"block"
          });
    });

    $(".inquiry-sentinfo-canncel").click(function(){
        $(".inquiry-sentinfo").css({
          "display":"none"
          });
    });


//查詢頁--我要申請
    $(".inquiry-info02-btn03").click(function(){
        $(".inquiry-apply").css({
          "display":"block"
          });
    });

    $(".inquiry-apply-canncel").click(function(){
        $(".inquiry-apply").css({
          "display":"none"
          });
    });

//查詢頁--申請退款--提交申請
    $(".inquiry-apply-btn").click(function(){
        $(".inquiry-apply").css({
          "display":"none"
          });
        $(".inquiry-apply2").css({
          "display":"block"
          });
    });

    $(".inquiry-apply-canncel").click(function(){
        $(".inquiry-apply2").css({
          "display":"none"
          });
    });

//查詢頁--申請退款--成功
    $(".inquiry-apply-btn2").click(function(){
        $(".inquiry-apply2").css({
          "display":"none"
          });
        $(".inquiry-apply3").css({
          "display":"block"
          });
    });

    $(".inquiry-apply-canncel").click(function(){
        $(".inquiry-apply3").css({
          "display":"none"
          });
    });









//查詢頁--申請退款--失敗
    $(".inquiry-info02-btn03-fail").click(function(){
        $(".inquiry-apply4").css({
          "display":"block"
          });
    });

    $(".inquiry-apply-canncel").click(function(){
        $(".inquiry-apply4").css({
          "display":"none"
          });
    });


    
//查詢頁--申請退款--失敗
    $(".goods-counticon-btn").click(function(){
        $(".goods-counticon-btnremaid").css({
          "display":"block"
          });
    });

    $(".goods-counticon-canncel").click(function(){
        $(".goods-counticon-btnremaid").css({
          "display":"none"
          });
    });










});










