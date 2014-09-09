var speech = new webkitSpeechRecognition();

var bool_speech = false;

speech.continuous = true;
speech.interimResults = false;
speech.lang = "es-ES";

if (rutaModelo.mod != "default") {
	var sonidoAcierto = document.createElement('audio');
	sonidoAcierto.setAttribute("src", "sonidos/acierto.wav");
	$.get();	
	
	speech.onresult = function (event) {	  
		var mensaje = event.results[event.results.length - 1][0].transcript;
		console.log("### SPEECH CAPTURADO");
		console.log("# MENSAJE: " + mensaje);
		$("#input_resultado_voz").val(mensaje);
		var solucion = rutaModelo.modelo.sonido_descripcion;
		for (var i = 0; i < solucion.length; i++)
			if (mensaje.match(solucion[i])) {
				console.log("# RESULTADO CON " + solucion[i]);
				sonidoAcierto.play();
				reconstruirPista();
			}   
	}

	speech.onend = function () {
		console.log("### SPEECH TERMINADO");
		speech.start();
	}
	speech.start();

	if (rutaModelo.mod != "default") {
		var pista = rutaModelo.modelo.sonido_descripcion[0];
		var total = pista.length / 2;
		for (var i = 0; i < total; i++) {
			var indice = Math.random() * (pista.length - 0);
			pista = replaceAt(pista, indice , '_');
		}	
		construirPista();
	}

}

function replaceAt(string, index, character) {
	return string.substr(0, index) + character + string.substr(index+character.length);
}

function construirPista() {
	var aux = pista;
	var hash_tildes = new Array();
	hash_tildes["á"] = "a";
	hash_tildes["é"] = "e";
	hash_tildes["í"] = "i";
	hash_tildes["ó"] = "o";
	hash_tildes["ú"] = "u";	
	var text = "";
	text += "<b>Pista: </b>";
	for (var i = 0; i < aux.length; i++) {
		if (typeof hash_tildes[aux.charAt(i)] != "undefined" )
			aux = replaceAt(aux, i, hash_tildes[aux.charAt(i)]);
		text += "<img src='images/letras/" + aux.charAt(i) + ".png'/>";
	}
	$("#div_pista").html(text);
	$("#div_pista").show();
}

function reconstruirPista() {
	var hash_tildes = new Array();
	hash_tildes["á"] = "a";
	hash_tildes["é"] = "e";
	hash_tildes["í"] = "i";
	hash_tildes["ó"] = "o";
	hash_tildes["ú"] = "u";
	var pista = rutaModelo.modelo.sonido_descripcion[0];
	var text = "";
	text += "<b>Pista: </b>";
	for (var i = 0; i < pista.length; i++) {
		if (typeof hash_tildes[pista.charAt(i)] != "undefined" )
			pista = replaceAt(pista, i, hash_tildes[pista.charAt(i)]);
		text += "<img src='images/letras/" + pista.charAt(i) + ".png'/>";
	}
	$("#div_pista").html(text);
	$("#div_pista").show();
}