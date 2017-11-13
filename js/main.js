const element = "#scene";
const fov = 75;
const near = 0.1;
const far = 1000;

function initializeGeometry (scene) {
    var mesh = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    material.wireframe = true;
    var cube = new THREE.Mesh(mesh, material);

    geometry = {"cube": cube};
    scene.add(cube);

    return geometry;
}

function main() {
    var parent = $(element);
    var width = parent.width();
    var height = parent.height();

    var renderer = new THREE.WebGLRenderer();

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(fov, width/height, near, far);
    camera.position.z = 5;

    var controls = new THREE.OrbitControls(camera);

    renderer.setSize(width, height);
    parent[0].appendChild(renderer.domElement);

    $(window).resize(function() {
        var newWidth = parent.width();
        var newHeight = parent.height();
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        console.log("Resized to " + newWidth + " " + newHeight + " New aspect: " + camera.aspect);
        renderer.render(scene, camera);
    });


    geometry = initializeGeometry(scene);
    renderer.render(scene, camera);
}

window.onload = main;