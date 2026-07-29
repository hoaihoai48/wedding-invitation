'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface CoverProps {
  onOpen: () => void;
}

// Postmark wavy lines (stamp decoration)
function PostmarkLines() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {[28, 22, 26, 20].map((w, i) => (
        <Box
          key={i}
          sx={{
            width: w,
            height: '1.5px',
            background: 'rgba(201, 160, 64, 0.7)',
            borderRadius: '2px',
          }}
        />
      ))}
    </Box>
  );
}

export default function Cover({ onOpen }: CoverProps) {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflow: 'hidden',
        background: '#8B1C1C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Envelope flap triangle at top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: { xs: '22vw', sm: '160px' },
          background: '#7a1717',
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          zIndex: 2,
        }}
      />

      {/* Subtle texture overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '8px 8px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Gold border frame */}
      <Box
        sx={{
          position: 'absolute',
          inset: { xs: 12, sm: 20 },
          border: '1.5px solid rgba(201, 160, 64, 0.35)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Main card content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 4,
          width: '100%',
          maxWidth: 420,
          padding: '0 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* TÂN HÔN badge + stamp */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            mb: 2,
          }}
        >
          {/* TÂN HÔN label */}
          <Box
            sx={{
              border: '1.5px solid #C9A040',
              px: 1.5,
              py: 0.5,
              borderRadius: '2px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: '#C9A040',
              }}
            >
              TÂN HÔN
            </Typography>
          </Box>

          {/* Stamp area */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PostmarkLines />
            <Box
              sx={{
                width: 36,
                height: 36,
                border: '1.5px solid #C9A040',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ fontFamily: 'var(--font-oswald)', fontSize: '0.7rem', color: '#C9A040', fontWeight: 700, lineHeight: 1 }}>
                V
              </Typography>
              <Typography sx={{ fontFamily: 'var(--font-oswald)', fontSize: '0.7rem', color: '#C9A040', fontWeight: 700, lineHeight: 1 }}>
                T
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Couple illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: -8 }}
        >
          <Box sx={{ position: 'relative', width: { xs: 150, sm: 180 }, height: { xs: 170, sm: 200 }, flexShrink: 0 }}>
            <Image
              src="/images/couple.png"
              alt="Đôi uyên ương Hoài Vũ & Thục Trinh"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </Box>
        </motion.div>

        {/* Names area */}
        <Box sx={{ flex: 1, textAlign: 'center', width: '100%' }}>
          {/* Gold names */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: { xs: '2.4rem', sm: '3rem' },
                fontWeight: 700,
                color: '#C9A040',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0,0,0,0.25)',
              }}
            >
              HOÀI VŨ
            </Typography>

            <Typography
              sx={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                color: '#F5EDD4',
                opacity: 0.85,
                letterSpacing: '0.1em',
                my: 0.3,
              }}
            >
              &
            </Typography>

            <Typography
              sx={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: { xs: '2.4rem', sm: '3rem' },
                fontWeight: 700,
                color: '#C9A040',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                textShadow: '0 2px 8px rgba(0,0,0,0.25)',
              }}
            >
              THỤC TRINH
            </Typography>
          </motion.div>

          {/* Kính mời: slot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Box
              sx={{
                mt: 2.5,
                mx: 'auto',
                width: '80%',
                background: '#F5EDD4',
                borderRadius: '4px',
                px: 2,
                py: 1.2,
                textAlign: 'left',
                position: 'relative',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-dancing), cursive',
                  fontSize: '0.95rem',
                  color: '#3d1a1a',
                  mb: 1,
                }}
              >
                Kính mời:
              </Typography>
              <Box sx={{ borderBottom: '1px dotted #8B1C1C', mb: 0.8 }} />
              <Box sx={{ borderBottom: '1px dotted #8B1C1C' }} />
            </Box>

            {/* Open button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ marginTop: 20 }}
            >
              <Box
                id="open-invitation-btn"
                onClick={onOpen}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  background: '#C9A040',
                  color: '#3d1a1a',
                  px: 4,
                  py: 1.5,
                  borderRadius: '2px',
                  fontFamily: 'var(--font-oswald)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: '#e0b045',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
                  },
                }}
              >
                💌 MỞ THIỆP
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}
