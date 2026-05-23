'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SpecimenObject from './SpecimenObject';
import { Project } from '@/lib/projectsData';
import { ExternalLink } from 'lucide-react';

interface SpecimenCardProps {
  project: Project;
}

export default function SpecimenCard({ project }: SpecimenCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-surface rounded-lg overflow-hidden border border-amber-glow/10 hoverable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        borderColor: 'rgba(232, 162, 84, 0.4)',
        y: -5,
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* 3D Object Container */}
      <div className="flex justify-center items-center py-8 bg-gradient-to-b from-bg-dark/50 to-surface">
        <SpecimenObject 
          shape={project.shape} 
          glowColor={project.glowColor}
          isHovered={isHovered}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-display text-2xl font-medium text-text-primary">
            {project.name}
          </h3>
          <motion.div
            className="text-amber-glow opacity-60 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink size={20} />
          </motion.div>
        </div>
        
        <p className="text-text-muted leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-amber-glow font-mono">
            {project.role}
          </span>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-amber-glow/10 text-amber-glow rounded border border-amber-glow/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}