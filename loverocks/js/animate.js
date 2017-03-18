		$(document).ready(function(){
			/* Love Story Animate */
			$('.because_no').animate({opacity:'1'},1000);
			$('.ever').delay(2000).animate({opacity:'1'},1000);
			$('.head').delay(3500).animate({opacity:'1'},1000);
			$('.footer').delay(3500).animate({opacity:'1'},1000);
			$('.story_content').delay(5500).fadeOut('slow');
			$('.henry_kat').delay(6500).fadeIn('slow');
			$('article.love_story').delay(8000).fadeOut('slow');

			// /* Love Rocks Animate */
			// $('article.love_rocks').show();
			// $('article.love_story').hide();

			// $('article.love_rocks').fadeIn(3000);
			// $('.lr_bg_dots').fadeIn().addClass('animate');
			// $('header.love_rocks_logo').fadeIn('fast').animate({top:'52px'},2000,'easeOutElastic');
			// $('.right_hand').fadeIn('fast').animate({bottom:'-120px'},2000,'easeOutElastic');
			// $('.left_hand').fadeIn('fast').animate({bottom:'-120px'},2000,'easeOutElastic');
			// $('.lightning').fadeIn('fast').animate({top:'184px'},2000,'easeOutElastic');
			// $('.rsvp_sticker').fadeIn('fast').addClass('rotate');

			$('article.love_rocks').delay(9000).fadeIn(3000);
			$('.lr_bg_dots').delay(10000).fadeIn().addClass('animate');
			$('header.love_rocks_logo').delay(11000).fadeIn('fast').animate({top:'52px'},2000,'easeOutElastic');
			$('.right_hand').delay(11000).fadeIn('fast').animate({bottom:'-120px'},2000,'easeOutElastic');
			$('.left_hand').delay(11000).fadeIn('fast').animate({bottom:'-120px'},2000,'easeOutElastic');
			$('.lightning').delay(11500).fadeIn('fast').animate({top:'184px'},2000,'easeOutElastic');
			$('.rsvp_sticker').delay(12500).fadeIn('fast').addClass('rotate');

				var WindowW=$(window).width();
				if(WindowW<="1024") {
				$('.lightning').animate({top:'15%'},2000,'easeOutElastic');
				$('header.love_rocks_logo').animate({top:'52px'},5000,'easeOutElastic');
				$('.left_hand').animate({bottom:'-120px'},5000,'easeOutElastic');
				$('.left_hand').addClass('animate');
				}

			$('.rsvp_sticker').click(function(){
				$('header.love_rocks_logo').hide();
				$('.lightning').hide();
				$('.rsvp_sticker').hide();
				$('.rsvp_zone').fadeIn('fast');
				$('.rsvp_form').animate({top:'180px'},2000,'easeOutElastic');
			});


			$('.submit_btn').click(function(){
				var Name=$('#name').val();
				var Tel=$('#tel').val();
				var Address=$('#address').val();

				if(Name==""){
					alert('Please Fill : Name');
					return false;
				}else if(Tel==""){
					alert('Please Fill : Tel');
					return false;
				}else if(Address==""){
					alert('Please Fill : Address');
					return false;		
				}else{
					$("#form").submit();
					$('.rsvp_form').fadeOut('fast');
					$('.message_sent').fadeIn();
				}
				setTimeout("$('#form')[0].reset();",2000);
			});
		});
		$(window).resize(function(){
				var WindowW=$(window).width();
				if(WindowW<="1024") {
				$('.lightning').animate({top:'15%'},2000,'easeOutElastic');
				$('header.love_rocks_logo').animate({top:'32px'},5000,'easeOutElastic');
				$('.left_hand').animate({bottom:'-180px'},5000,'easeOutElastic');
				$('.left_hand').addClass('animate');	
				}
				else if(WindowW >= "1024") {
				$('header.love_rocks_logo').animate({top:'52px'},2000,'easeOutElastic');
				$('.left_hand').animate({bottom:'-120px'},5000,'easeOutElastic');				
				}

		});