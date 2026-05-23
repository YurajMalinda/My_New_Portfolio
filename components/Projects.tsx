'use client';

import { motion } from 'framer-motion';
import SpecimenCard from './SpecimenCard';
import { projects } from '@/lib/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-light mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Specimens
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1] 
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpecimenCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}