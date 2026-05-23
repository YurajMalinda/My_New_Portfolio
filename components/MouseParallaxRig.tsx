'use client';

import { useRef, ReactNode } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface MouseParallaxRigProps {
  children: ReactNode;
}

export default function MouseParallaxRig({ children }: MouseParallaxRigProps) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (group.current) {
      const x = (state.mouse.x * viewport.width) / 2;
      const y = (state.mouse.y * viewport.height) / 2;
      
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x * 0.1, 0.02);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y * 0.1, 0.02);
    }
  });

  return <group ref={group}>{children}</group>;
}