'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      title: 'University of Bedfordshire',
      role: 'BSc (Hons) Computer Science',
      period: '2022 – Present',
      description: 'Studying advanced computer science concepts with focus on AI/ML, software engineering, and interactive systems.'
    },
    {
      title: 'FleetGuard AI',
      role: 'Risk Manager & Frontend Developer',
      period: 'Group Project',
      description: 'Led risk assessment and developed user interfaces for AI-powered fleet management system.'
    },
    {
      title: 'Independent Projects',
      role: 'Full-Stack Developer & Designer',
      period: '2020 – Present',
      description: 'Building cross-platform applications, AI/ML systems, and interactive 3D experiences.'
    }
  ];

  return (
    <section id="experience" className="py-32 px-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-light mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The path
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-amber-glow/20">
            <motion.div
              className="w-full bg-amber-glow origin-top"
              style={{ height: lineHeight }}
            />
          </div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1] 
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-amber-glow rounded-full border-4 border-bg-dark glow-amber" />
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-amber-glow font-mono text-sm">
                      {exp.role}
                    </p>
                  </div>
                  
                  <p className="text-text-muted text-sm font-mono">
                    {exp.period}
                  </p>
                  
                  <p className="text-text-muted leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}