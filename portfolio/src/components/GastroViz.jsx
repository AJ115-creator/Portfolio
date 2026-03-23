import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const GastroViz = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);
    sceneRef.current = scene;

    // --- Lighting ---
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    const pointLight1 = new THREE.PointLight(0x00ff88, 2, 20);
    pointLight1.position.set(3, 3, 3);
    const pointLight2 = new THREE.PointLight(0xff4488, 1.5, 20);
    pointLight2.position.set(-3, -2, 2);
    const pointLight3 = new THREE.PointLight(0x4488ff, 1.2, 20);
    pointLight3.position.set(0, -3, 3);
    scene.add(ambient, pointLight1, pointLight2, pointLight3);

    // ---------------------------------------------------------------
    // Main colon cross-section (torus = ring shape)
    // ---------------------------------------------------------------
    const colonGeo = new THREE.TorusGeometry(1.5, 0.35, 32, 80);
    const colonMat = new THREE.MeshPhongMaterial({
      color: 0xe8a0b0,
      emissive: 0x3a1020,
      shininess: 60,
      transparent: true,
      opacity: 0.85,
    });
    const colonMesh = new THREE.Mesh(colonGeo, colonMat);
    colonMesh.rotation.x = Math.PI / 6;
    scene.add(colonMesh);

    // ---------------------------------------------------------------
    // Polyp mass (irregular blob using deformed sphere)
    // ---------------------------------------------------------------
    const polypGeo = new THREE.SphereGeometry(0.38, 32, 32);
    // Deform vertices to make it look organic
    const posAttr = polypGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);
      const noise =
        Math.sin(x * 8 + 1.2) * 0.06 +
        Math.cos(y * 7 - 0.9) * 0.05 +
        Math.sin(z * 9 + 2.1) * 0.04;
      posAttr.setXYZ(i, x + noise, y + noise, z + noise);
    }
    polypGeo.computeVertexNormals();

    const polypMat = new THREE.MeshPhongMaterial({
      color: 0xff3366,
      emissive: 0x880022,
      shininess: 90,
    });
    const polypMesh = new THREE.Mesh(polypGeo, polypMat);
    polypMesh.position.set(0, 1.45, 0.15);
    scene.add(polypMesh);

    // ---------------------------------------------------------------
    // Segmentation mask / highlight ring around the polyp
    // ---------------------------------------------------------------
    const maskGeo = new THREE.TorusGeometry(0.55, 0.025, 16, 60);
    const maskMat = new THREE.MeshBasicMaterial({ color: 0x00ffaa, transparent: true, opacity: 0.9 });
    const maskMesh = new THREE.Mesh(maskGeo, maskMat);
    maskMesh.position.copy(polypMesh.position);
    maskMesh.rotation.x = Math.PI / 2;
    scene.add(maskMesh);

    // ---------------------------------------------------------------
    // Scanning beam (horizontal plane that sweeps down)
    // ---------------------------------------------------------------
    const scanGeo = new THREE.PlaneGeometry(4, 0.05);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x00ffaa,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const scanMesh = new THREE.Mesh(scanGeo, scanMat);
    scanMesh.position.set(0, 2, 0.5);
    scene.add(scanMesh);

    // ---------------------------------------------------------------
    // Corner bracket dashes (bounding-box corners)
    // ---------------------------------------------------------------
    const bracketMat = new THREE.LineBasicMaterial({ color: 0x00ffaa });
    const bracketOffsets = [
      [1, 1], [-1, 1], [1, -1], [-1, -1],
    ];
    bracketOffsets.forEach(([sx, sy]) => {
      const pts = [
        new THREE.Vector3(sx * 0.7, polypMesh.position.y + sy * 0.6, 0.4),
        new THREE.Vector3(sx * 0.55, polypMesh.position.y + sy * 0.6, 0.4),
        new THREE.Vector3(sx * 0.55, polypMesh.position.y + sy * 0.6, 0.4),
        new THREE.Vector3(sx * 0.55, polypMesh.position.y + sy * 0.45, 0.4),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      scene.add(new THREE.Line(geo, bracketMat));
    });

    // ---------------------------------------------------------------
    // Floating data particle field
    // ---------------------------------------------------------------
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x44ddaa,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---------------------------------------------------------------
    // Label — "POLYP DETECTED" text via canvas texture
    // ---------------------------------------------------------------
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 384, 64);
    ctx.font = 'bold 22px monospace';
    ctx.fillStyle = '#00ffaa';
    ctx.fillText('▶ POLYP DETECTED', 16, 40);
    ctx.fillStyle = '#ffffff44';
    ctx.font = '14px monospace';
    ctx.fillText('Confidence: 97.3%  |  Dice: 0.92', 16, 58);

    const labelTex = new THREE.CanvasTexture(canvas);
    const labelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 0.46),
      new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, side: THREE.DoubleSide })
    );
    labelMesh.position.set(-0.05, -1.65, 0.5);
    scene.add(labelMesh);

    // ---------------------------------------------------------------
    // GSAP Animations
    // ---------------------------------------------------------------
    // Scanning beam loop
    gsap.to(scanMesh.position, {
      y: -2,
      duration: 2.5,
      repeat: -1,
      ease: 'none',
      onRepeat: () => { scanMesh.position.y = 2; },
    });

    // Pulsing mask ring
    gsap.to(maskMesh.scale, {
      x: 1.18,
      y: 1.18,
      z: 1.18,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(maskMat, {
      opacity: 0.2,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Polyp subtle breathe
    gsap.to(polypMesh.scale, {
      x: 1.07,
      y: 1.07,
      z: 1.07,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Slow colon rotation
    gsap.to(colonMesh.rotation, {
      z: Math.PI * 2,
      duration: 18,
      repeat: -1,
      ease: 'none',
    });

    // Particle drift
    gsap.to(particles.rotation, {
      y: Math.PI * 2,
      duration: 22,
      repeat: -1,
      ease: 'none',
    });

    // ---------------------------------------------------------------
    // Render loop
    // ---------------------------------------------------------------
    let t = 0;
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      t += 0.01;
      // gentle camera sway
      camera.position.x = Math.sin(t * 0.3) * 0.15;
      camera.position.y = Math.cos(t * 0.2) * 0.1;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    // ---------------------------------------------------------------
    // Resize handler
    // ---------------------------------------------------------------
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
      gsap.killTweensOf([scanMesh.position, maskMesh.scale, maskMat, polypMesh.scale, colonMesh.rotation, particles.rotation]);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    />
  );
};

export default GastroViz;
