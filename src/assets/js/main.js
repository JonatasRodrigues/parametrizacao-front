(function($) {

	"use strict";

	$(document).ready(function(){

		var fullHeight = function() {
		
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
	
		};
		fullHeight();
		
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');

			if ($('#sidebar').hasClass('active')){
				var content = document.getElementById("content");
				var iWidth = window.innerWidth - 30;
				content.style.width = iWidth + "px";
			
			}else{				
				var oDiv = document.getElementById("sidebar");
				var content = document.getElementById("content");
				var iWidth = window.innerWidth - oDiv.offsetWidth;
				content.style.width = iWidth + "px";			
			}

		});

		var adjustSize = function() {
			var oDiv = document.getElementById("sidebar");
			var content = document.getElementById("content");			
			oDiv.style.height = content.offsetHeight + "px";
			
		};
		
		window.onresize = adjustSize;
		adjustSize();
			
	 });
	 
	  
})(jQuery);


