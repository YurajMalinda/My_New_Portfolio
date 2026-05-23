'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SporeParticlesProps {
  count: number;
}

export default function SporeParticles({ count }: SporeParticlesProps) {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Color (amber or teal)
      const isAmber = Math.random() > 0.3;
      if (isAmber) {
        colors[i * 3] = 0.91; // R
        colors[i * 3 + 1] = 0.64; // G
        colors[i * 3 + 2] = 0.33; // B
      } else {
        colors[i * 3] = 0.5; // R
        colors[i * 3 + 1] = 1.0; // G
        colors[i * 3 + 2] = 0.83; // B
      }
      
      // Size variation
      sizes[i] = Math.random() * 3 + 1;
    }
    
    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Organic drift upward with noise
        positions[i3 + 1] += (Math.random() - 0.5) * 0.01 + 0.005;
        
        // Add some horizontal drift
        positions[i3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
        positions[i3 + 2] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001;
        
        // Reset particles that drift too high
        if (positions[i3 + 1] > 10) {
          positions[i3 + 1] = -10;
          positions[i3] = (Math.random() - 0.5) * 20;
          positions[i3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesPosition.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particlesPosition.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}