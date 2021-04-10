// import * as THREE from 'three'

let scene = new THREE.Scene()

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

let geometry = new THREE.BoxGeometry(10, 10, 10)

// let material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00
// })
// let materialRGB = new THREE.MeshNormalMaterial()

let material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0x234355
})

let cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 25

function render() {
    requestAnimationFrame(render)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01  
    renderer.render(scene, camera)
}

render()