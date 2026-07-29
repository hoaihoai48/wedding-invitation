'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from '@/components/Cover';
import MainContent from '@/components/MainContent';

export default function HomePage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="cover"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -60,
              scale: 0.97,
              filter: 'blur(4px)',
            }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 100 }}
          >
            <Cover onOpen={() => setIsOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
