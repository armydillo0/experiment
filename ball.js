var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x262336);
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight(0xffffff, 0.2);
//scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);
const light3 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.5 );
scene.add( light3 );


//MATERIALS
var material = new THREE.MeshPhongMaterial({
color:0xff9888,
emissive: 0xff9888,
side: THREE.DoubleSide,
specular:0xffffff,
shininess:100,
});

var geometry = new THREE.BoxGeometry( 10,10,10);
var cube = new THREE.Mesh( geometry, material );
cube.position.set(10,0,-10)
cube.castShadow = true;
scene.add( cube );

var geometry2 = new THREE.OctahedronGeometry(10);
var octo = new THREE.Mesh( geometry2, material );
octo.position.set(-10,10,-30)
octo.castShadow = true;
scene.add( octo );

var geometry3 = new THREE.OctahedronGeometry(7,20,32);
var sphere = new THREE.Mesh( geometry3, material );
sphere.position.set(-10,-15,-30)
sphere.castShadow = true;
scene.add( sphere );

camera.position.z = 30;

window.addEventListener('resize', onWindowResize, false );

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	octo.rotation.x -= 0.04;
	octo.rotation.y -= 0.01;
//	sphere.rotation.x -= 0.04;
//	sphere.rotation.y -= 0.01;

	renderer.render( scene, camera );
};

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}

animate();