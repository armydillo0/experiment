var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x262336);
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);


//MATERIALS
var material = new THREE.MeshPhongMaterial({
color:0xff4646,
emissive: 0xff9888,
side: THREE.DoubleSide,
specular:0xffffff,
shininess:120,
});




var geometry = new THREE.SphereGeometry( 7, 32, 32);
var sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0,0,-10)
sphere.castShadow = true;
scene.add( sphere );

camera.position.z = 30;

window.addEventListener('resize', onWindowResize, false );

var animate = function () {
	requestAnimationFrame( animate );

	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
};

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}

animate();