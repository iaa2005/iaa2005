let THREE = require('three');
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let geometry = new THREE.BoxGeometry(10, 10, 10)
let material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
})
let materiaRGB = new THREE.MeshNormalMaterial()

let cube = new THREE.Mesh(geometry, materiaRGB)
scene.add(cube)

camera.position.z = 25

function render() {
    requestAnimationFrame(render)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01  
    renderer.render(scene, camera)
}
render()