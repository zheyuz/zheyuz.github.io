$(document).on("pageshow", function() {
    // li.card_content 高度
    $('li.card_content').each(function() {
        var ObjectW = $(this).width();
        $(this).css('height', ObjectW).trigger('create');
    });
});
$(function() {
    /*------------通用------------*/
    //視窗捲動則Header fixed
    $(this).scroll(function() {
        var windowScrollTop = $(window).scrollTop(); //抓捲動數值
        if (windowScrollTop >= 20) { //捲動數值超過Header(約180)
            $('.header_guideline').addClass('scroll');
        } else {
            $('.header_guideline').removeClass('scroll');
        }
    });
    // 錯誤
    $('.guideline_form.error').each(function() {
        $(this).find('label.title').nextAll().addClass('animated slow headShake');
    });
    $('#add_fix').click(function() {
        $('body').addClass('fix');
    });
    $('#cancel_fix').click(function() {
        $('body').removeClass('fix');
    });
    /*------------建立合購商品 商店------------*/
    // sub_header_dropdown_search 點下搜尋按鈕後
    $('.open_search_btn').click(function() {
        $('.search_con').show();
        $('.dropdown_bar').toggle();
        $('.search_bar').addClass('expand');
        $(this).nextAll().find('.search_con').toggle();
        $(this).hide();
    });
    // sub_header_dropdown_search 點下搜尋按鈕後
    $('.prev_step_link').click(function() {
        $('.search_con').hide();
        $('.dropdown_bar').toggle();
        $('.search_bar').removeClass('expand');
        $(this).nextAll().find('.search_con').toggle();
        $('.open_search_btn').show();
        $('form.sub_header_searchbar')[0].reset();
    });

    // ul.hero_img_con 設定寬度
    $('.upload_img_box ul.card_grid').each(function() {
        var AllObjectW = $(this).find('li.card_content').outerWidth(true);
        var AllObjectCount = $(this).find('li.card_content').length;
        var GridWidth = parseInt(AllObjectW * AllObjectCount);
        $(this).css('width', GridWidth);
    });
    /*------------建立合購商品 無商店------------*/
    // ul.card_grid_small 設定寬度
    $('.thumbnail_list_con').each(function() {
        //找出li單個寬度(含margin)
        var AllObjectW = $('.card_grid_small').find('li.card_content').outerWidth(true);
        //找出li總數量
        var AllObjectCount = $('.card_grid_small').find('li.card_content').length;
        //寬度*數量=ul寬度
        var GridWidth = parseInt(AllObjectW * AllObjectCount);
        $('.card_grid_small').css('width', GridWidth);
    });
    /*------------新增商品------------*/
    /* Button Sheet*/
    // .img_modify_btn 按下
    $('.img_edit_btn').click(function() {
        /*讀取data-url位置*/
        var Destination = $(this).attr('data-url');
        $('body').addClass('fix');
        $('.actionbtn_container.edit_product_img').show();
        $('.actionbtn_container.edit_product_img').find('.mask_modal').fadeIn(400);
        $('.actionbtn_container.edit_product_img').find('ul.button_list').removeClass('slideOutDown');
        $('.actionbtn_container.edit_product_img').find('ul.button_list').addClass('animated slideInUp');
    });
    // .content_modify_btn 按下
    $('.content_modify_btn').click(function() {
        /*讀取data-url位置*/
        var Destination = $(this).attr('data-url');
        $('body').addClass('fix');
        $('.actionbtn_container.edit_modal').show();
        $('.actionbtn_container.edit_modal').find('.mask_modal').fadeIn(400);
        /*把data-url內容轉給.action_btn.edit_content*/
        $('li.button_content .action_btn.edit_content').attr('href', Destination);
        $('.actionbtn_container.edit_modal').find('ul.button_list').removeClass('slideOutDown');
        $('.actionbtn_container.edit_modal').find('ul.button_list').addClass('animated slideInUp');
    });
    // .action_btn.cancel 按下
    $('.action_btn.cancel, .mask_modal').click(function() {
        $('.actionbtn_container').find('.mask_modal').fadeOut(400);
        $('.actionbtn_container').find('ul.button_list').removeClass('slideInUp');
        $('.actionbtn_container').find('ul.button_list').addClass('animated slideOutDown');
        $('li.button_content .action_btn.edit_content').attr('href', '#');
        $('.actionbtn_container').delay(1000).stop().fadeOut();
        $('body').removeClass('fix');
    });
    /*------------設定開團資訊------------*/
    //打開popup
    $('a[data-href="popup"]').each(function() {
        $(this).click(function() {
            var PopupTitle = $(this).attr('data-popuptitle');
            var PopupContent = $(this).attr('data-popupcontent');
            $('body').addClass('fix');
            $('.popup_screen').show();
            $('.popup_screen').find('.popup_container').fadeIn(300);
            $('.popup_container').find('.mask_modal').fadeIn(200);
            $('.popup_content').find('b').text(PopupTitle);
            $('.popup_content').find('p').prepend(PopupContent);
        });
    });
    //打開popup - 按背景不關閉
    $('a[data-href="popup_noclose"]').each(function() {
        $(this).click(function() {
            $('body').addClass('fix');
            $('.popup_screen').show();
            $('.popup_screen').find('.popup_container_noclose').fadeIn(300);
            $('.popup_container_noclose').find('.mask_modal').fadeIn(200);
            //建議開團商品
            $('.popup_container_noclose').find('.suggestion_container').fadeIn(1000);
            var CardW=$('.wrapper .popup_screen.suggestion_bubble li.card_content').width();
            $('.wrapper .popup_screen.suggestion_bubble li.card_content').css('height', CardW).trigger('create');
        });
    });
    //關閉popup
    $('.popup_close_btn, .popup_container').each(function() {
        $(this).click(function() {
            $('.popup_container').find('.mask_modal').fadeOut(400);
            $('.popup_container_noclose').find('.mask_modal').fadeOut(400);
            //建議開團商品
            $('.popup_container_noclose').find('.suggestion_container').fadeOut(1000);        
            $('.popup_screen').delay(1000).stop().fadeOut(0);
            $('.popup_content').find('b').text('');
            $('.popup_content').find('p').html('');
            $('body').removeClass('fix');
        });
    });
    //展開截止進階設定
    $('.card_container .title_container').click(function() {
        $(this).nextAll('ul.card_form_container').slideDown();
        $(this).css('cursor', 'default');
        $(this).find('.card_exptend_btn').hide();
    });
    //展開單列
    $('.content_control_btn').each(function() {
        $(this).click(function() {
            // .row_collapse_conten 換樣式 
            $(this).parent().parent().toggleClass('expand');
            //這句會讓footer消失有bug $(this).parent().parent().nextAll('.item_form_content').slideToggle();
        });
    });
    /*------------Modal Row Footer切換------------*/
    $('#details_recommend .text_box_btn').click(function() {
        $(this).find('i').addClass('active');
        $(this).next('.img_box_btn').find('i').removeClass('active');
        $('#details_recommend .modal_text_box').fadeIn(200);
        $('#details_recommend .modal_img_box').fadeOut(100);
    });
    $('#details_recommend .img_box_btn').click(function() {
        $(this).find('i').addClass('active');
        $(this).prev('.text_box_btn').find('i').removeClass('active');
        $('#details_recommend .modal_img_box').fadeIn(200);
        $('#details_recommend .modal_text_box').fadeOut(100);
    });
    $('#details_notify .text_box_btn').click(function() {
        $(this).find('i').addClass('active');
        $(this).next('.img_box_btn').find('i').removeClass('active');
        $('#details_notify .modal_text_box').fadeIn(200);
        $('#details_notify .modal_img_box').fadeOut(100);
    });
    $('#details_notify .img_box_btn').click(function() {
        $(this).find('i').addClass('active');
        $(this).prev('.text_box_btn').find('i').removeClass('active');
        $('#details_notify .modal_img_box').fadeIn(200);
        $('#details_notify .modal_text_box').fadeOut(100);
    });

});
$(window).resize(function() {
    /*------------建立合購商品 商店------------*/
    // li.card_content 高度
    $('li.card_content').each(function() {
        var ObjectW = $(this).width();
        $(this).css('height', ObjectW).trigger('create');
    });
    /*------------新增商品------------*/
    // ul.hero_img_con 設定寬度
    $('.upload_img_box ul.card_grid').each(function() {
        var AllObjectW = $(this).find('li.card_content').outerWidth(true);
        var AllObjectCount = $(this).find('li.card_content').length;
        var GridWidth = parseInt(AllObjectW * AllObjectCount);
        $(this).css('width', GridWidth);
    });
});