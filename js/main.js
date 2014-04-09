$(document).ready(function(){
	// FRONT PAGE : PROFILE
	$('article').load('profile.html',function(response,status,xhr){
				if(status=="success"){
					$('article').load('profile.html');
				}else{
					$('article').html("<div class='error fade'>OH! OH! OH!<br/>an error occured : " + xhr.status + " " + xhr.statusText +"<br/></div>"); 
				}
	});

	// SOCIAL COLORING	
	$('#pinterest, #facebook, #instagram, #gmail').hover(
			function(){
				$(this).find('path').attr('fill','#f9de19');
			},
			function(){
				$(this).find('path').attr('fill','#040000');
	});

	// SOCIAL CLICKING
	$('#pinterest, #facebook, #instagram').click(function(){
			var url=$(this).attr('data-url');
			window.open(url);
	});
	$('#gmail').click(function(){
			$('.gmailme').stop().slideToggle();
	});

	// MAIN MENU
	$('.menu').click(function(){
			var murl=$(this).find('a').text();
				// Loading Page
				$('article').load(murl+'.html',function(response,status,xhr){
				if(status=="success"){
					$('article').stop().load(murl+'.html');
				}else{
					$('article').html("<div class='error'>OH! OH! OH!<br/>an error occured : " + xhr.status + " " + xhr.statusText +"<br/></div>"); 
				}
				});
	});

	// MAIN MENU COLORING
	$('#profile').click(function(){
			$('body').stop().animate({backgroundColor:"#ec6e5f"},1500);
		});
	$('#projects').click(function(){
			$('body').stop().animate({backgroundColor:"#f7f2eb"},1500);
		});

	// SLIDE SHOW COLORING
	$('#closeup').hover(
			function(){
				$(this).find('line').attr('stroke','#F95E21');
			},
			function(){
				$(this).find('line').attr('stroke','#040000');
	});

});

