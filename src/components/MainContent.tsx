'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Image from 'next/image';
import RSVPForm from './RSVPForm';

function DemoSectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography
        sx={{
          fontFamily: '"SVN-HC Marvin Visions", sans-serif',
          fontSize: { xs: '1.6rem', sm: '2.2rem' },
          color: '#1e3a34',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          mb: 0.5,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontFamily: '"Lora", serif',
            fontSize: '1rem',
            color: '#542e08',
            fontStyle: 'italic',
            opacity: 0.85,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

interface MainContentProps {
  isOpened?: boolean;
}

export default function MainContent({ isOpened = true }: MainContentProps) {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  const handleDownloadQR = (qrPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = qrPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      component="main"
      sx={{
        background: 'linear-gradient(165deg, #4a3428 0%, #352518 45%, #241a12 100%)',
        minHeight: '100vh',
        py: 0,
        px: { xs: 0, sm: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Centered Scrollable Card Strip */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: { xs: '100%', sm: '720px', md: '820px' },
          minHeight: '100vh',
          background: '#f5efe0',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.7)',
          borderLeft: { sm: '1px solid rgba(195, 42, 41, 0.2)' },
          borderRight: { sm: '1px solid rgba(195, 42, 41, 0.2)' },
          overflow: 'hidden',
          color: '#542e08',
          pb: 6,
        }}
      >
        {/* Background paper texture repeating */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/couple-landscape.png)',
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y',
            opacity: 0.04,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* ── Header: THIỆP MỜI / Đám Cưới ── */}
          <Box sx={{ textAlign: 'center', pt: 6, pb: 1, px: 3 }}>
            <Typography
              sx={{
                fontFamily: '"SVN-HC Marvin Visions", sans-serif',
                fontSize: '1.4rem',
                color: '#c32a29',
                letterSpacing: '0.15em',
                lineHeight: 1,
              }}
            >
              THIỆP MỜI
            </Typography>
            <Typography
              sx={{
                fontFamily: '"SVN-HC Pacifico", cursive',
                fontSize: '1.2rem',
                color: '#c32a29',
                mb: 2,
              }}
            >
              Đám Cưới
            </Typography>

            <Typography
              sx={{
                fontFamily: '"SVN-HC Marvin Visions", sans-serif',
                fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
                color: '#1e3a34',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                textTransform: 'uppercase',
              }}
            >
              Hoài Vũ &amp; Thục Trinh
            </Typography>
          </Box>

          {/* ── Top Retro Artwork ── */}
          <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, sm: 420, md: 480 }, my: 2 }}>
            <Image
              src="/images/couple-landscape.png"
              alt="Hoài Vũ & Thục Trinh"
              fill
              sizes="(max-width: 768px) 100vw, 820px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </Box>

          {/* ── Section 1: THÔNG TIN LỄ CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="THÔNG TIN LỄ CƯỚI" />

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, mb: 4, textAlign: 'center' }}>
              <Box>
                <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', fontWeight: 600 }}>Ông bà</Typography>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Nguyễn Văn Cường</Typography>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 0.5 }}>Lê Thị Phương</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(84,46,8,0.8)' }}>
                  Phú An Nam 2, Diên Khánh, Khánh Hòa
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', fontWeight: 600 }}>Ông bà</Typography>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Nguyễn Thế Hùng</Typography>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 0.5 }}>Vũ Thanh Thủy</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(84,46,8,0.8)' }}>
                  50/58 Trần Quý Cáp, Bảo Lộc, Lâm Đồng
                </Typography>
              </Box>
            </Box>

            {/* Announcement */}
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', letterSpacing: '0.12em', fontWeight: 700 }}>
                TRÂN TRỌNG BÁO TIN
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', letterSpacing: '0.12em', fontWeight: 700, mb: 3 }}>
                LỄ THÀNH HÔN CỦA CON CHÚNG TÔI
              </Typography>

              {/* Groom & Bride names in Brush Script Red */}
              <Typography
                sx={{
                  fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", cursive',
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '3.8rem' },
                  color: '#c32a29',
                  lineHeight: 1.1,
                }}
              >
                Nguyễn Hoài Vũ
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'rgba(84,46,8,0.7)', my: 0.5 }}>
                (Trưởng nam)
              </Typography>

              <Typography sx={{ fontSize: '1.8rem', color: '#c32a29', my: 0.5, fontFamily: '"SVN-HC Pacifico", cursive' }}>
                &amp;
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", cursive',
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '3.8rem' },
                  color: '#c32a29',
                  lineHeight: 1.1,
                }}
              >
                Nguyễn Minh Thục Trinh
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'rgba(84,46,8,0.7)', mt: 0.5, mb: 4 }}>
                (Trưởng nữ)
              </Typography>

              {/* Ceremony time */}
              <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', letterSpacing: '0.08em', fontWeight: 600 }}>
                LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#1e3a34', letterSpacing: '0.08em', fontWeight: 600, mb: 1.5 }}>
                VÀO LÚC
              </Typography>

              <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#542e08', mb: 0.5 }}>
                09:00
              </Typography>

              {/* Date bar format: THỨ HAI | 14 | THÁNG 09 | 2026 */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2.5, my: 1.5 }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>THỨ HAI</Typography>
                <Typography sx={{ fontSize: '1.8rem', fontWeight: 800, color: '#c32a29' }}>14</Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>THÁNG 09</Typography>
              </Box>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}>2026</Typography>

              <Typography sx={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(84,46,8,0.75)' }}>
                (Nhằm ngày 04 tháng 08 năm Bính Ngọ)
              </Typography>
            </Box>
          </Box>

          {/* ── Section 2: ALBUM ẢNH ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="ALBUM ẢNH" />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2.5 }}>
              {[1, 2, 3, 4].map((idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 180, sm: 240, md: 280 },
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(84,46,8,0.15)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <Image
                    src="/images/couple-landscape.png"
                    alt="Kỷ niệm ngày cưới"
                    fill
                    sizes="(max-width: 768px) 50vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Section 3: THÔNG TIN TIỆC CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="THÔNG TIN TIỆC CƯỚI" />

            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography sx={{ fontSize: '0.95rem', color: '#1e3a34', fontWeight: 700, mb: 1 }}>
                TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC
              </Typography>
              <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, color: '#542e08', mb: 0.5 }}>
                18:00
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2.5, my: 1.5 }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>THỨ HAI</Typography>
                <Typography sx={{ fontSize: '1.8rem', fontWeight: 800, color: '#c32a29' }}>14</Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>THÁNG 09</Typography>
              </Box>
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}>2026</Typography>

              <Typography sx={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(84,46,8,0.75)', mb: 2.5 }}>
                (Nhằm ngày 04 tháng 08 năm Bính Ngọ)
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, my: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(84,46,8,0.7)' }}>Đón khách</Typography>
                  <Typography sx={{ fontSize: '1.15rem', fontWeight: 700 }}>17:30</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.85rem', color: 'rgba(84,46,8,0.7)' }}>Khai tiệc</Typography>
                  <Typography sx={{ fontSize: '1.15rem', fontWeight: 700 }}>18:00</Typography>
                </Box>
              </Box>
            </Box>

            <DemoSectionTitle title="TIỆC CƯỚI SẼ TỔ CHỨC TẠI" />
            <Typography sx={{ fontSize: '0.95rem', textAlign: 'center', mb: 2.5, px: 2 }}>
              Nhà hàng tiệc cưới Phúc Thịnh An (Sảnh An Bình - Sân Vườn)<br />
              Cây Số 9, Đường 23/10, Diên Khánh, Khánh Hòa
            </Typography>

            {/* Map iframe */}
            <Box
              sx={{
                width: '100%',
                height: { xs: 280, sm: 360, md: 400 },
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(84,46,8,0.2)',
                mb: 4,
              }}
            >
              <iframe
                title="Google Map Tiệc cưới"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.3!2d109.13!3d12.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE2JzA2LjAiTiAxMDnCsDA3JzQ4LjAiRQ!5e0!3m2!1svi!2svn!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Box>

          {/* ── Section 4: LỊCH TRÌNH NGÀY CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="LỊCH TRÌNH NGÀY CƯỚI" />
            <Box sx={{ maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2, my: 2 }}>
              {[
                { time: '17:30', text: 'Đón khách' },
                { time: '18:00', text: 'Khai tiệc' },
                { time: '18:30', text: 'Phát biểu & Lễ thành hôn' },
                { time: '19:00', text: 'Phục vụ tiệc & Âm nhạc' },
                { time: '20:30', text: 'Chụp ảnh kỷ niệm & Tiễn khách' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Typography sx={{ fontFamily: '"SVN-HC Marvin Visions"', color: '#c32a29', fontSize: '1.1rem', width: 55 }}>
                    {item.time}
                  </Typography>
                  <Typography sx={{ color: '#c32a29', fontSize: '0.9rem' }}>♦</Typography>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Section 5: SỔ LƯU BÚT ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="SỔ LƯU BÚT" />
            <RSVPForm />
          </Box>

          {/* ── Section 6: HỘP QUÀ MỪNG ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, pt: 4, pb: 2, textAlign: 'center' }}>
            <DemoSectionTitle title="HỘP QUÀ MỪNG" />

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{ cursor: 'pointer', display: 'inline-block' }}
              onClick={() => setIsGiftModalOpen(true)}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 260, sm: 320, md: 360 },
                  height: { xs: 240, sm: 280, md: 300 },
                  mx: 'auto',
                  my: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/images/envelopes-perfect.png"
                  alt="Hộp quà mừng cưới"
                  width={360}
                  height={300}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </motion.div>

            <Typography
              sx={{
                fontSize: '0.95rem',
                color: 'rgba(84,46,8,0.8)',
                fontFamily: '"Lora", serif',
                cursor: 'pointer',
                mb: 2,
              }}
              onClick={() => setIsGiftModalOpen(true)}
            >
              Nhấn để mở
            </Typography>

            <Typography sx={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(84,46,8,0.7)', mt: 1 }}>
              Trân trọng cảm ơn tình cảm và sự hiện diện của Quý khách!
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── CLEAN ELEGANT DEMO MATCHING GIFT MODAL ── */}
      <AnimatePresence>
        {isGiftModalOpen && (
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              backgroundColor: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(3px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
            onClick={() => setIsGiftModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: 340, sm: 560, md: 640 },
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  backgroundColor: '#f9f5eb',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                }}
              >
                {/* Clean Red Top Header */}
                <Box
                  sx={{
                    backgroundColor: '#c32a29',
                    py: 1.8,
                    px: 3,
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"SVN-HC Marvin Visions"',
                      fontSize: { xs: '1.3rem', sm: '1.6rem' },
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      m: 0,
                    }}
                  >
                    HỘP QUÀ MỪNG
                  </Typography>

                  <Box
                    onClick={() => setIsGiftModalOpen(false)}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: 16,
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 22 }} />
                  </Box>
                </Box>

                {/* Body Content */}
                <Box sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 4,
                      textAlign: 'center',
                    }}
                  >
                    {/* Chú Rể */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography
                        sx={{
                          fontFamily: '"Lora", serif',
                          fontSize: '1.05rem',
                          color: '#c32a29',
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        Chú Rể - Nguyen Hoai Vu
                      </Typography>

                      <Box
                        sx={{
                          p: 1.2,
                          backgroundColor: '#ffffff',
                          borderRadius: '16px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                          display: 'inline-block',
                          mb: 2,
                        }}
                      >
                        <Image
                          src="/images/qr-code.png"
                          alt="QR Chú Rể"
                          width={170}
                          height={170}
                          style={{ display: 'block', borderRadius: '8px' }}
                        />
                      </Box>

                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '0.85rem', color: '#542e08', opacity: 0.8, mb: 0.3 }}>
                        Vietcombank
                      </Typography>
                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '1.1rem', fontWeight: 700, color: '#542e08', mb: 0.3 }}>
                        1234567890
                      </Typography>
                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '0.9rem', fontWeight: 700, color: '#542e08', mb: 2 }}>
                        Nguyen Hoai Vu
                      </Typography>

                      <Box
                        role="button"
                        onClick={() => handleDownloadQR('/images/qr-code.png', 'QR_Nguyen_Hoai_Vu.png')}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          backgroundColor: '#f2e6d0',
                          color: '#c32a29',
                          px: 2.5,
                          py: 0.5,
                          borderRadius: '20px',
                          fontFamily: '"Lora", serif',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#e6d8be' },
                        }}
                      >
                        <FileDownloadIcon sx={{ fontSize: 16 }} />
                        Lưu QR
                      </Box>
                    </Box>

                    {/* Cô Dâu */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography
                        sx={{
                          fontFamily: '"Lora", serif',
                          fontSize: '1.05rem',
                          color: '#c32a29',
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        Cô Dâu - Nguyen Minh Thuc Trinh
                      </Typography>

                      <Box
                        sx={{
                          p: 1.2,
                          backgroundColor: '#ffffff',
                          borderRadius: '16px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                          display: 'inline-block',
                          mb: 2,
                        }}
                      >
                        <Image
                          src="/images/qr-code.png"
                          alt="QR Cô Dâu"
                          width={170}
                          height={170}
                          style={{ display: 'block', borderRadius: '8px' }}
                        />
                      </Box>

                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '0.85rem', color: '#542e08', opacity: 0.8, mb: 0.3 }}>
                        MBBank
                      </Typography>
                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '1.1rem', fontWeight: 700, color: '#542e08', mb: 0.3 }}>
                        9876543210
                      </Typography>
                      <Typography sx={{ fontFamily: '"Lora", serif', fontSize: '0.9rem', fontWeight: 700, color: '#542e08', mb: 2 }}>
                        Nguyen Minh Thuc Trinh
                      </Typography>

                      <Box
                        role="button"
                        onClick={() => handleDownloadQR('/images/qr-code.png', 'QR_Nguyen_Minh_Thuc_Trinh.png')}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          backgroundColor: '#f2e6d0',
                          color: '#c32a29',
                          px: 2.5,
                          py: 0.5,
                          borderRadius: '20px',
                          fontFamily: '"Lora", serif',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#e6d8be' },
                        }}
                      >
                        <FileDownloadIcon sx={{ fontSize: 16 }} />
                        Lưu QR
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
