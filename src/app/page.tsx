'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import WeddingEnvelope from '@/components/WeddingEnvelope';
import MainContent from '@/components/MainContent';
import AudioPlayer from '@/components/AudioPlayer';
import { getInvitationConfig } from '@/config/invitation';

export default function Home() {
  const searchSnapshot = React.useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => '',
  );
  const invitationSide = new URLSearchParams(searchSnapshot).get('side');
  const invitation = getInvitationConfig(invitationSide);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Sync body overflow to ensure no scrollbar is rendered before opening the envelope
  React.useEffect(() => {
    if (!isOpened) {
      // Khoá scroll cả html lẫn body khi hiện phong bì
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Mở khoá và reset về top khi chuyển vào trong thiệp
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  // Gentle cinematic auto-scroll after the envelope opens.
  React.useEffect(() => {
    if (!isOpened) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrame = 0;
    let timer = 0;
    let startedAt = 0;
    let startY = 0;
    let stopped = false;
    const START_DELAY = 1200;
    const DURATION = 60000;
    const TARGET_FRACTION = 0.92;

    const stopAutoScroll = () => {
      if (stopped) return;
      stopped = true;
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (timer) window.clearTimeout(timer);
      window.removeEventListener('wheel', stopOnWheel);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('keydown', stopOnKeyDown);
      window.removeEventListener('click', stopOnInteractiveClick);
    };

    const stopOnWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > 0 || Math.abs(event.deltaX) > 0) {
        stopAutoScroll();
      }
    };

    const stopOnKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = new Set([
        'ArrowDown',
        'ArrowUp',
        'PageDown',
        'PageUp',
        'Home',
        'End',
        ' ',
      ]);
      if (scrollKeys.has(event.key)) stopAutoScroll();
    };

    const scroll = (now: number) => {
      if (stopped) return;
      if (startedAt === 0) {
        startedAt = now;
        startY = window.scrollY;
      }

      const maxScrollY = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      const targetY = maxScrollY * TARGET_FRACTION;
      const progress = Math.min((now - startedAt) / DURATION, 1);
      const easedProgress = progress * progress * (3 - 2 * progress);
      const nextY = startY + (targetY - startY) * easedProgress;

      window.scrollTo(0, nextY);
      if (progress < 1 && Math.abs(targetY - nextY) > 0.5) {
        animationFrame = requestAnimationFrame(scroll);
      }
    };

    const stopOnInteractiveClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, label, [role="button"]')) {
        stopAutoScroll();
      }
    };

    window.addEventListener('wheel', stopOnWheel, { passive: true });
    window.addEventListener('touchmove', stopAutoScroll, { passive: true });
    window.addEventListener('keydown', stopOnKeyDown);
    window.addEventListener('click', stopOnInteractiveClick);
    timer = window.setTimeout(() => {
      if (!stopped) animationFrame = requestAnimationFrame(scroll);
    }, START_DELAY);

    return () => {
      stopped = true;
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (timer) window.clearTimeout(timer);
      window.removeEventListener('wheel', stopOnWheel);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('keydown', stopOnKeyDown);
      window.removeEventListener('click', stopOnInteractiveClick);
    };
  }, [isOpened]);
  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: isOpened ? 'visible' : 'hidden',
      }}
    >
      {/* 1. Main Content scrollable wedding invitation underneath */}
      <MainContent isOpened={isOpened} invitation={invitation} />

      {/* 2. Fixed 3D Wedding Envelope Overlay: Fades out smoothly when opened */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          opacity: isOpened ? 0 : 1,
          transform: isOpened ? 'scale(1.08)' : 'scale(1)',
          pointerEvents: isOpened ? 'none' : 'auto',
          transition: 'opacity 0.95s cubic-bezier(0.4, 0, 0.2, 1), transform 0.95s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.95s ease-out',
          visibility: isOpened ? 'hidden' : 'visible',
        }}
      >
        <WeddingEnvelope onOpened={handleOpenEnvelope} invitation={invitation} />
      </Box>

      {/* Audio Disc Player */}
      <AudioPlayer isPlaying={isPlayingMusic} onToggle={handleToggleMusic} />
    </Box>
  );
}
