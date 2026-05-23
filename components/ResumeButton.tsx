'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumeButton() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      style={{ opacity }}
    >
      <motion.a
        href="/resume.pdf" // TODO: Replace with real resume PDF
        download
        className="flex items-center space-x-2 px-4 py-3 bg-amber-glow text-bg-dark rounded-full font-mono text-sm font-medium hoverable glow-amber"
        whileHover={{ 
          scale: 1.05,
          y: -2,
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3
        }}
      >
        <Download size={16} />
        <span>Resume</span>
      </motion.a>
    </motion.div>
  );
}