$(document).ready(function(){
			$('#ss-submit').click(function(){
				//FIRST NAME
				var f =$('#entry_820770654');
				var fn = $('#entry_820770654').val();
				var fn_w= $('#entry_820770654').attr('data-name');
				//LAST NAME
				var l = $('#entry_972769050');
				var ln = $('#entry_972769050').val();
				var ln_w= $('#entry_972769050').attr('data-name');
				//EMAIL
				var e = $('#entry_55760418');
				var email = $('#entry_55760418').val();
				var email_w= $('#entry_55760418').attr('data-name');
				//MESSAGE
				var m = $('#entry_1636377314');
				var message = $('#entry_1636377314').val();
				var message_w= $('#entry_1636377314').attr('data-name');
				// email 確認
				var match=email.match("@");


				if(fn==""){
					$('.error_message').stop().slideDown('fast').text('Please Fill : '+fn_w);
					f.focus();
					return false;
				}else if(ln==""){
					$('.error_message').stop().slideDown('fast').text('Please Fill : '+ln_w);
					l.focus();
					return false;
				}else if(email==""){
					$('.error_message').stop().slideDown('fast').text('Please Fill : '+email_w);
					e.focus();
					return false;
				}
				else if(!match){
				$('.error_message').stop().slideDown('fast').text('Please Check The FORM : '+email_w);
					e.focus();
					return false;
				}
				else if(message==""){
					$('.error_message').stop().slideDown('fast').text('Please Fill : '+message_w);
					m.focus();
					return false;
				}else{
					$("#ss-form").submit(function(e){
		    			$('.error_message').stop().slideDown().text('Thank You :-)');
		  			});
				}
				setTimeout("$('#ss-form')[0].reset();",2000)
			});

			// CLOSE
		    $('#leavexx').click(function(){
	            $('.gmailme').stop().slideToggle();
	            $("#ss-form")[0].reset();
	            $('.error_message').text('');hide();
            });
            // COLORING	
			$('#leavexx').hover(
					function(){
						$(this).find('path').attr('fill','#ffffff');
					},
					function(){
						$(this).find('path').attr('fill','#EFD62D');
			});

		});