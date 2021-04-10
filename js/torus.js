// import * as THREE from 'three'

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x262626)

let spotLight = new THREE.SpotLight(0xeeeece)
spotLight.position.set(1000, 1000, 1000)
scene.add(spotLight)

let spotLight2 = new THREE.SpotLight(0xffffff);
spotLight2.position.set( -200, -200, -200);
scene.add(spotLight2);

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
let renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


let geometry = new THREE.TorusKnotGeometry(10, 2.7, 200, 15, 2, 3)
let material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
let materialRGB = new THREE.MeshNormalMaterial({ wireframe: true })

let torusKnot = new THREE.Mesh(geometry, materialRGB)
scene.add(torusKnot)

camera.position.z = 45
camera.position.y = 4


function render() {
    requestAnimationFrame(render)
    torusKnot.rotation.x += 0.01
    torusKnot.rotation.y += 0.01  
    renderer.render(scene, camera)
}

render()