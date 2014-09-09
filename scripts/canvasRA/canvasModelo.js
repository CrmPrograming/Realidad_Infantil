
var c_width = 900; 
var c_height = 400;

var video = document.createElement('video');
// El escalado del video funciona a la inversa;
// Mayor dimensión, menor tamaño final
video.width = 640;
video.height = 400;	
video.autoplay = true;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(c_width, c_height);
var glCanvas = renderer.domElement;
glCanvas.width = c_width;
glCanvas.height = c_height;

var videoCanvasPlane = document.createElement('canvas');
videoCanvasPlane.width = video.width;
videoCanvasPlane.height = video.height;

var videoTexPlane = new THREE.Texture(videoCanvasPlane);
var plane = new THREE.Mesh(
	new THREE.PlaneGeometry(2, 2, 0),
  	new THREE.MeshBasicMaterial({map: videoTexPlane})
);

plane.material.depthTest = false;
plane.material.depthWrite = false;

var videoCamPlane = new THREE.Camera();
var videoScenePlane = new THREE.Scene();
videoScenePlane.add(plane);
videoScenePlane.add(videoCamPlane);

var sceneFigura = new THREE.Scene();
var cameraFigura = new THREE.Camera();
sceneFigura.add(cameraFigura);

var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 100, -100, 200 );
sceneFigura.add(light);

function Three_VideoToPlane(ctx, canvas){
	videoCanvasPlane.getContext('2d').drawImage(video, 0, 0);	
	ctx.drawImage(videoCanvasPlane, 0, 0, c_width, c_height);				
	canvas.changed = true;		
	videoTexPlane.needsUpdate = true;
}

function Three_CrearFigura(marca, id){
		
		var modelo;
		marca.figura = new THREE.Object3D();
		marca.figura.matrixAutoUpdate = false;
		cargador = new THREE.ColladaLoader();
		cargador.options.convertUpAxis = true;
		cargador.load('./models/' + rutaModelo.modelo.modelPath,
		  function colladaReady(collada) {
		    modelo = collada.scene;
			modelo.scale.x = modelo.scale.y = modelo.scale.z = rutaModelo.modelo.escala; // Escala del modelo
			modelo.position.x = modelo.position.y = modelo.position.z = 0;	// Posición del modelo sobre el QR
			modelo.rotation.x += -90 * Math.PI / 180; // Rotación del modelo sobre el QR
			marca.figura.add(modelo);
			console.log(marca.figura);
			var auxiliar = marca.figura;
			buscarMaterialSide(auxiliar, 0);
			sceneFigura.add(marca.figura);
		  });
}

// Función para buscar todas las caras de la figura y cambiar su atributo "side"
// a THREE.DoubleSide
function buscarMaterialSide(auxiliar, indice) {
	if (typeof auxiliar.material != "undefined") {
		auxiliar.material.side = THREE.DoubleSide;
	} else {
		if (auxiliar.children.length > 0) {
			for (var i = 0; i < auxiliar.children.length; i++)
				buscarMaterialSide(auxiliar.children[i], indice + 1);
		}
	}
}

function Three_MostrarTodo(){
 	renderer.autoClear = false;
	renderer.clear();
	renderer.render(videoScenePlane, videoCamPlane);	
  	renderer.render(sceneFigura, cameraFigura);
}