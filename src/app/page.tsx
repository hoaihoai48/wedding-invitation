'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import WeddingEnvelope from '@/components/WeddingEnvelope';
import MainContent from '@/components/MainContent';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      {/* 1. Main Content scrollable wedding invitation underneath */}
      <MainContent isOpened={isOpened} />

      {/* 2. Fixed 3D Wedding Envelope Overlay: Fades out smoothly when opened */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          opacity: isOpened ? 0 : 1,
          pointerEvents: isOpened ? 'none' : 'auto',
          transition: 'opacity 0.7s ease-out, visibility 0.7s ease-out',
          visibility: isOpened ? 'hidden' : 'visible',
        }}
      >
        <WeddingEnvelope onOpened={handleOpenEnvelope} />
      </Box>

      {/* Audio Disc Player */}
      <AudioPlayer isPlaying={isPlayingMusic} onToggle={handleToggleMusic} />
    </Box>
  );
}
