'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CoverProps {
  onOpen: () => void;
}

// Floating floral petal
function FloatingPetal({ delay, x, size }: { delay: number; x: string; size: number }) {
  const petals = ['🌸', '🌿', '✿', '❀', '🌺'];
  const petal = petals[Math.floor(Math.random() * petals.length)];
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-5%',
        left: x,
        fontSize: size,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        opacity: 0,
      }}
      animate={{
        y: ['0vh', '105vh'],
        rotate: [0, 180, 360],
        opacity: [0, 0.45, 0.45, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {petal}
    </motion.div>
  );
}

export default function Cover({ onOpen }: CoverProps) {
  const petals = [
    { delay: 0, x: '8%', size: 14 },
    { delay: 2, x: '22%', size: 12 },
    { delay: 1, x: '38%', size: 16 },
    { delay: 3, x: '54%', size: 13 },
    { delay: 0.5, x: '68%', size: 15 },
    { delay: 2.5, x: '82%', size: 12 },
    { delay: 4, x: '92%', size: 14 },
    { delay: 1.5, x: '3%', size: 11 },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflow: 'hidden',
        // Nền ivory ấm – không chói, như giấy thiệp thật
        background: 'linear-gradient(160deg, #fdfaf5 0%, #f7f0e6 40%, #f2ebe0 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Subtle background texture circles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
            top: '-180px',
            right: '-120px',
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(155,132,180,0.07) 0%, transparent 70%)',
            bottom: '-120px',
            left: '-80px',
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </Box>

      {/* Decorative corner floral – top left */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: 120, sm: 180 },
          height: { xs: 120, sm: 180 },
          opacity: 0.18,
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(155,132,180,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: { xs: 120, sm: 180 },
          height: { xs: 120, sm: 180 },
          opacity: 0.15,
          background:
            'radial-gradient(ellipse at 100% 100%, rgba(201,169,110,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating petals */}
      {petals.map((p, i) => (
        <FloatingPetal key={i} {...p} />
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 520, padding: '0 24px' }}
      >
        <Box
          sx={{
            background: 'rgba(255, 253, 248, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '28px',
            // Viền vàng đồng mảnh – như thiệp giấy cao cấp
            border: '1px solid rgba(201, 169, 110, 0.3)',
            boxShadow:
              '0 2px 0 0 rgba(201,169,110,0.15), 0 24px 60px rgba(61,47,30,0.08), 0 4px 16px rgba(155,132,180,0.08)',
            p: { xs: 5, sm: 7 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top gold accent line */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '15%',
              right: '15%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
              borderRadius: '0 0 2px 2px',
            }}
          />

          {/* Ornamental top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Typography
              sx={{
                color: '#c9a96e',
                fontSize: '1.1rem',
                letterSpacing: '0.5em',
                mb: 2,
                opacity: 0.8,
              }}
            >
              ✦ ✦ ✦
            </Typography>
          </motion.div>

          {/* Trân trọng kính mời */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#9b84b4',
                letterSpacing: '0.28em',
                fontSize: '0.68rem',
                display: 'block',
                mb: 2.5,
              }}
            >
              Trân trọng kính mời
            </Typography>
          </motion.div>

          {/* Couple names – dùng màu nâu ấm + điểm lavender, không gradient chói */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.2rem', sm: '4.5rem' },
                lineHeight: 1.08,
                color: '#6b5a8a',
                mb: 0.5,
              }}
            >
              Vũ
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.7, type: 'spring', stiffness: 180 }}
          >
            <FavoriteIcon sx={{ color: '#c9a96e', fontSize: 22, my: 0.75 }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.2rem', sm: '4.5rem' },
                lineHeight: 1.08,
                color: '#6b5a8a',
                mb: 3,
              }}
            >
              Nhím
            </Typography>
          </motion.div>

          {/* Divider – mảnh vàng đồng */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mx: 'auto',
              mb: 3,
              width: 'fit-content',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #c9a96e)',
              }}
            />
            <Typography sx={{ color: '#c9a96e', fontSize: '0.7rem', opacity: 0.8 }}>❧</Typography>
            <Box
              sx={{
                width: 40,
                height: '1px',
                background: 'linear-gradient(90deg, #c9a96e, transparent)',
              }}
            />
          </Box>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
          >
            <Typography
              variant="h5"
              sx={{ color: '#7a6652', mb: 0.5, fontStyle: 'italic', fontSize: { xs: '1rem', sm: '1.2rem' } }}
            >
              Thứ Bảy · 30 tháng 8 năm 2025
            </Typography>
            <Typography
              variant="body2"
              sx={{ letterSpacing: '0.22em', color: '#9b84b4', opacity: 0.9, mb: 4.5 }}
            >
              DIÊN KHÁNH · KHÁNH HÒA
            </Typography>
          </motion.div>

          {/* Open button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
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
                fontSize: '0.82rem',
                px: 6,
                py: 1.7,
                letterSpacing: '0.15em',
                background: 'linear-gradient(135deg, #b09cc8 0%, #9b84b4 100%)',
                boxShadow: '0 6px 24px rgba(155, 132, 180, 0.22)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9b84b4 0%, #7a6698 100%)',
                  boxShadow: '0 10px 32px rgba(155, 132, 180, 0.32)',
                },
              }}
            >
              💌 Mở thiệp
            </Button>
          </motion.div>

          {/* Bottom ornament */}
          <Box
            sx={{ position: 'absolute', bottom: 14, left: 18, color: '#c9a96e', fontSize: '1.2rem', opacity: 0.4 }}
          >
            ❧
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 14,
              right: 18,
              color: '#c9a96e',
              fontSize: '1.2rem',
              opacity: 0.4,
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
