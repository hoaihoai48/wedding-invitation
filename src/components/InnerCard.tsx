'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';

interface InnerCardProps {
  isOpen: boolean;
}

export default function InnerCard({ isOpen }: InnerCardProps) {
  return (
    <motion.div
      initial={{ y: '20px', opacity: 0, scale: 0.96 }}
      animate={{
        y: isOpen ? '-180px' : '20px',
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.96,
      }}
      transition={{
        duration: 0.9,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1], // Quintic physics curve for silky smooth slide
      }}
      style={{
        position: 'absolute',
        left: '5%',
        right: '5%',
        top: '6%',
        bottom: '6%',
        zIndex: 2,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.vintage.cream,
          borderRadius: '8px',
          boxShadow: `0 12px 32px ${alpha(theme.palette.vintage.darkBrown, 0.2)}, 0 4px 12px ${alpha(theme.palette.common.black, 0.1)}`,
          p: { xs: 2, sm: 2.8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: `1px solid ${theme.palette.vintage.purpleBorder}`,
        })}
      >
        {/* Pastel Purple Vintage Corner Ornaments */}
        {/* Top-Left Corner */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            top: 6,
            left: 6,
            width: 16,
            height: 16,
            borderTop: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderLeft: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRadius: '2px 0 0 0',
            pointerEvents: 'none',
          })}
        />
        {/* Top-Right Corner */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            top: 6,
            right: 6,
            width: 16,
            height: 16,
            borderTop: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRight: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRadius: '0 2px 0 0',
            pointerEvents: 'none',
          })}
        />
        {/* Bottom-Left Corner */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: 6,
            left: 6,
            width: 16,
            height: 16,
            borderBottom: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderLeft: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRadius: '0 0 0 2px',
            pointerEvents: 'none',
          })}
        />
        {/* Bottom-Right Corner */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: 6,
            right: 6,
            width: 16,
            height: 16,
            borderBottom: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRight: `2px solid ${theme.palette.vintage.pastelPurple}`,
            borderRadius: '0 0 2px 0',
            pointerEvents: 'none',
          })}
        />

        {/* Delicate Inner Framing Line */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            inset: '10px',
            border: `1px solid ${theme.palette.vintage.purpleBorder}`,
            borderRadius: '4px',
            pointerEvents: 'none',
          })}
        />

        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          {/* Top text: "LỄ THÀNH HÔN" */}
          <Typography
            sx={(theme) => ({
              fontFamily: '"SVN-HC Marvin Visions", "Lora", serif',
              fontSize: { xs: '0.8rem', sm: '0.95rem' },
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontWeight: 700,
            })}
          >
            LỄ THÀNH HÔN
          </Typography>

          {/* Main text: "Vũ & Trinh" */}
          <Typography
            sx={(theme) => ({
              fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", "Playfair Display", serif',
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
              color: theme.palette.primary.main,
              lineHeight: 1.1,
              my: 0.25,
            })}
          >
            Vũ &amp; Trinh
          </Typography>

          {/* Sub text: "Thiệp mời sẽ tự động chuyển trang..." */}
          <Typography
            sx={(theme) => ({
              fontFamily: '"Lora", "Baskerville", serif',
              fontSize: { xs: '0.7rem', sm: '0.82rem' },
              color: theme.palette.text.primary,
              fontStyle: 'italic',
              opacity: 0.85,
            })}
          >
            Thiệp mời sẽ tự động chuyển trang...
          </Typography>
        </Stack>
      </Box>
    </motion.div>
  );
}
