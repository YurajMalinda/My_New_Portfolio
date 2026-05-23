'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  const placeholderPosts = [
    {
      title: 'Building with Intent',
      excerpt: 'Thoughts on creating technology that feels alive and purposeful.',
      date: 'Coming Soon'
    },
    {
      title: 'The Art of Organic Code',
      excerpt: 'How natural patterns inspire better software architecture.',
      date: 'Coming Soon'
    },
    {
      title: 'Exploring the Edges',
      excerpt: 'Adventures in AI, 3D, and the technically impossible.',
      date: 'Coming Soon'
    }
  ];

  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-light mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Field notes
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {placeholderPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-surface/50 rounded-lg p-6 border border-amber-glow/10 hoverable"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1] 
              }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(232, 162, 84, 0.3)',
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-4">
                <h3 className="font-display text-xl font-medium text-text-primary">
                  {post.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-amber-glow/10">
                  <span className="text-amber-glow font-mono text-sm">
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted italic">
            Writing coming soon — thoughts on building, design, and exploration
          </p>
        </motion.div>
      </div>
    </section>
  );
}