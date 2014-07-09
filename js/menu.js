/*
 * 	Menu.JS 
 * 
 * 	My way o handle the menu on this page.
 * 
 * 	written by lfuelling <lukas@k40s.net>
 */

$(document).ready(function() {
	
	//initial load
	_386 = { onePass: true, speedFactor: 1.25 };
	$(".home").show();
	$(".about").hide();
	$(".projects").hide();
	$(".contact").hide();
	$("#homeli").attr('class', 'active');
	$("#aboutli").attr('class', 'inactive');
	$("#projectsli").attr('class', 'inactive');
	$("#contactli").attr('class', 'inactive');
	
	// Menu
			
	$('#homea').click(function(){
					$(".home").show();
					$(".about").hide();
					$(".projects").hide();
					$(".contact").hide();
					$("#homeli").attr('class', 'active');
					$("#aboutli").attr('class', 'inactive');
					$("#projectsli").attr('class', 'inactive');
					$("#contactli").attr('class', 'inactive');
	});
	$('#abouta').click(function(){
					$(".home").hide();
					$(".about").show();
					$(".projects").hide();
					$(".contact").hide();
					$("#homeli").attr('class', 'inactive');
					$("#aboutli").attr('class', 'active');
					$("#projectsli").attr('class', 'inactive');
					$("#contactli").attr('class', 'inactive');
	});
	$('#projectsa').click(function(){
					$(".home").hide();
					$(".about").hide();
					$(".projects").show();
					$(".contact").hide();
					$("#homeli").attr('class', 'inactive');
					$("#aboutli").attr('class', 'inactive');
					$("#projectsli").attr('class', 'active');
					$("#contactli").attr('class', 'inactive');
	});
	$('#contacta').click(function(){
					$(".home").hide();
					$(".about").hide();
					$(".projects").hide();
					$(".contact").show();
					$("#homeli").attr('class', 'inactive');
					$("#aboutli").attr('class', 'inactive');
					$("#projectsli").attr('class', 'inactive');
					$("#contactli").attr('class', 'active');
	});
				
				
			
});
