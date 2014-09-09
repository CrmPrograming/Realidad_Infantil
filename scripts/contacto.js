$(document).ready(function() {
	$("#input_submit").click(enviarEmail);
	$("#dialogo_funcionalidad").dialog({
		autoOpen: false,
		resizable: false,
		show: {
			effect: "fade",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		}
	});
});

function enviarEmail() {
	$("#dialogo_funcionalidad").dialog("open");	
}