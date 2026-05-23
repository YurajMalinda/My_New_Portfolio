'use client';

import { motion } from 'framer-motion';

export default function About() {
  const tags = ['AI / ML', 'Mobile', 'Web', '3D / Unity', 'Design'];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left - Large Statement */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-glow">
              Curious builder.
              <br />
              Quiet experimenter.
            </h2>
          </div>
          
          {/* Right - Bio */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed text-text-muted">
              <p>
                Computer Science student at the University of Bedfordshire, based in Sri Lanka. 
                I work at the intersection of code, design, AI, and interactive experiences.
              </p>
              <p>
                Someone who builds at the edges of the technically possible — from machine learning 
                pipelines to mobile applications, from 3D worlds to web experiences that feel alive.
              </p>
              <p>
                Always exploring. Always learning. Always building something new.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-amber-glow/20 bg-amber-glow/5 text-amber-glow font-mono text-sm hoverable"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(232, 162, 84, 0.1)',
                    borderColor: 'rgba(232, 162, 84, 0.4)'
                  }}
                  viewport={{ once: true }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}