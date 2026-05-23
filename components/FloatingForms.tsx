'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingForms() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0003;
      group.current.rotation.x += 0.0001;
    }
  });

  return (
    <group ref={group}>
      {/* Icosahedron */}
      <mesh position={[-8, 2, -15]} rotation={[0.5, 0, 0.3]}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial
          color="#111a13"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Torus Knot */}
      <mesh position={[6, -3, -12]} rotation={[0.2, 0.8, 0]}>
        <torusKnotGeometry args={[1.5, 0.5, 64, 8]} />
        <meshBasicMaterial
          color="#111a13"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Octahedron */}
      <mesh position={[0, 4, -20]} rotation={[0.8, 0.2, 0.5]}>
        <octahedronGeometry args={[1.8]} />
        <meshBasicMaterial
          color="#111a13"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      
      {/* Torus */}
      <mesh position={[-5, -2, -18]} rotation={[0.3, 0.6, 0.1]}>
        <torusGeometry args={[2, 0.8, 8, 16]} />
        <meshBasicMaterial
          color="#111a13"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}