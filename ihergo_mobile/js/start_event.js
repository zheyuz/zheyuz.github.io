         $(function(){
            
            /*------------通用------------*/
            //視窗捲動則Header fixed
                    $(this).scroll(function() {
                    var windowScrollTop=$(window).scrollTop(); //抓捲動數值
                    if(windowScrollTop>=20){ //捲動數值超過Header(約180)
                      $('.header_guideline').addClass('scroll');
                    }else{
                      $('.header_guideline').removeClass('scroll');
                    }
                    });
                    // li.card_content 高度
                    $('li.card_content').each(function(){
                      var ObjectW=$(this).width();
                      $(this).css('height',ObjectW);
                    });
            /*------------建立合購商品 商店------------*/
                    // sub_header_dropdown_search 點下搜尋按鈕後
                    $('.open_search_btn').click(function(){
                      $('.search_con').show();
                      $('.dropdown_bar').toggle();
                      $('.search_bar').addClass('expand');
                      $(this).nextAll().find('.search_con').toggle();
                      $(this).hide();
                    });
                    // sub_header_dropdown_search 點下搜尋按鈕後
                    $('.prev_step_link').click(function(){              
                      $('.search_con').hide();
                      $('.dropdown_bar').toggle();
                      $('.search_bar').removeClass('expand');
                      $(this).nextAll().find('.search_con').toggle();
                      $('.open_search_btn').show();
                      $('form.sub_header_searchbar')[0].reset();
                    });

                    // ul.hero_img_con 設定寬度
                    $('.upload_img_box ul.card_grid').each(function(){
                      var AllObjectW=$(this).find('li.card_content').outerWidth(true);
                      var AllObjectCount=$(this).find('li.card_content').length;
                      var GridWidth=parseInt(AllObjectW*AllObjectCount);
                      $(this).css('width',GridWidth);
                    });
            /*------------建立合購商品 無商店------------*/
                 // ul.card_grid_small 設定寬度
                 $('.thumbnail_list_con').each(function(){
                   //找出li單個寬度(含margin)
                   var AllObjectW=$('.card_grid_small').find('li.card_content').outerWidth(true);
                   //找出li總數量
                   var AllObjectCount=$('.card_grid_small').find('li.card_content').length;
                   //寬度*數量=ul寬度
                   var GridWidth=parseInt(AllObjectW*AllObjectCount);
                   $('.card_grid_small').css('width',GridWidth);
                 });
            /*------------新增商品------------*/
                    /* Button Sheet*/
                    // .content_modify_btn 按下
                    $('.content_modify_btn').click(function(){
                      $('body').addClass('fix');
                      $('.action_button_sheet_container').show();
                      $('.action_button_sheet_container').find('.mask_modal').fadeIn(400);
                      $('.action_button_sheet_container').find('ul.button_list').addClass('slideup');
                    });
                    // .action_btn.cancel 按下
                    $('.action_btn.cancel, .mask_modal').click(function(){
                      $('.action_button_sheet_container').find('.mask_modal').fadeOut(400);
                      $('.action_button_sheet_container').find('ul.button_list').removeClass('slideup');
                      $('.action_button_sheet_container').delay(1000).stop().fadeOut();
                      $('body').removeClass('fix');
                    });
            /*------------設定開團資訊------------*/
            //打開popup
            $('a[data-href="popup"]').each(function(){
              $(this).click(function(){
                var PopupTitle=$(this).attr('data-popuptitle');
                var PopupContent=$(this).attr('data-popupcontent');
                $('body').addClass('fix');
                $('.popup_screen').show();
                $('.popup_screen').find('.popup_container').fadeIn(900);
                $('.popup_container').find('.mask_modal').fadeIn(300);
                $('.popup_content').find('b').text(PopupTitle);
                $('.popup_content').find('p').prepend(PopupContent);
              });
            });
            //關閉popup
            $('.popup_close_btn, .popup_container').each(function(){
              $(this).click(function(){
                $('.popup_container').find('.mask_modal').fadeOut(400);
                $('.popup_screen').delay(1000).stop().fadeOut(0);
                $('.popup_content').find('b').text('');
                $('.popup_content').find('p').html('');
                $('body').removeClass('fix');
              });
            }); 
            //展開截止進階設定
            $('.card_container .title_container').click(function(){
              $(this).nextAll('ul.card_form_container').slideDown();
              $(this).css('cursor','default');
              $(this).find('.card_exptend_btn').hide();
            });
          
            //展開單列
            $('.content_control_btn').each(function(){
              $(this).click(function(){
                // .row_collapse_conten 換樣式 
                $(this).parent().parent().toggleClass('expand');
                //這句會讓footer消失有bug $(this).parent().parent().nextAll('.item_form_content').slideToggle();
              });
            });
            /*------------Modal Row Footer切換------------*/
            $('.text_box_btn').click(function(){
              $(this).find('i').addClass('active');
              $('.img_box_btn').find('i').removeClass('active');
              $('.modal_text_box').fadeIn(200);
              $('.modal_img_box').fadeOut(100);
            });
            $('.img_box_btn').click(function(){
              $(this).find('i').addClass('active');
              $('.text_box_btn').find('i').removeClass('active');
              $('.modal_img_box').fadeIn(200);
              $('.modal_text_box').fadeOut(100);
            });

         });



         $(window).resize(function(){
            /*------------建立合購商品 商店------------*/
                    // li.card_content 高度
                    $('li.card_content').each(function(){
                      var ObjectW=$(this).width();
                      $(this).css('height',ObjectW);
                    });
            /*------------新增商品------------*/
                    // ul.hero_img_con 設定寬度
                    $('.upload_img_box ul.card_grid').each(function(){
                      var AllObjectW=$(this).find('li.card_content').outerWidth(true);
                      var AllObjectCount=$(this).find('li.card_content').length;
                      var GridWidth=parseInt(AllObjectW*AllObjectCount);
                      $(this).css('width',GridWidth);
                    });
         });