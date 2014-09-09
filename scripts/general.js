// Activar tooltips

$(document).ready(function() {
	var is_chrome = window.chrome;
	if (typeof is_chrome == "undefined") {
		$("#div_chrome").show(1000);
		setTimeout(function() {
			$("#div_chrome").hide(1000);
		}, 10000);
	}
});


$(function() {
	$(document).tooltip({
		track: true
	});
});