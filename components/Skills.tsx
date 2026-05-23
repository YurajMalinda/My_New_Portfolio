'use client';

import { motion } from 'framer-motion';
import SkillConstellation from './SkillConstellation';
import { skills } from '@/lib/skillsData';

export default function Skills() {
  const skillGroups = {
    'Web': ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    'Mobile': ['Flutter', 'i18next'],
    'AI/ML': ['Python', 'Keras', 'TFLite'],
    'Creative': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    'Core': ['Java', 'Git', 'SQL', 'Unity 3D', 'Firebase']
  };

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-light mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Tools of the craft
        </motion.h2>
        
        {/* 3D Constellation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillConstellation />
        </motion.div>
        
        {/* Accessibility Fallback - 2D Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skillGroups).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl text-amber-glow">
                {category}
              </h3>
              <div className="space-y-2">
                {categorySkills.map((skill) => (
                  <div
                    key={skill}
                    className="text-text-muted font-mono text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}