'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SpecimenMeshProps {
  shape: 'icosahedron' | 'torus' | 'octahedron' | 'torusknot';
  glowColor: string;
  isHovered: boolean;
}

function SpecimenMesh({ shape, glowColor, isHovered }: SpecimenMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      const speed = isHovered ? 0.012 : 0.004;
      meshRef.current.rotation.y += speed;
      meshRef.current.rotation.x += speed * 0.5;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 8, 16]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1.2]} />;
      case 'torusknot':
        return <torusKnotGeometry args={[0.8, 0.3, 64, 8]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshBasicMaterial
        color={glowColor}
        transparent
        opacity={isHovered ? 0.8 : 0.6}
        wireframe
      />
      {/* Glow effect */}
      <mesh scale={1.1}>
        {getGeometry()}
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={isHovered ? 0.3 : 0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </mesh>
  );
}

interface SpecimenObjectProps {
  shape: 'icosahedron' | 'torus' | 'octahedron' | 'torusknot';
  glowColor: string;
  isHovered: boolean;
}

export default function SpecimenObject({ shape, glowColor, isHovered }: SpecimenObjectProps) {
  return (
    <Canvas
      frameloop={isHovered ? "always" : "demand"}
      dpr={[1, 1.5]}
      style={{ width: 180, height: 180, background: 'transparent' }}
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <pointLight position={[2, 3, 2]} intensity={0.8} color={glowColor} />
      <ambientLight intensity={0.2} />
      <SpecimenMesh shape={shape} glowColor={glowColor} isHovered={isHovered} />
    </Canvas>
  );
}