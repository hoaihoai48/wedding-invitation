'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import RSVPForm from './RSVPForm';

// ── Motion helpers ─────────────────────────────────────────────────────────
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Teal border divider ────────────────────────────────────────────────────
function TealDivider() {
  return (
    <Box
      sx={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #2D5A4A, transparent)',
        my: 3,
        mx: 'auto',
        width: '80%',
        opacity: 0.6,
      }}
    />
  );
}

// ── Red banner (like "LỄ TÂN HÔN" band) ───────────────────────────────────
function RedBanner({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        background: '#8B1C1C',
        py: 1.5,
        px: 3,
        textAlign: 'center',
        mx: -4,
        my: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: { xs: '1.3rem', sm: '1.6rem' },
          fontWeight: 700,
          color: '#F5EDD4',
          letterSpacing: '0.1em',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ── Vintage card wrapper with double border ────────────────────────────────
function VintageCard({
  children,
  sx = {},
}: {
  children: React.ReactNode;
  sx?: object;
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        background: '#FAF3E0',
        border: '2.5px solid #2D5A4A',
        p: { xs: 3, sm: 4 },
        // Inner border
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: '6px',
          border: '1px solid rgba(45,90,74,0.35)',
          pointerEvents: 'none',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ── Section heading in vintage style ──────────────────────────────────────
function ScriptHeading({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 1 }}>
      <Typography
        sx={{
          fontFamily: 'var(--font-dancing), cursive',
          fontSize: { xs: '2rem', sm: '2.5rem' },
          color: '#2D5A4A',
          lineHeight: 1.2,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

// ── Vintage ornament line ──────────────────────────────────────────────────
function OrnamentLine() {
  return (
    <Box sx={{ textAlign: 'center', my: 2 }}>
      <Typography sx={{ color: '#2D5A4A', fontSize: '1rem', letterSpacing: '0.5em', opacity: 0.7 }}>
        ─ ✦ ─
      </Typography>
    </Box>
  );
}

// ──────────────────────────────────────────────────────────────────────────
export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        background: '#F5EDD4',
        minHeight: '100vh',
      }}
    >
      {/* ── Hero Section ── */}
      <Box
        id="hero"
        sx={{
          position: 'relative',
          height: { xs: '65vh', md: '85vh' },
          overflow: 'hidden',
          background: '#8B1C1C',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src="/images/hero.png"
            alt="Ảnh cưới Hoài Vũ & Thục Trinh"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.85 }}
            priority
          />
          {/* Gradient overlay – cream at bottom to blend into parchment */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(139,28,28,0.2) 0%, transparent 30%, rgba(245,237,212,1) 100%)',
            }}
          />
        </motion.div>

        {/* Hero text overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 28, md: 48 },
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-dancing), cursive',
                fontSize: { xs: '1.6rem', sm: '2.2rem' },
                color: '#F5EDD4',
                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                mb: 0.5,
              }}
            >
              Trân trọng kính mời
            </Typography>
            <Typography
              sx={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: { xs: '2.4rem', sm: '3.5rem' },
                fontWeight: 700,
                color: '#C9A040',
                letterSpacing: '0.05em',
                textShadow: '0 2px 16px rgba(0,0,0,0.5)',
              }}
            >
              HOÀI VŨ & THỤC TRINH
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ── Main invitation card (Page 1 style) ── */}
      <Container maxWidth="sm" sx={{ py: { xs: 4, md: 6 } }}>
        <FadeInSection>
          <VintageCard>
            {/* Parent info */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#2D5A4A',
                    mb: 0.5,
                  }}
                >
                  NHÀ TRAI
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'text.primary' }}>
                  Ông Nguyễn Văn Cường<br />
                  Bà Thái Thị Cường<br />
                  <Box component="span" sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                    Phú An Nam 2, Diên Khánh<br />Khánh Hòa
                  </Box>
                </Typography>
              </Grid>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: '#2D5A4A',
                    mb: 0.5,
                  }}
                >
                  NHÀ GÁI
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'text.primary' }}>
                  Ông Nguyễn Thế Hùng<br />
                  Bà Vũ Thanh Thủy<br />
                  <Box component="span" sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                    50/58 Trần Quý Cáp,<br />Phường 2 Bảo Lộc, Lâm Đồng
                  </Box>
                </Typography>
              </Grid>
            </Grid>

            <TealDivider />

            {/* Announcement */}
            <Box sx={{ textAlign: 'center', mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '0.82rem',
                  color: '#3d1a1a',
                  letterSpacing: '0.08em',
                }}
              >
                TRÂN TRỌNG THÔNG BÁO VỀ
              </Typography>
            </Box>

            <RedBanner>&#34;LỄ TÂN HÔN&#34;</RedBanner>

            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '0.82rem',
                  color: '#3d1a1a',
                  letterSpacing: '0.08em',
                }}
              >
                CỦA CON CHÚNG TÔI
              </Typography>
            </Box>

            <OrnamentLine />

            {/* Groom name */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: { xs: '1.7rem', sm: '2.2rem' },
                  fontWeight: 700,
                  color: '#8B1C1C',
                  letterSpacing: '0.05em',
                }}
              >
                NGUYỄN HOÀI VŨ
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 3,
                  my: 1.5,
                }}
              >
                <Typography sx={{ fontSize: '0.72rem', color: '#2D5A4A', fontWeight: 600, letterSpacing: '0.1em' }}>
                  TRƯỞNG NAM
                </Typography>
                <Typography sx={{ color: '#C9A040', fontSize: '1.1rem' }}>⚭</Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#2D5A4A', fontWeight: 600, letterSpacing: '0.1em' }}>
                  TRƯỞNG NỮ
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: { xs: '1.7rem', sm: '2.2rem' },
                  fontWeight: 700,
                  color: '#8B1C1C',
                  letterSpacing: '0.05em',
                }}
              >
                NGUYỄN MINH THỤC TRINH
              </Typography>
            </Box>

            <TealDivider />

            {/* Date & venue (hôn lễ tư gia) */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#3d1a1a', mb: 1 }}>
                Hôn lễ được cử hành tại tư gia
              </Typography>

              {/* Gold script time */}
              <Box
                sx={{
                  display: 'inline-block',
                  background: 'rgba(201,160,64,0.12)',
                  border: '1px solid rgba(201,160,64,0.5)',
                  borderRadius: '2px',
                  px: 3,
                  py: 1,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-dancing), cursive',
                    fontSize: '1.15rem',
                    color: '#8B1C1C',
                  }}
                >
                  Vào lúc 09 giờ 00 · Thứ Hai
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: { xs: '1.6rem', sm: '2rem' },
                  fontWeight: 700,
                  color: '#1a0a0a',
                  letterSpacing: '0.04em',
                  mb: 0.5,
                }}
              >
                NGÀY 14 THÁNG 09 NĂM 2026
              </Typography>
              <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', fontStyle: 'italic', mb: 3 }}>
                (Nhằm ngày 04 tháng 08 năm Bính Ngọ)
              </Typography>

              {/* Bottom red band */}
              <Box
                sx={{
                  background: '#2D5A4A',
                  mx: -4,
                  py: 1.2,
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#F5EDD4',
                    letterSpacing: '0.15em',
                  }}
                >
                  RẤT HÂN HẠNH ĐƯỢC ĐÓN TIẾP!
                </Typography>
              </Box>
            </Box>
          </VintageCard>
        </FadeInSection>

        {/* ── Party invitation card (Page 2 style) ── */}
        <FadeInSection delay={0.1}>
          <Box sx={{ mt: 4 }}>
            <VintageCard>
              <Box sx={{ textAlign: 'center' }}>
                {/* Script heading */}
                <ScriptHeading>Trân trọng</ScriptHeading>
                <ScriptHeading>Kính mời</ScriptHeading>

                <TealDivider />

                <Typography sx={{ fontSize: '0.85rem', color: '#3d1a1a', mb: 1, letterSpacing: '0.06em' }}>
                  ĐẾN DỰ BUỔI TIỆC RƯỢU CHUNG VUI
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: '#3d1a1a', mb: 2, letterSpacing: '0.04em' }}>
                  CÙNG GIA ĐÌNH CHÚNG TÔI TẠI
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '0.82rem',
                    color: '#2D5A4A',
                    mb: 0.5,
                    fontStyle: 'italic',
                  }}
                >
                  Nhà hàng tiệc cưới
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontSize: { xs: '1.9rem', sm: '2.5rem' },
                    fontWeight: 700,
                    color: '#8B1C1C',
                    letterSpacing: '0.04em',
                    lineHeight: 1.15,
                    mb: 1,
                  }}
                >
                  PHÚC THỊNH AN
                </Typography>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    background: 'rgba(45,90,74,0.08)',
                    border: '1px solid rgba(45,90,74,0.25)',
                    borderRadius: '2px',
                    px: 2,
                    py: 0.8,
                    mb: 3,
                  }}
                >
                  <LocationOnIcon sx={{ color: '#2D5A4A', fontSize: 16 }} />
                  <Typography sx={{ fontSize: '0.72rem', color: '#2D5A4A', letterSpacing: '0.04em' }}>
                    Cây Số 9 · Đường 23/10 · Diên Khánh · Khánh Hòa
                  </Typography>
                </Box>

                {/* Couple + time side by side */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 2,
                    mt: 1,
                  }}
                >
                  {/* Couple illustration */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: 120, sm: 150 },
                      height: { xs: 140, sm: 170 },
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/couple.png"
                      alt="Đôi uyên ương"
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                    />
                  </Box>

                  {/* Time & date */}
                  <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-dancing), cursive',
                        fontSize: '1.3rem',
                        color: '#2D5A4A',
                        mb: 0.5,
                      }}
                    >
                      Vào lúc
                    </Typography>
                    <Box
                      sx={{
                        background: '#8B1C1C',
                        borderRadius: '2px',
                        px: 1.5,
                        py: 0.5,
                        mb: 0.8,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-dancing), cursive',
                          fontSize: '1.05rem',
                          color: '#F5EDD4',
                        }}
                      >
                        17 Giờ 30 · Thứ Hai
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-oswald)',
                        fontSize: { xs: '1.6rem', sm: '2rem' },
                        fontWeight: 700,
                        color: '#8B1C1C',
                        letterSpacing: '0.04em',
                        lineHeight: 1.1,
                      }}
                    >
                      14.09.2026
                    </Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', fontStyle: 'italic', mt: 0.5 }}>
                      Nhằm ngày 04 tháng 08 năm Bính Ngọ
                    </Typography>

                    <Box sx={{ mt: 1.5, borderTop: '1px solid rgba(45,90,74,0.2)', pt: 1.2 }}>
                      <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', mb: 0.3 }}>
                        Đón khách: 17h30 · Khai tiệc: 18h00
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-dancing), cursive',
                      fontSize: '1.05rem',
                      color: '#3d1a1a',
                      lineHeight: 1.7,
                    }}
                  >
                    Sự hiện diện của Quý khách<br />
                    là niềm vinh hạnh cho gia đình chúng tôi
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-dancing), cursive',
                      fontSize: '1.3rem',
                      color: '#8B1C1C',
                      mt: 0.5,
                    }}
                  >
                    Kính Mời!
                  </Typography>
                </Box>
              </Box>
            </VintageCard>
          </Box>
        </FadeInSection>
      </Container>

      {/* ── Map Section ── */}
      <Box id="map" sx={{ background: '#F5EDD4', py: 6 }}>
        <Container maxWidth="md">
          <FadeInSection>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <ScriptHeading>Địa điểm tổ chức</ScriptHeading>
              <TealDivider />
            </Box>
            <VintageCard>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 260, md: 380 },
                  borderRadius: 0,
                  overflow: 'hidden',
                  border: '1px solid rgba(45,90,74,0.3)',
                }}
              >
                <iframe
                  title="Nhà hàng Phúc Thịnh An"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3!2d109.13!3d12.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE2JzA2LjAiTiAxMDnCsDA3JzQ4LjAiRQ!5e0!3m2!1svi!2svn!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-oswald)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#8B1C1C',
                    letterSpacing: '0.06em',
                    mb: 0.5,
                  }}
                >
                  NHÀ HÀNG PHÚC THỊNH AN
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary' }}>
                  Sảnh An Bình (Sân Vườn) · Cây Số 9 · Đường 23/10<br />
                  Diên Khánh · Khánh Hòa
                </Typography>
              </Box>
            </VintageCard>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── RSVP Section ── */}
      <Box id="rsvp" sx={{ py: 6, background: '#F0E6C8' }}>
        <Container maxWidth="sm">
          <FadeInSection>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <ScriptHeading>Xác nhận tham dự</ScriptHeading>
              <TealDivider />
            </Box>
            <VintageCard>
              <RSVPForm />
            </VintageCard>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── Gift Section ── */}
      <Box id="gift" sx={{ py: 6, background: '#F5EDD4' }}>
        <Container maxWidth="md">
          <FadeInSection>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <ScriptHeading>Mừng cưới</ScriptHeading>
              <TealDivider />
            </Box>
            <Grid container spacing={3}>
              {/* Bank info */}
              <Grid size={{ xs: 12, md: 6 }}>
                <VintageCard>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-oswald)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#2D5A4A',
                      letterSpacing: '0.1em',
                      mb: 2,
                    }}
                  >
                    CHUYỂN KHOẢN
                  </Typography>
                  {[
                    { label: 'Ngân hàng', value: 'Vietcombank' },
                    { label: 'Số tài khoản', value: '1234567890' },
                    { label: 'Chủ tài khoản', value: 'NGUYỄN HOÀI VŨ' },
                  ].map(({ label, value }) => (
                    <Box key={label} sx={{ mb: 1.5 }}>
                      <Typography sx={{ fontSize: '0.7rem', color: '#2D5A4A', letterSpacing: '0.1em', fontWeight: 700 }}>
                        {label}
                      </Typography>
                      <Typography sx={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#1a0a0a' }}>
                        {value}
                      </Typography>
                      <Box sx={{ borderBottom: '1px solid rgba(45,90,74,0.2)', mt: 0.5 }} />
                    </Box>
                  ))}
                </VintageCard>
              </Grid>

              {/* QR Code */}
              <Grid size={{ xs: 12, md: 6 }}>
                <VintageCard sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-oswald)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#2D5A4A',
                      letterSpacing: '0.1em',
                      mb: 2,
                    }}
                  >
                    QUÉT MÃ QR
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      p: 1.5,
                      border: '1.5px solid #2D5A4A',
                      background: '#fff',
                    }}
                  >
                    <Image
                      src="/images/qr-code.png"
                      alt="QR code mừng cưới"
                      width={140}
                      height={140}
                      style={{ display: 'block' }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-dancing)',
                      fontSize: '0.95rem',
                      color: 'text.secondary',
                      mt: 1.5,
                    }}
                  >
                    Chân thành cảm ơn tấm lòng<br />của Quý khách!
                  </Typography>
                </VintageCard>
              </Grid>
            </Grid>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        component="footer"
        sx={{
          py: 5,
          textAlign: 'center',
          background: '#8B1C1C',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-oswald)',
            fontSize: { xs: '1.4rem', sm: '1.8rem' },
            fontWeight: 700,
            color: '#C9A040',
            letterSpacing: '0.06em',
            mb: 0.5,
          }}
        >
          HOÀI VŨ & THỤC TRINH
        </Typography>
        <Typography sx={{ color: 'rgba(245,237,212,0.7)', letterSpacing: '0.2em', fontSize: '0.8rem', mb: 2 }}>
          14 · 09 · 2026
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-dancing)',
            fontSize: '1rem',
            color: 'rgba(245,237,212,0.6)',
          }}
        >
          Trân trọng cảm ơn sự hiện diện của Quý khách
        </Typography>
      </Box>
    </Box>
  );
}
