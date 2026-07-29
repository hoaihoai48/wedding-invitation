'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CoverProps {
  onOpen: () => void;
}

function FallingConfetti() {
  const particles = [
    { left: '10%', size: '20px', delay: '0.2s', duration: '11s', color: '#B80030', shape: 'rect' },
    { left: '20%', size: '24px', delay: '1.8s', duration: '9s', color: '#AA0028', shape: 'triangle' },
    { left: '32%', size: '18px', delay: '0.8s', duration: '10.5s', color: '#FF0040', shape: 'rect' },
    { left: '50%', size: '22px', delay: '0.5s', duration: '9.5s', color: '#CC0033', shape: 'triangle' },
    { left: '68%', size: '16px', delay: '2.1s', duration: '8.8s', color: '#CC0033', shape: 'rect' },
    { left: '78%', size: '20px', delay: '1.1s', duration: '10s', color: '#B80030', shape: 'triangle' },
    { left: '88%', size: '25px', delay: '1.5s', duration: '12s', color: '#FF0040', shape: 'rect' },
  ];

  return (
    <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {particles.map((p, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: '-30px',
            left: p.left,
            color: p.color,
            fontSize: p.size,
            animation: `ambient-fall ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        >
          {p.shape === 'triangle' ? (
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 0,
                height: 0,
                borderLeft: '0.35em solid transparent',
                borderRight: '0.35em solid transparent',
                borderBottom: '0.7em solid currentColor',
              }}
            />
          ) : (
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '0.45em',
                height: '0.8em',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
              }}
            />
          )}
        </Box>
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
        background: 'linear-gradient(165deg, #4a3428 0%, #352518 45%, #241a12 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3 },
      }}
    >
      <FallingConfetti />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {/* Large prominent card dimensions: w-full max-w-[680px] */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '340px', sm: '480px', md: '620px', lg: '680px' },
            minHeight: { xs: '440px', sm: '500px', md: '540px' },
          }}
        >
          {/* Top Seal 囍 */}
          <Box
            sx={{
              position: 'absolute',
              top: '52px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 72,
              height: 72,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 30,
              animation: 'seal-pulse 2s ease-in-out infinite',
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: '#c32a29',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f8f3e0',
                fontSize: '1.6rem',
                fontWeight: 700,
                boxShadow: '0 6px 20px rgba(195,42,41,0.55)',
              }}
            >
              囍
            </Box>
          </Box>

          {/* Card Frame */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '12px',
              boxShadow:
                '0 30px 70px -15px rgba(0, 0, 0, 0.55), 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 50px rgba(195, 42, 41, 0.2)',
              overflow: 'hidden',
            }}
          >
            {/* Background paper texture + Background Image */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom right, #f8f3e0, #efe6d0, #f8f3e0)',
                border: '1.5px solid rgba(195, 42, 41, 0.2)',
                borderRadius: '12px',
              }}
            >
              <Box
                component="img"
                src="/images/couple-landscape.png"
                alt=""
                sx={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  width: '115%',
                  maxWidth: 'none',
                  left: '50%',
                  top: 'calc(10% - 20px)',
                  transform: 'translateX(-50%)',
                  opacity: 0.22,
                }}
              />
            </Box>

            {/* Inner Content - Spacious Layout */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                px: { xs: 3, sm: 6, md: 8 },
                pt: { xs: '120px', md: '110px' },
                pb: { xs: '52px', md: '44px' },
              }}
            >
              {/* Couple names */}
              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"SVN-HC Marvin Visions", "Righteous", sans-serif',
                    color: '#c32a29',
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                    lineHeight: 1.2,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                  }}
                >
                  Hoài Vũ
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: '#542e08',
                    fontFamily: '"Baskerville", "Times New Roman", serif',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    lineHeight: 1,
                    my: 0.8,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  &amp;
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"SVN-HC Marvin Visions", "Righteous", sans-serif',
                    color: '#c32a29',
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                    lineHeight: 1.2,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                  }}
                >
                  Thục Trinh
                </Typography>
              </Box>

              {/* Decorative divider */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ width: 55, height: '1px', background: 'linear-gradient(to right, transparent, rgba(84, 46, 8, 0.45))' }} />
                <Typography sx={{ color: 'rgba(84, 46, 8, 0.45)', opacity: 0.8, fontSize: '0.95rem' }}>❦</Typography>
                <Box sx={{ width: 55, height: '1px', background: 'linear-gradient(to left, transparent, rgba(84, 46, 8, 0.45))' }} />
              </Box>

              {/* Date */}
              <Typography
                sx={{
                  color: 'rgba(84, 46, 8, 0.9)',
                  fontFamily: '"Lora", "Times New Roman", serif',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  mb: 2.5,
                }}
              >
                14 tháng 9, 2026
              </Typography>

              {/* Thân Mời */}
              <Typography
                sx={{
                  color: 'rgba(84, 46, 8, 0.9)',
                  fontFamily: '"Lora", "Times New Roman", serif',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 300,
                  mb: 4,
                }}
              >
                Thân Mời
              </Typography>

              {/* Mở thiệp Button */}
              <Box
                id="open-invitation-btn"
                onClick={onOpen}
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  px: 5,
                  py: 1.4,
                  backgroundColor: '#c32a29',
                  color: '#f8f3e0',
                  borderRadius: '9999px',
                  boxShadow: '0 6px 20px rgba(195, 42, 41, 0.4)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  userSelect: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  fontFamily: '"Lora", "Times New Roman", serif',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#a82120',
                    boxShadow: '0 8px 28px rgba(195, 42, 41, 0.6)',
                    transform: 'scale(1.03)',
                  },
                }}
              >
                Mở thiệp
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: 36,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'shine 3s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
