'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import InnerCard from './InnerCard';

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
      sx={(theme) => ({
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(165deg, ${theme.palette.vintage.woodLight} 0%, ${theme.palette.vintage.darkBrown} 45%, ${theme.palette.vintage.woodDark} 100%)`,
        overflow: 'hidden',
        px: 2,
      })}
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
            sx={(theme) => ({
              position: 'absolute',
              top: '-20px',
              left: `${(i + 1) * 7.8}%`,
              width: i % 2 === 0 ? '8px' : '12px',
              height: i % 2 === 0 ? '8px' : '12px',
              backgroundColor: i % 3 === 0 ? theme.palette.primary.main : theme.palette.vintage.gold,
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              opacity: 0.6,
              animation: `ambient-fall ${6 + (i % 5)}s linear ${i * 0.4}s infinite`,
              '@keyframes ambient-fall': {
                '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                '100%': { transform: 'translateY(105vh) rotate(360deg)', opacity: 0 },
              },
            })}
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
            width: { xs: '350px', sm: '500px', md: '640px', lg: '700px' },
            height: { xs: '240px', sm: '330px', md: '420px', lg: '460px' },
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── LAYER 1 (Bottom, z-index: 1): Envelope Back ── */}
          <Box
            sx={(theme) => ({
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              backgroundColor: theme.palette.vintage.envelopeBack,
              borderRadius: '12px',
              boxShadow: `0 25px 60px ${alpha(theme.palette.common.black, 0.5)}, 0 5px 15px ${alpha(theme.palette.common.black, 0.3)}`,
              border: `1px solid ${theme.palette.vintage.borderDark}`,
              overflow: 'hidden',
            })}
          >
            {/* Paper Texture Overlay */}
            <Box
              sx={(theme) => ({
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(${theme.palette.vintage.darkBrown} 0.5px, transparent 0.5px)`,
                backgroundSize: '12px 12px',
                opacity: 0.04,
              })}
            />
          </Box>

          {/* ── LAYER 2 (Middle, z-index: 2): Invitation Card ── */}
          <InnerCard isOpen={isOpen} />

          {/* ── LAYER 3 (Front, z-index: 3): Envelope Front ── */}
          <Box
            sx={(theme) => ({
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              backgroundColor: theme.palette.vintage.envelopeFront,
              borderRadius: '12px',
              border: `1px solid ${theme.palette.vintage.borderDark}`,
              clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              pb: { xs: 2.5, sm: 3.5 },
              pointerEvents: isOpen ? 'none' : 'auto',
            })}
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
                    sx={(theme) => ({
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.vintage.cream, 0.9),
                      fontFamily: '"Lora", "Baskerville", serif',
                      fontSize: { xs: '0.85rem', sm: '1rem' },
                      fontWeight: 600,
                      px: { xs: 2.5, sm: 3.5 },
                      py: { xs: 0.8, sm: 1 },
                      borderRadius: '30px',
                      boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.2)}`,
                      backdropFilter: 'blur(4px)',
                      textTransform: 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                        transform: 'translateY(-2px)',
                      },
                    })}
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
              duration: 0.75,
              ease: [0.25, 1, 0.5, 1],
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
              sx={(theme) => ({
                width: '100%',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.3)}`,
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                pt: 1.5,
              })}
            >
              {/* Flap Gold Stamp Seal Accent */}
              <Box
                sx={(theme) => ({
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.vintage.gold,
                  border: `1px solid ${theme.palette.common.white}`,
                  boxShadow: `0 2px 6px ${alpha(theme.palette.common.black, 0.3)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.primary.main,
                  fontSize: '12px',
                  fontWeight: 'bold',
                })}
              >
                囍
              </Box>

              {/* Crease Line Shadow at Top Edge */}
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: alpha(theme.palette.common.black, 0.25),
                })}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
