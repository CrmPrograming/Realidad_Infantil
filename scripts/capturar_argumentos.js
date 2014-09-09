function getURLparams() {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;	
}

function getRandomModel(modo) {	
	var result;
	switch (modo) {
		case "0x0":
			result = listado_modelos.modelo_colores[Math.floor(Math.random() * listado_modelos.modelo_colores.length)];
		break;
		case "1x0":
			result = listado_modelos.modelo_formas[Math.floor(Math.random() * listado_modelos.modelo_formas.length)];
		break;
		case "2x0":
			result = listado_modelos.modelo_animales[Math.floor(Math.random() * listado_modelos.modelo_animales.length)];
		break;
		default:
			result = listado_modelos.modelo_default[0];
	}
	return (result);
}

var opciones = getURLparams();
var rutaModelo = { "modelo" : "", "mod" : "", "title" : ""};
if (window.location.href == opciones) {
	// Sin parámetros
	rutaModelo.modelo = listado_modelos.modelo_default[0];
	rutaModelo.mod = "default";
	rutaModelo.title = "Test Modelo";
} else {
	// Con parámetros
	var aux;
	switch(opciones["modo"]) {
	case "0x0":
		rutaModelo.mod = "0x0";
		rutaModelo.title = "¡Adivina el Color!";		
		break;
	case "1x0":
		rutaModelo.mod = "1x0";
		rutaModelo.title = "¿Qué forma tiene?";
		break;
	case "2x0":
		rutaModelo.mod = "2x0";
		rutaModelo.title = "¿Qué animal es?";
		break;	
	default:
		rutaModelo.mod = "default";
		rutaModelo.title = "Test Modelo";		
	}
	rutaModelo.modelo = getRandomModel(opciones["modo"]);
}

console.log("## REALIDAD_INFANTIL_DEBUG: Modelo Cargado");
console.log(rutaModelo);
console.log("####");
