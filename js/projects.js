$(document).ready(function(){
		//$('.projects_:nth-child(odd)').find('figcaption').addClass('right_cap');

		$('.projects_').each(function(){
				var purl=$(this).find('figcaption').attr('data-page');
			$(this).click(function(){
				//LOADING
				$('.slide_c').load('projects/'+purl+'.html',function(response,status,xhr){
					if(status=="success"){
						$('.slide_c').load('projects/'+purl+'.html');
					}else{
						$('.slide_c').html("<div class='error fade'>OH! OH! OH!<br/>an error occured : " + xhr.status + " " + xhr.statusText +" to: "+purl+"<br/></div>"); 
					}
				});
				$('.slidess').show();
				$('.slide_c').slideDown();
			});

		});
	});