'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import SporeParticles from './SporeParticles';
import FloatingForms from './FloatingForms';
import MouseParallaxRig from './MouseParallaxRig';

export default function ForestHero() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 75 }}
      performance={{ min: 0.5 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.1} color="#e8a254" />
      <pointLight position={[0, 2, 3]} intensity={0.3} color="#e8a254" />
      
      <Suspense fallback={null}>
        <MouseParallaxRig>
          <SporeParticles count={700} />
          <FloatingForms />
        </MouseParallaxRig>
      </Suspense>
    </Canvas>
  );
}