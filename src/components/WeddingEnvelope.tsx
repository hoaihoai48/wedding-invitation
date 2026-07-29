'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

interface WeddingEnvelopeProps {
  onOpened?: () => void;
}

export default function WeddingEnvelope({ onOpened }: WeddingEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (onOpened) {
        setTimeout(() => {
          onOpened();
        }, 1800);
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(165deg, #4a3428 0%, #352518 45%, #241a12 100%)',
        overflow: 'hidden',
        px: 2,
      }}
    >
      {/* Ambient Falling Confetti / Red Particles */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              top: '-20px',
              left: `${(i + 1) * 7.8}%`,
              width: i % 2 === 0 ? '8px' : '12px',
              height: i % 2 === 0 ? '8px' : '12px',
              backgroundColor: i % 3 === 0 ? '#b82323' : '#d4af37',
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              opacity: 0.6,
              animation: `ambient-fall ${6 + (i % 5)}s linear ${i * 0.4}s infinite`,
              '@keyframes ambient-fall': {
                '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                '100%': { transform: 'translateY(105vh) rotate(360deg)', opacity: 0 },
              },
            }}
          />
        ))}
      </Box>

      {/* 3D Perspective Container */}
      <Box
        sx={{
          position: 'relative',
          perspective: '1200px',
          zIndex: 10,
        }}
      >
        {/* Envelope Box Container */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '320px', sm: '420px', md: '520px' },
            height: { xs: '220px', sm: '280px', md: '340px' },
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── LAYER 1 (Bottom, z-index: 1): Envelope Back ── */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              backgroundColor: '#fdfbf7',
              borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.3)',
              border: '1px solid rgba(38, 30, 27, 0.15)',
              overflow: 'hidden',
            }}
          >
            {/* Paper Texture Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(#28201c 0.5px, transparent 0.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.04,
              }}
            />
          </Box>

          {/* ── LAYER 2 (Middle, z-index: 2): Invitation Card ── */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isOpen ? '-72%' : 0 }}
            transition={{
              duration: 1.1,
              delay: 0.45,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              position: 'absolute',
              left: '5%',
              right: '5%',
              top: '6%',
              bottom: '6%',
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fffdf9',
                borderRadius: '8px',
                border: '1px solid rgba(184, 35, 35, 0.2)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                p: { xs: 2.5, sm: 3.5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Card Retro Gold Border Detail */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: '6px',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: '4px',
                  pointerEvents: 'none',
                }}
              />

              {/* Header Title */}
              <Typography
                sx={{
                  fontFamily: '"SVN-HC Marvin Visions", serif',
                  fontSize: { xs: '0.85rem', sm: '1.05rem' },
                  color: '#b82323',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                THIỆP MỜI CƯỚI
              </Typography>

              {/* Main Invitation Text: "Thân mời Vũ & Nhím" */}
              <Typography
                sx={{
                  fontFamily: '"Lora", "Baskerville", serif',
                  fontSize: { xs: '0.95rem', sm: '1.15rem' },
                  color: '#28201c',
                  fontStyle: 'italic',
                  mb: 1.5,
                }}
              >
                Trân trọng kính mời
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", cursive',
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
                  color: '#b82323',
                  lineHeight: 1.2,
                  mb: 1,
                }}
              >
                Vũ &amp; Nhím
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Lora", serif',
                  fontSize: { xs: '0.8rem', sm: '0.95rem' },
                  color: '#28201c',
                  opacity: 0.85,
                }}
              >
                Đến tham dự buổi tiệc cưới thân mật cùng gia đình chúng tôi
              </Typography>
            </Box>
          </motion.div>

          {/* ── LAYER 3 (Front, z-index: 3): Envelope Front ── */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              backgroundColor: '#f7f2e7',
              borderRadius: '12px',
              border: '1px solid rgba(38, 30, 27, 0.15)',
              clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              pb: { xs: 2.5, sm: 3.5 },
              pointerEvents: isOpen ? 'none' : 'auto',
            }}
          >
            {/* Watermark Illustration of Old Saigon */}
            <Image
              src="/images/couple-landscape.png"
              alt="Retro Saigon"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              style={{ objectFit: 'cover', opacity: 0.08, pointerEvents: 'none' }}
            />

            {/* Central Action Button "Mở nắp thiệp" */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 10 }}
                >
                  <Button
                    onClick={handleOpen}
                    variant="outlined"
                    sx={{
                      borderColor: '#b82323',
                      color: '#b82323',
                      backgroundColor: 'rgba(253, 251, 247, 0.9)',
                      fontFamily: '"Lora", "Baskerville", serif',
                      fontSize: { xs: '0.85rem', sm: '1rem' },
                      fontWeight: 600,
                      px: { xs: 2.5, sm: 3.5 },
                      py: { xs: 0.8, sm: 1 },
                      borderRadius: '30px',
                      boxShadow: '0 4px 15px rgba(184, 35, 35, 0.2)',
                      backdropFilter: 'blur(4px)',
                      textTransform: 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: '#b82323',
                        color: '#fdfbf7',
                        borderColor: '#b82323',
                        boxShadow: '0 6px 20px rgba(184, 35, 35, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Mở nắp thiệp
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>

          {/* ── LAYER 4 (Top/Flap, z-index: 4 -> 1 on flip): Envelope Flap ── */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{
              duration: 0.85,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              zIndex: isOpen ? 1 : 4,
            }}
          >
            {/* Triangular Flap Shape in Deep Red (#b82323) */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#b82323',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                pt: 1.5,
              }}
            >
              {/* Flap Gold Stamp Seal Accent */}
              <Box
                sx={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#d4af37',
                  border: '1px solid #ffffff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#b82323',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                囍
              </Box>

              {/* Crease Line Shadow at Top Edge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'rgba(0,0,0,0.25)',
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
