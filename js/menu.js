/*
 * 	Menu.JS 
 * 
 * 	My way o handle the menu on this page.
 * 
 * 	written by lfuelling <lukas@k40s.net>
 */

$(document).ready(function() {
	
	//initial load
	
	$("").show();
			
	$('#homea').click(function(){
					$("#homeli").attr('class', 'active');
					$("#aboutli").attr('class', 'inactive');
					$("#projectsli").attr('class', 'inactive');
					$("#contactli").attr('class', 'inactive');
				});
			
			});
