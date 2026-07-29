'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface CoverProps {
  onOpen: () => void;
}

// Animated floating petal component
function FloatingPetal({ delay, x, size }: { delay: number; x: string; size: number }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-10%',
        left: x,
        fontSize: size,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
      }}
      animate={{
        y: ['0vh', '110vh'],
        rotate: [0, 360],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      🌸
    </motion.div>
  );
}

export default function Cover({ onOpen }: CoverProps) {
  const petals = [
    { delay: 0, x: '10%', size: 18 },
    { delay: 1.5, x: '25%', size: 14 },
    { delay: 0.8, x: '40%', size: 20 },
    { delay: 2.2, x: '55%', size: 16 },
    { delay: 0.3, x: '70%', size: 22 },
    { delay: 1.8, x: '85%', size: 15 },
    { delay: 3.0, x: '92%', size: 18 },
    { delay: 2.5, x: '5%', size: 13 },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 60% 30%, #f3e8ff 0%, #ede9fe 30%, #fce7f3 60%, #fff0f9 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Animated background orbs */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-150px',
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(249,168,212,0.15) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </Box>

      {/* Floating petals */}
      {petals.map((p, i) => (
        <FloatingPetal key={i} {...p} />
      ))}

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 560, padding: '0 24px' }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '32px',
            border: '1px solid rgba(192, 132, 252, 0.25)',
            boxShadow:
              '0 32px 80px rgba(139, 92, 246, 0.12), 0 8px 24px rgba(139, 92, 246, 0.08)',
            p: { xs: 5, sm: 7 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative top ornament */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #c084fc, #f9a8d4, #c084fc)',
            }}
          />

          {/* Sparkle icon */}
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 32, mb: 1 }} />
          </motion.div>

          {/* Announcement */}
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.3em',
              fontSize: '0.7rem',
              display: 'block',
              mb: 1,
              fontFamily: '"Lato", sans-serif',
            }}
          >
            Trân trọng kính mời
          </Typography>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.5rem', sm: '5rem' },
                lineHeight: 1.05,
                background: 'linear-gradient(135deg, #9333ea 0%, #c084fc 40%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 0.5,
              }}
            >
              Vũ
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 200 }}
          >
            <FavoriteIcon
              sx={{ color: 'secondary.main', fontSize: 28, my: 0.5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.5rem', sm: '5rem' },
                lineHeight: 1.05,
                background: 'linear-gradient(135deg, #ec4899 0%, #f9a8d4 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 3,
              }}
            >
              Nhím
            </Typography>
          </motion.div>

          {/* Divider */}
          <Box
            sx={{
              width: 80,
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent, #c084fc, transparent)',
              mx: 'auto',
              mb: 3,
            }}
          />

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 0.5, fontStyle: 'italic' }}
            >
              Thứ Bảy · 30 tháng 8 năm 2025
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ letterSpacing: '0.2em', opacity: 0.8, mb: 4 }}
            >
              DIÊN KHÁNH · KHÁNH HÒA
            </Typography>
          </motion.div>

          {/* Open Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              id="open-invitation-btn"
              variant="contained"
              color="primary"
              size="large"
              onClick={onOpen}
              sx={{
                fontSize: '0.9rem',
                px: 6,
                py: 1.8,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #ec4899 100%)',
                boxShadow: '0 8px 32px rgba(192, 132, 252, 0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #db2777 100%)',
                  boxShadow: '0 12px 40px rgba(192, 132, 252, 0.5)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              💌 Mở thiệp
            </Button>
          </motion.div>

          {/* Decorative bottom corner flourishes */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              color: 'primary.light',
              fontSize: '1.5rem',
              opacity: 0.6,
            }}
          >
            ❧
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              color: 'primary.light',
              fontSize: '1.5rem',
              opacity: 0.6,
              transform: 'scaleX(-1)',
            }}
          >
            ❧
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
