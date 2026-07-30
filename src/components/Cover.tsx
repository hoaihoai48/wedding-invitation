'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

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
      sx={(theme) => ({
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflow: 'hidden',
        background: `linear-gradient(165deg, ${theme.palette.vintage.woodLight} 0%, ${theme.palette.vintage.darkBrown} 45%, ${theme.palette.vintage.woodDark} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3 },
      })}
    >
      <FallingConfetti />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {/* Large prominent card dimensions */}
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
              sx={(theme) => ({
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: theme.palette.primary.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.primary.contrastText,
                fontSize: '1.6rem',
                fontWeight: 700,
                boxShadow: `0 6px 20px ${alpha(theme.palette.primary.light, 0.55)}`,
              })}
            >
              囍
            </Box>
          </Box>

          {/* Card Frame */}
          <Box
            sx={(theme) => ({
              position: 'relative',
              borderRadius: '12px',
              boxShadow: `0 30px 70px -15px ${alpha(theme.palette.common.black, 0.55)}, 0 10px 30px ${alpha(theme.palette.common.black, 0.35)}, 0 0 50px ${alpha(theme.palette.primary.light, 0.2)}`,
              overflow: 'hidden',
            })}
          >
            {/* Background paper texture + Background Image */}
            <Box
              sx={(theme) => ({
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to bottom right, ${theme.palette.vintage.cream}, ${theme.palette.background.paper}, ${theme.palette.vintage.cream})`,
                border: `1.5px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                borderRadius: '12px',
              })}
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
                  sx={(theme) => ({
                    fontFamily: '"SVN-HC Marvin Visions", "Righteous", sans-serif',
                    color: theme.palette.primary.light,
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                    lineHeight: 1.2,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                  })}
                >
                  Hoài Vũ
                </Typography>
                <Typography
                  component="span"
                  sx={(theme) => ({
                    color: theme.palette.text.secondary,
                    fontFamily: '"Baskerville", "Times New Roman", serif',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    lineHeight: 1,
                    my: 0.8,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                  })}
                >
                  &amp;
                </Typography>
                <Typography
                  component="span"
                  sx={(theme) => ({
                    fontFamily: '"SVN-HC Marvin Visions", "Righteous", sans-serif',
                    color: theme.palette.primary.light,
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                    lineHeight: 1.2,
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                  })}
                >
                  Thục Trinh
                </Typography>
              </Box>

              {/* Decorative divider */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                <Box sx={(theme) => ({ width: 55, height: '1px', background: `linear-gradient(to right, transparent, ${alpha(theme.palette.text.secondary, 0.45)})` })} />
                <Typography sx={(theme) => ({ color: alpha(theme.palette.text.secondary, 0.45), fontSize: '0.95rem' })}>❦</Typography>
                <Box sx={(theme) => ({ width: 55, height: '1px', background: `linear-gradient(to left, transparent, ${alpha(theme.palette.text.secondary, 0.45)})` })} />
              </Box>

              {/* Date */}
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  fontFamily: '"Lora", "Times New Roman", serif',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  mb: 2.5,
                })}
              >
                14 tháng 9, 2026
              </Typography>

              {/* Thân Mời */}
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                  fontFamily: '"Lora", "Times New Roman", serif',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 300,
                  mb: 4,
                })}
              >
                Thân Mời
              </Typography>

              {/* Mở thiệp Button */}
              <Box
                id="open-invitation-btn"
                onClick={onOpen}
                sx={(theme) => ({
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  px: 5,
                  py: 1.4,
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  borderRadius: '9999px',
                  boxShadow: `0 6px 20px ${alpha(theme.palette.primary.light, 0.4)}`,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  userSelect: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  fontFamily: '"Lora", "Times New Roman", serif',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    boxShadow: `0 8px 28px ${alpha(theme.palette.primary.light, 0.6)}`,
                    transform: 'scale(1.03)',
                  },
                })}
              >
                Mở thiệp
                <Box
                  sx={(theme) => ({
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: 36,
                    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.common.white, 0.4)}, transparent)`,
                    animation: 'shine 3s ease-in-out infinite',
                    pointerEvents: 'none',
                  })}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
