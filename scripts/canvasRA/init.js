

function init() {

	THREE.Matrix4.prototype.setFromArray = function(m) {
		return this.set(
		m[0], m[4], m[8], m[12],
		m[1], m[5], m[9], m[13],
		m[2], m[6], m[10], m[14],
		m[3], m[7], m[11], m[15]
		);
	};
	
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
							 navigator.mozGetUserMedia || navigator.msGetUserMedia;
							 
	window.URL = window.URL || window.webkitURL;
	
	navigator.getUserMedia({video: true}, 
				function(localMediaStream){ 		
					video.src = window.URL.createObjectURL(localMediaStream);
				}, 
				function(error) { alert("Imposible acceder a la webcam"); console.log(error);}
	);
	
	//document.body.appendChild(glCanvas);
	$("#content").append(glCanvas);
	cameraFigura.projectionMatrix.setFromArray(tmp);
	var lastTime = 0;
	var ctx = canvas.getContext('2d');
	var markers = {};
	setInterval(
		function(){
			if (video.ended) video.play();
			if (video.paused) return;
			if (window.paused) return;
			if (video.currentTime == video.duration){
				video.currentTime = 0;
			}
			if (video.currentTime == lastTime) return;
			lastTime = video.currentTime;
			
			Three_VideoToPlane(ctx, canvas);
	
			Jsar_DetectarMarcas(detector, raster, threshold, markers, resultMat);

			for (var i in markers) {
              var r = markers[i];
              		if (r.age > 1) {
              			delete markers[i];
							sceneFigura.remove(r.figura);
                  }
                  r.age++;
			}
			for (var i in markers) {
				var marca = markers[i];
				if (!marca.figura) {
					Three_CrearFigura(marca, i);
				}
				copyMarkerMatrix(marca.transform, tmp);
    			marca.figura.matrix.setFromArray(tmp);
            marca.figura.matrixWorldNeedsUpdate = true;
         }
			Three_MostrarTodo();
		}, 15);
		
}

function copyMarkerMatrix(arMat, glMat) {
	glMat[0] = arMat.m00;
	glMat[1] = -arMat.m10;
	glMat[2] = arMat.m20;
	glMat[3] = 0;
	glMat[4] = arMat.m01;
	glMat[5] = -arMat.m11;
	glMat[6] = arMat.m21;
	glMat[7] = 0;
	glMat[8] = -arMat.m02;
	glMat[9] = arMat.m12;
	glMat[10] = -arMat.m22;
	glMat[11] = 0;
	glMat[12] = arMat.m03;
	glMat[13] = -arMat.m13;
	glMat[14] = arMat.m23;
	glMat[15] = 1;
}