/*
 * 	projectsnav.JS 
 * 
 * The nav handler for the projects page.
 * 
 * 	written by lfuelling <lukas@k40s.net>
 */

$(document).ready(function() {
			// Nav Behavior Start
			$('#ta').click(function(){
				$("#ti").attr('class', 'active');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'inactive');
			});
			$('#lla').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'active');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'inactive');
			});
			$('#cfa').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'active');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'inactive');
			});
			$('#lpa').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'active');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'inactive');
			});
			$('#vra').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'active');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'inactive');
			});
			$('#mpa').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'active');
				$("#pwli").attr('class', 'inactive');
			});
			$('#pwa').click(function(){
				$("#ti").attr('class', 'inactive');
				$("#llli").attr('class', 'inactive');
				$("#cfli").attr('class', 'inactive');
				$("#lpli").attr('class', 'inactive');
				$("#vrli").attr('class', 'inactive');
				$("#mpli").attr('class', 'inactive');
				$("#pwli").attr('class', 'active');
			});

});
