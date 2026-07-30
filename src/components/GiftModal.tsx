'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

export default function GiftModal({ open, onClose }: GiftModalProps) {
  const [copiedGroom, setCopiedGroom] = useState(false);
  const [copiedBride, setCopiedBride] = useState(false);

  const handleCopy = (text: string, isGroom: boolean) => {
    navigator.clipboard.writeText(text);
    if (isGroom) {
      setCopiedGroom(true);
      setTimeout(() => setCopiedGroom(false), 2000);
    } else {
      setCopiedBride(true);
      setTimeout(() => setCopiedBride(false), 2000);
    }
  };

  const handleDownload = (path: string, filename: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {open && (
        <Box
          sx={(theme) => ({
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            backgroundColor: theme.palette.vintage.overlayDark,
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, sm: 3 },
          })}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '680px' }}
          >
            {/* Unified Vintage Parchment Background */}
            <Box
              sx={(theme) => ({
                position: 'relative',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: theme.palette.vintage.cream,
                borderRadius: '16px',
                border: `1px solid ${theme.palette.vintage.borderDark}`,
                boxShadow: `0 20px 50px ${alpha(theme.palette.common.black, 0.4)}`,
                p: { xs: 3, sm: 4.5 },
              })}
            >
              {/* Close Button */}
              <IconButton
                onClick={onClose}
                sx={(theme) => ({
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: theme.palette.text.primary,
                  opacity: 0.7,
                  transition: 'all 0.2s',
                  '&:hover': { opacity: 1, backgroundColor: alpha(theme.palette.vintage.darkBrown, 0.06) },
                })}
                aria-label="Đóng"
              >
                <CloseIcon sx={{ fontSize: 22 }} />
              </IconButton>

              {/* Title: Classic Retro Serif in Deep Red */}
              <Typography
                sx={(theme) => ({
                  fontFamily: '"SVN-HC Marvin Visions", "Lora", serif',
                  fontSize: { xs: '1.6rem', sm: '2.1rem' },
                  color: theme.palette.primary.main,
                  textAlign: 'center',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  mb: 0.5,
                })}
              >
                HỘP QUÀ MỪNG CƯỚI
              </Typography>

              {/* Subtle Pastel Purple Accent Divider Line */}
              <Box
                sx={(theme) => ({
                  width: '60px',
                  height: '2px',
                  backgroundColor: theme.palette.vintage.pastelPurple,
                  mx: 'auto',
                  mb: 4,
                  borderRadius: '2px',
                  opacity: 0.8,
                })}
              />

              {/* Dual Content Grid with Stretch Alignment */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: { xs: 4, sm: 4 },
                  alignItems: 'stretch',
                }}
              >
                {/* ── Card 1: Chú Rể ── */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  {/* Fixed MinHeight Title Container */}
                  <Box
                    sx={{
                      minHeight: { xs: 'auto', sm: '3.2rem' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontFamily: '"Lora", "Baskerville", serif',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        lineHeight: 1.3,
                      })}
                    >
                      Chú Rể — Nguyễn Hoài Vũ
                    </Typography>
                  </Box>

                  {/* Elegant Thin Dark Brown Border for QR Code */}
                  <Box
                    sx={(theme) => ({
                      p: 1.5,
                      backgroundColor: theme.palette.common.white,
                      borderRadius: '10px',
                      border: `1px solid ${theme.palette.vintage.darkBrown}`,
                      mb: 2,
                      display: 'inline-block',
                    })}
                  >
                    <Image
                      src="/images/qr-code.png"
                      alt="Mã QR Chú Rể"
                      width={160}
                      height={160}
                      style={{ display: 'block' }}
                    />
                  </Box>

                  {/* Banking Details */}
                  <Typography
                    sx={(theme) => ({
                      fontFamily: '"Lora", serif',
                      fontSize: '0.85rem',
                      color: theme.palette.text.primary,
                      opacity: 0.8,
                      mb: 0.3,
                    })}
                  >
                    Ngân hàng Vietcombank
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.8,
                      mb: 0.3,
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontFamily: '"Lora", serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        letterSpacing: '0.04em',
                      })}
                    >
                      1234567890
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleCopy('1234567890', true)}
                      sx={(theme) => ({
                        color: copiedGroom ? theme.palette.vintage.successGreen : theme.palette.text.primary,
                        p: 0.3,
                        opacity: 0.8,
                        '&:hover': { opacity: 1 },
                      })}
                    >
                      {copiedGroom ? (
                        <CheckIcon sx={{ fontSize: 16 }} />
                      ) : (
                        <ContentCopyOutlinedIcon sx={{ fontSize: 16 }} />
                      )}
                    </IconButton>
                  </Box>

                  <Typography
                    sx={(theme) => ({
                      fontFamily: '"Lora", serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 2.5,
                      textTransform: 'uppercase',
                    })}
                  >
                    NGUYỄN HOÀI VŨ
                  </Typography>

                  {/* Push button to bottom */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      startIcon={<FileDownloadOutlinedIcon />}
                      onClick={() => handleDownload('/images/qr-code.png', 'QR_Nguyen_Hoai_Vu.png')}
                      sx={(theme) => ({
                        borderColor: theme.palette.vintage.darkBrown,
                        color: theme.palette.text.primary,
                        fontFamily: '"Lora", serif',
                        fontSize: '0.85rem',
                        textTransform: 'none',
                        borderRadius: '8px',
                        px: 2.5,
                        py: 0.6,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                      })}
                    >
                      Lưu mã QR
                    </Button>
                  </Box>
                </Box>

                {/* ── Card 2: Cô Dâu ── */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  {/* Fixed MinHeight Title Container */}
                  <Box
                    sx={{
                      minHeight: { xs: 'auto', sm: '3.2rem' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontFamily: '"Lora", "Baskerville", serif',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        lineHeight: 1.3,
                      })}
                    >
                      Cô Dâu — Nguyễn Minh Thục Trinh
                    </Typography>
                  </Box>

                  {/* Elegant Thin Dark Brown Border for QR Code */}
                  <Box
                    sx={(theme) => ({
                      p: 1.5,
                      backgroundColor: theme.palette.common.white,
                      borderRadius: '10px',
                      border: `1px solid ${theme.palette.vintage.darkBrown}`,
                      mb: 2,
                      display: 'inline-block',
                    })}
                  >
                    <Image
                      src="/images/qr-code.png"
                      alt="Mã QR Cô Dâu"
                      width={160}
                      height={160}
                      style={{ display: 'block' }}
                    />
                  </Box>

                  {/* Banking Details */}
                  <Typography
                    sx={(theme) => ({
                      fontFamily: '"Lora", serif',
                      fontSize: '0.85rem',
                      color: theme.palette.text.primary,
                      opacity: 0.8,
                      mb: 0.3,
                    })}
                  >
                    Ngân hàng MBBank
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.8,
                      mb: 0.3,
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontFamily: '"Lora", serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        letterSpacing: '0.04em',
                      })}
                    >
                      9876543210
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleCopy('9876543210', false)}
                      sx={(theme) => ({
                        color: copiedBride ? theme.palette.vintage.successGreen : theme.palette.text.primary,
                        p: 0.3,
                        opacity: 0.8,
                        '&:hover': { opacity: 1 },
                      })}
                    >
                      {copiedBride ? (
                        <CheckIcon sx={{ fontSize: 16 }} />
                      ) : (
                        <ContentCopyOutlinedIcon sx={{ fontSize: 16 }} />
                      )}
                    </IconButton>
                  </Box>

                  <Typography
                    sx={(theme) => ({
                      fontFamily: '"Lora", serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 2.5,
                      textTransform: 'uppercase',
                    })}
                  >
                    NGUYỄN MINH THỤC TRINH
                  </Typography>

                  {/* Push button to bottom */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      startIcon={<FileDownloadOutlinedIcon />}
                      onClick={() => handleDownload('/images/qr-code.png', 'QR_Nguyen_Minh_Thuc_Trinh.png')}
                      sx={(theme) => ({
                        borderColor: theme.palette.vintage.darkBrown,
                        color: theme.palette.text.primary,
                        fontFamily: '"Lora", serif',
                        fontSize: '0.85rem',
                        textTransform: 'none',
                        borderRadius: '8px',
                        px: 2.5,
                        py: 0.6,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                      })}
                    >
                      Lưu mã QR
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
}
