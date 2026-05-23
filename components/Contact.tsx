'use client';

import { motion } from 'framer-motion';
import { GitFork as Github, Link as Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const links = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#', // TODO: Replace with real GitHub URL
      color: '#e8a254'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#', // TODO: Replace with real LinkedIn URL
      color: '#7fffd4'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@yurajmalinda.com', // TODO: Replace with real email
      color: '#e8a254'
    }
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-light mb-8 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Find me
        </motion.h2>
        
        <motion.p
          className="font-display text-xl md:text-2xl text-text-muted mb-16 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Open to collaborations, ideas, and conversations.
        </motion.p>
        
        <div className="flex justify-center space-x-12">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center space-y-3 hoverable"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1] 
              }}
              whileHover={{ 
                y: -3,
                scale: 1.05,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className="p-4 rounded-full border-2 transition-all duration-300"
                style={{
                  borderColor: `${link.color}40`,
                  backgroundColor: `${link.color}10`,
                }}
              >
                <link.icon 
                  size={32} 
                  style={{ color: link.color }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <span 
                className="font-display text-lg font-medium transition-colors duration-300"
                style={{ color: link.color }}
              >
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}