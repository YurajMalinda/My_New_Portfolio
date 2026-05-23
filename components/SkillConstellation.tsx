'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '@/lib/skillsData';

function SkillNode({ skill, isHovered, onHover }: { 
  skill: any; 
  isHovered: boolean; 
  onHover: (name: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);
  
  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => onHover(skill.name)}
        onPointerLeave={() => onHover(null)}
      >
        <sphereGeometry args={[skill.size]} />
        <meshBasicMaterial
          color="#e8a254"
          transparent
          opacity={isHovered ? 1 : 0.7}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh scale={1.5}>
        <sphereGeometry args={[skill.size]} />
        <meshBasicMaterial
          color="#e8a254"
          transparent
          opacity={isHovered ? 0.3 : 0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Label */}
      <Text
        ref={textRef}
        position={[0, skill.size + 0.3, 0]}
        fontSize={0.15}
        color={isHovered ? "#f0ede6" : "#8a9e8d"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Regular.woff"
      >
        {skill.name}
      </Text>
    </group>
  );
}

function ConstellationScene() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { mouse, viewport } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Auto rotation
      groupRef.current.rotation.y += 0.0005;
      
      // Mouse parallax
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        y * 0.1,
        0.02
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        x * 0.05,
        0.02
      );
    }
  });

  // Create connection lines
  const connectionLines = [];
  for (const skill of skills) {
    for (const connectionName of skill.connections) {
      const connectedSkill = skills.find(s => s.name === connectionName);
      if (connectedSkill) {
        const points = [
          new THREE.Vector3(...skill.position),
          new THREE.Vector3(...connectedSkill.position)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        connectionLines.push(
          <line key={`${skill.name}-${connectionName}`} geometry={geometry}>
            <lineBasicMaterial
              color="#e8a254"
              transparent
              opacity={hoveredSkill === skill.name || hoveredSkill === connectionName ? 0.6 : 0.2}
            />
          </line>
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {connectionLines}
      
      {/* Skill nodes */}
      {skills.map((skill) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          isHovered={hoveredSkill === skill.name}
          onHover={setHoveredSkill}
        />
      ))}
    </group>
  );
}

export default function SkillConstellation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Mobile fallback - 2D glowing text grid
    return (
      <div className="h-80 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 text-center">
          {skills.slice(0, 9).map((skill, index) => (
            <div
              key={skill.name}
              className="text-amber-glow font-mono text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#e8a254" />
        <ConstellationScene />
      </Canvas>
    </div>
  );
}