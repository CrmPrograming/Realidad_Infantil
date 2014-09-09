$(function() {
	$( "#tabs" ).tabs();
});

$(document).tooltip({
	items: "[data-chrome-1], [data-chrome-2]",
	content: function() {
		var element = $(this);
		if (element.is("[data-chrome-1]")) {
			return ("<img src='images/instrucciones/google_chrome_1.jpg'>");
		}
		if (element.is("[data-chrome-2]")) {
			return ("<img src='images/instrucciones/google_chrome_2.jpg'>");
		}
	}
});