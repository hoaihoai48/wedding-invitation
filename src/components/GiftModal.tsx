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
import type { InvitationConfig } from '@/config/invitation';

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
  invitation: InvitationConfig;
}

type QrPreview = {
  src: string;
  alt: string;
  owner: string;
};

export default function GiftModal({ open, onClose, invitation }: GiftModalProps) {
  const [copiedGroom, setCopiedGroom] = useState(false);
  const [copiedBride, setCopiedBride] = useState(false);
  const [selectedQr, setSelectedQr] = useState<QrPreview | null>(null);

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
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedQr) {
          setSelectedQr(null);
        } else {
          onClose();
        }
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, selectedQr]);

  return (
    <AnimatePresence>
      {open && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          sx={(theme) => ({
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            backgroundColor: theme.palette.vintage.overlayDark,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, sm: 3 },
          })}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-modal-title"
            initial={{ opacity: 0, scale: 0.7, rotateX: -20, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 15, y: 30 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '680px', perspective: '1000px' }}
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
                id="gift-modal-title"
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
                      Chú Rể — {invitation.groom.fullName}
                    </Typography>
                  </Box>

                  {/* QR preview button */}
                  <Box
                    component="button"
                    type="button"
                    aria-label="Phóng to mã QR chú rể"
                    onClick={() =>
                      setSelectedQr({
                        src: invitation.bankAccounts[0].qrImage,
                        alt: 'Mã QR Chú Rể',
                        owner: invitation.bankAccounts[0].owner,
                      })
                    }
                    sx={(theme) => ({
                      p: 1.5,
                      backgroundColor: theme.palette.common.white,
                      borderRadius: '10px',
                      border: `1px solid ${theme.palette.vintage.darkBrown}`,
                      mb: 1,
                      display: 'inline-block',
                      cursor: 'zoom-in',
                      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        boxShadow: `0 8px 18px ${alpha(theme.palette.common.black, 0.16)}`,
                        transform: 'translateY(-2px)',
                      },
                      '&:focus-visible': {
                        outline: `3px solid ${alpha(theme.palette.primary.main, 0.45)}`,
                        outlineOffset: '3px',
                      },
                    })}
                  >
                    <Image
                      src={invitation.bankAccounts[0].qrImage}
                      alt="Mã QR Chú Rể"
                      width={443}
                      height={443}
                      style={{ display: 'block', width: '100%', height: 'auto', maxWidth: '220px', objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography sx={(theme) => ({ fontFamily: '"Lora", serif', fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 2 })}>
                    Bấm vào mã QR để xem lớn hơn
                  </Typography>

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
                    Ngân hàng {invitation.bankAccounts[0].bank}
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
                      {invitation.bankAccounts[0].accountNumber}
                    </Typography>
                    <IconButton
                      size="small"
                      aria-label="Sao chép số tài khoản chú rể"
                      title="Sao chép số tài khoản"
                      onClick={() => handleCopy(invitation.bankAccounts[0].accountNumber, true)}
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
                    {invitation.bankAccounts[0].owner}
                  </Typography>

                  {/* Push button to bottom */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      startIcon={<FileDownloadOutlinedIcon />}
                      onClick={() => handleDownload(invitation.bankAccounts[0].qrImage, 'QR_Nguyen_Hoai_Vu.png')}
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
                      Cô Dâu — {invitation.bride.fullName}
                    </Typography>
                  </Box>

                  {/* QR preview button */}
                  <Box
                    component="button"
                    type="button"
                    aria-label="Phóng to mã QR cô dâu"
                    onClick={() =>
                      setSelectedQr({
                        src: invitation.bankAccounts[1].qrImage,
                        alt: 'Mã QR Cô Dâu',
                        owner: invitation.bankAccounts[1].owner,
                      })
                    }
                    sx={(theme) => ({
                      p: 1.5,
                      backgroundColor: theme.palette.common.white,
                      borderRadius: '10px',
                      border: `1px solid ${theme.palette.vintage.darkBrown}`,
                      mb: 1,
                      display: 'inline-block',
                      cursor: 'zoom-in',
                      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        boxShadow: `0 8px 18px ${alpha(theme.palette.common.black, 0.16)}`,
                        transform: 'translateY(-2px)',
                      },
                      '&:focus-visible': {
                        outline: `3px solid ${alpha(theme.palette.primary.main, 0.45)}`,
                        outlineOffset: '3px',
                      },
                    })}
                  >
                    <Image
                      src={invitation.bankAccounts[1].qrImage}
                      alt="Mã QR Cô Dâu"
                      width={597}
                      height={597}
                      style={{ display: 'block', width: '100%', height: 'auto', maxWidth: '220px', objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography sx={(theme) => ({ fontFamily: '"Lora", serif', fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 2 })}>
                    Bấm vào mã QR để xem lớn hơn
                  </Typography>

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
                    {invitation.bankAccounts[1].bank}
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
                      {invitation.bankAccounts[1].accountNumber}
                    </Typography>
                    <IconButton
                      size="small"
                      aria-label="Sao chép số tài khoản cô dâu"
                      title="Sao chép số tài khoản"
                      onClick={() => handleCopy(invitation.bankAccounts[1].accountNumber, false)}
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
                    {invitation.bankAccounts[1].owner}
                  </Typography>

                  {/* Push button to bottom */}
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      startIcon={<FileDownloadOutlinedIcon />}
                      onClick={() => handleDownload(invitation.bankAccounts[1].qrImage, 'QR_Nguyen_Minh_Thuc_Trinh.png')}
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

          <AnimatePresence>
            {selectedQr && (
              <Box
                component={motion.div}
                role="dialog"
                aria-modal="true"
                aria-labelledby="qr-preview-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedQr(null)}
                sx={(theme) => ({
                  position: 'fixed',
                  inset: 0,
                  zIndex: 1300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 2, sm: 3 },
                  backgroundColor: alpha(theme.palette.vintage.darkBrown, 0.82),
                  backdropFilter: 'blur(5px)',
                })}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.88, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  onClick={(event) => event.stopPropagation()}
                  sx={(theme) => ({
                    position: 'relative',
                    width: 'min(100%, 580px)',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    p: { xs: 3, sm: 4 },
                    borderRadius: '16px',
                    backgroundColor: theme.palette.vintage.cream,
                    border: `1px solid ${theme.palette.vintage.gold}`,
                    boxShadow: `0 24px 70px ${alpha(theme.palette.common.black, 0.5)}`,
                    textAlign: 'center',
                  })}
                >
                  <IconButton
                    onClick={() => setSelectedQr(null)}
                    aria-label="Đóng ảnh QR phóng to"
                    sx={(theme) => ({
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      color: theme.palette.text.primary,
                    })}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    id="qr-preview-title"
                    sx={(theme) => ({
                      mb: 2,
                      pr: 4,
                      fontFamily: '"SVN-HC Marvin Visions", "Lora", serif',
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      color: theme.palette.primary.main,
                    })}
                  >
                    {selectedQr.owner}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Image
                      src={selectedQr.src}
                      alt={selectedQr.alt}
                      width={900}
                      height={900}
                      style={{ display: 'block', width: 'min(76vw, 500px)', height: 'auto', maxHeight: '68vh', objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography sx={(theme) => ({ mt: 2, fontFamily: '"Lora", serif', fontSize: '0.8rem', color: theme.palette.text.secondary })}>
                    Bấm ra ngoài hoặc nhấn Escape để đóng
                  </Typography>
                </Box>
              </Box>
            )}
          </AnimatePresence>
        </Box>
      )}
    </AnimatePresence>
  );
}
