'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ opacity }}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div 
        className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-full"
        style={{ 
          backgroundColor: 'rgba(8, 12, 10, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(232, 162, 84, 0.1)'
        }}
      >
        <motion.div
          className="font-display text-lg font-medium text-amber-glow hoverable"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          Yuraj Malinda
        </motion.div>
        
        <div className="flex space-x-8">
          {[
            { name: 'About', id: 'about' },
            { name: 'Specimens', id: 'projects' },
            { name: 'Tools', id: 'skills' },
            { name: 'Path', id: 'experience' },
            { name: 'Contact', id: 'contact' },
          ].map((item) => (
            <motion.button
              key={item.name}
              className="font-display text-text-muted hover:text-text-primary tracking-wide hoverable"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}