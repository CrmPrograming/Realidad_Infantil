$(function() {
	$( "#tabs" ).tabs();
});

$(document).ready(function() {	
	$(".obras_colores")
	.mouseover(function() {
		$(this).attr("src", "images/listado/obras_hover.png");
	})
	.mouseout(function() {
		$(this).attr("src", "images/listado/obras.png");
	});
	$("#cubo_pintura")
	.mouseover(function() {
		$(this).attr("src", "images/listado/cubo_pintura_hover.png");
	})
	.mouseout(function() {
		$(this).attr("src", "images/listado/cubo_pintura.png");
	});
	$("#pelota")
	.mouseover(function() {
		$(this).attr("src", "images/listado/pelota_hover.png");
	})
	.mouseout(function() {
		$(this).attr("src", "images/listado/pelota.png");
	});
	$("#adivina_animal")
	.mouseover(function() {
		$(this).attr("src", "images/listado/adivinar_animal_hover.png");
	})
	.mouseout(function() {
		$(this).attr("src", "images/listado/adivinar_animal.png");
	});	
	$("#dialogo_nuevas_actividades").dialog({
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

function mostrarDialogo() {
	$("#dialogo_nuevas_actividades").dialog("open");	
}