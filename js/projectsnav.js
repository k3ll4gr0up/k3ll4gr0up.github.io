/*
 * 	projectsnav.JS 
 * 
 * The nav handler for the projects page.
 * 
 * 	written by lfuelling <lukas@k40s.net>
 */

$(document).ready(function() {
			// Nav Behavior Start
			$('#lla').click(function(){
				$("#llli").attr('class', 'active');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
			});
			$('#cfa').click(function(){
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'active');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
			});
			$('#lpa').click(function(){
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'active');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
			});
			$('#vra').click(function(){
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'active');
				$("#mpli").attr('class', 'inactive');
			});
			$('#mpa').click(function(){
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'active');
			});

});
