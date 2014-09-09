$(document).ready(function() {
	var total = 0;
	total = listado_modelos.modelo_colores.length;
	total += listado_modelos.modelo_formas.length;
	total += listado_modelos.modelo_animales.length;
	$("#cantidad_modelos").text(total);	
});
