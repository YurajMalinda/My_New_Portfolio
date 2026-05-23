'use client';

import { motion } from 'framer-motion';
import ForestHero from './ForestHero';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Forest Background */}
      <div className="absolute inset-0 z-0">
        <ForestHero />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-center mb-6 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Yuraj Malinda
        </motion.h1>
        
        <motion.p
          className="font-display text-xl md:text-2xl text-center text-text-muted italic max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          I build things that feel alive
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-amber-glow rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-amber-glow rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}