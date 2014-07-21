/*
 * 	Menu.JS 
 * 
 * 	My way o handle the menu on this page.
 *  This file is pretty much useless right now. 
 * 	It only initializes the loading animation.
 * 
 * 	written by lfuelling <lukas@k40s.net>
 */

$(document).ready(function() {
	
	//initial load
	_386 = { onePass: true, speedFactor: 1.25 };
	
	//Let's annoy the usery by not letting them right-click.
			$(document)[0].oncontextmenu = function() { return false;}

			$(document).mousedown(function(e){
			if( e.button == 2 ) {
            alert('Sorry, this functionality is disabled!'); //Yeah, we're REALLY sorry...
            return false;
			} else {
            return true;
            }

			});

});
