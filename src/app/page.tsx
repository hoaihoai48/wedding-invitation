'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cover from '@/components/Cover';
import MainContent from '@/components/MainContent';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenCover = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.15,
              y: -50,
              transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            style={{ width: '100%', minHeight: '100vh' }}
          >
            <Cover onOpen={handleOpenCover} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', minHeight: '100vh' }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Player */}
      <AudioPlayer isPlaying={isPlayingMusic} onToggle={handleToggleMusic} />
    </>
  );
}
