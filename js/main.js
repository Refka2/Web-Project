$(document).ready(function(){
	
	//posts and favorites
	
	$('.nav ul li').click( function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

		
	$('li.post').click( function() {
		$('.profile-posts').addClass('a1');
		$('.profile-fav').removeClass('a1');
	});
	$('li.fav').click( function() {
		$('.profile-fav').addClass('a1');
		$('.profile-posts').removeClass('a1');
	});

	//settings:
	
	$('.settings').click(function() {
		$('.container').addClass('act');
		$('body.profile').addClass('not-visible');
		$('.edit-profil').removeClass('mask');
	});


		//general informations and security :
		
		$('.btn1 ').click( function() {
			$(this).addClass('first').siblings().removeClass('first');
		});


		$('button.information').click( function() {
			$('.pass').addClass('aa');
			$('.info').removeClass('aa');
		});
		$('button.password').click( function() {
			$('.info').addClass('aa');
			$('.pass').removeClass('aa');
		});


	
	//return to the previous page: 
	$('.goback').click(function() {
		$('.container').removeClass('act');
		$('body.profile').removeClass('not-visible');
		$('.edit-profil').addClass('mask');
	});
	
	
	//add post :
	
	$('button.create').click(function() {
		$('.container').addClass('act');
		$('body.profile').addClass('not-visible');
		$('.add-post').removeClass('mask');
	});
	
		
		

});

function setbg(color)
{
document.getElementById("post").style.background=color

}