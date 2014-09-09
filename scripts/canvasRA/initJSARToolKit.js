threshold = 128;

var canvas = document.createElement('canvas');
canvas.width = 900;
canvas.height = 400;
	
var raster = new NyARRgbRaster_Canvas2D(canvas);

var param = new FLARParam(canvas.width, canvas.height);	
resultMat = new NyARTransMatResult();

var detector = new FLARMultiIdMarkerDetector(param, 120);	

detector.setContinueMode(true);				

var tmp = new Float32Array(16);			

param.copyCameraMatrix(tmp, 10, 10000);

function Jsar_DetectarMarcas(detector, raster, threshold, markers, resultMat){

	var detectadas = detector.detectMarkerLite(raster, threshold);
	
	for(var idx = 0; idx < detectadas; idx++){
		var id = detector.getIdMarkerData(idx);		
		var currId;
		if(id.packetLength > 4){
			currId = -1;
		} else {
			currId = 0;
			for(var i = 0; i < id.packetLength; i++){
				currId = (currId << 8) | id.getPacketData(i);
			}
		}
		
		if (markers[currId] == null) {	
            markers[currId] = {};
		}
				
		detector.getTransformMatrix(idx,resultMat);		
		markers[currId].age = 0;
  		markers[currId].transform = Object.asCopy(resultMat);
	}
}
