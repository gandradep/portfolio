import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';



const Cover = () => {
  const sceneRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 2
    scene.add(camera)
    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    sceneRef.current.appendChild(renderer.domElement);

    //texture
    const textureLoader = new THREE.TextureLoader();
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMapTexture = cubeTextureLoader.load([
      '/images/cover/px.png',
      '/images/cover/nx.png',
      '/images/cover/py.png',
      '/images/cover/ny.png',
      '/images/cover/pz.png',
      '/images/cover/nz.png'
    ]);
    // Create a cube and add it to the scene
    const geometry = new THREE.SphereGeometry(1, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      envMap: environmentMapTexture,
      metalness: 0.8,
      roughness: 0.1
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = sizes.width * 0.003;
    mesh.scale.y = sizes.height * 0.003;
    scene.add(mesh);

    camera.position.z = 5;

window.addEventListener('resize', () =>
  {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    mesh.scale.x = sizes.width * 0.0025;
    mesh.scale.y = sizes.height * 0.0025;

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  });


    // Animation/render loop
  const animate = () => {


    // Rotate the cube
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.007;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
  }, []);

  return <div className="cover" ref={sceneRef} />;
};

export default Cover;


