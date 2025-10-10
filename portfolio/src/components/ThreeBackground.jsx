import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000, theme }) {
  const mesh = useRef();
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={mesh} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#60A5FA' : '#3B82F6'}
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingGeometry({ theme }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial 
        color={theme === 'dark' ? '#34D399' : '#10B981'} 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
}

function AnimatedSphere({ theme }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -3]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial 
        color={theme === 'dark' ? '#F472B6' : '#EC4899'} 
        transparent 
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

function WireframeCube({ theme }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, -4]}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial 
        color={theme === 'dark' ? '#A78BFA' : '#8B5CF6'} 
        transparent 
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

export default function ThreeBackground({ theme = 'light' }) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.2} />
        <Particles count={500} theme={theme} />
        <FloatingGeometry theme={theme} />
        <AnimatedSphere theme={theme} />
      </Canvas>
    </div>
  );
}
