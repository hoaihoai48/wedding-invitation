'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import RSVPForm from './RSVPForm';
import GiftModal from './GiftModal';
import type { InvitationConfig } from '@/config/invitation';

function DemoSectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography
        sx={(theme) => ({
          fontFamily: '"SVN-HC Marvin Visions", sans-serif',
          fontSize: { xs: '1.6rem', sm: '2.2rem' },
          color: theme.palette.vintage.accentTeal,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          mb: 0.5,
        })}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={(theme) => ({
            fontFamily: '"Lora", serif',
            fontSize: '1rem',
            color: theme.palette.secondary.light,
            fontStyle: 'italic',
            opacity: 0.85,
          })}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

interface MainContentProps {
  isOpened?: boolean;
  invitation: InvitationConfig;
}

export default function MainContent({ isOpened = true, invitation }: MainContentProps) {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const firstMember = invitation[invitation.coupleOrder[0]];
  const secondMember = invitation[invitation.coupleOrder[1]];
  const firstMemberKey = invitation.coupleOrder[0];
  const secondMemberKey = invitation.coupleOrder[1];
  const eventSections = invitation.events ?? (invitation.event ? [invitation.event] : []);

  return (
    <Box
      component="main"
      sx={(theme) => ({
        background: `linear-gradient(165deg, ${theme.palette.vintage.woodLight} 0%, ${theme.palette.vintage.darkBrown} 45%, ${theme.palette.vintage.woodDark} 100%)`,
        minHeight: '100vh',
        py: 0,
        px: { xs: 0, sm: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      {/* Centered Scrollable Card Strip with smooth reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0.4 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '100%', sm: '720px', md: '820px' },
            minHeight: '100vh',
            background: theme.palette.background.paper,
            boxShadow: `0 0 50px ${alpha(theme.palette.common.black, 0.7)}`,
            borderLeft: { sm: `1px solid ${alpha(theme.palette.primary.light, 0.2)}` },
            borderRight: { sm: `1px solid ${alpha(theme.palette.primary.light, 0.2)}` },
            overflow: 'hidden',
            color: theme.palette.text.primary,
            pb: 6,
          })}
        >
        {/* Subtle neutral paper grain */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${alpha(theme.palette.text.secondary, 0.09)} 0.55px, transparent 0.55px), linear-gradient(135deg, ${alpha(theme.palette.vintage.cream, 0.42)}, transparent 38%, ${alpha(theme.palette.vintage.gold, 0.04)})`,
            backgroundSize: '8px 8px, 100% 100%',
            opacity: 0.62,
            pointerEvents: 'none',
            zIndex: 1,
          })}
        />

        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {/* ── Header: THIỆP MỜI / Đám Cưới ── */}
          <Box sx={{ textAlign: 'center', pt: 6, pb: 1, px: 3 }}>
            <Typography
              sx={(theme) => ({
                fontFamily: '"SVN-HC Marvin Visions", sans-serif',
                fontSize: '1.4rem',
                color: theme.palette.primary.light,
                letterSpacing: '0.15em',
                lineHeight: 1,
              })}
            >
              THIỆP MỜI
            </Typography>
            <Typography
              sx={(theme) => ({
                fontFamily: '"SVN-HC Pacifico", cursive',
                fontSize: '1.2rem',
                color: theme.palette.primary.light,
                mb: 2,
              })}
            >
              Đám Cưới
            </Typography>

            <Typography
              sx={(theme) => ({
                fontFamily: '"SVN-HC Marvin Visions", sans-serif',
                fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
                color: theme.palette.vintage.accentTeal,
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                textTransform: 'uppercase',
              })}
            >
              {invitation.coupleOrder.map((member) => invitation[member].shortName).join(' & ')}
            </Typography>
          </Box>

          {/* ── Top Wedding Photo ── */}
          <Box
            sx={(theme) => ({
              position: 'relative',
              mx: { xs: 2.5, sm: 4, md: 5 },
              my: { xs: 2.5, sm: 3.5 },
              p: { xs: 0.8, sm: 1.2 },
              background: `linear-gradient(145deg, ${theme.palette.vintage.cream} 0%, ${theme.palette.background.paper} 100%)`,
              border: `1px solid ${alpha(theme.palette.vintage.gold, 0.72)}`,
              boxShadow: `0 12px 24px ${alpha(theme.palette.common.black, 0.2)}`,
              transform: 'rotate(-0.5deg)',
            })}
          >
            <Box
              sx={(theme) => ({
                position: 'relative',
                width: '100%',
                height: { xs: 250, sm: 360, md: 420 },
                overflow: 'hidden',
                backgroundColor: theme.palette.vintage.darkBrown,
              })}
            >
              <Image
                src={invitation.assets.heroImage}
                alt={`${invitation.groom.fullName} & ${invitation.bride.fullName}`}
                fill
                sizes="(max-width: 768px) calc(100vw - 48px), 720px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 54%',
                  filter: 'saturate(0.92) contrast(0.98)',
                }}
                priority
              />
            </Box>
          </Box>

          {/* ── Section 1: THÔNG TIN LỄ CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="THÔNG TIN LỄ CƯỚI" />

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 3, sm: 4 }, mb: 4, textAlign: 'center' }}>
              {invitation.familyOrder.map((member) => {
                const family = invitation[member];
                return (
                  <Box key={member}>
                    <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, fontWeight: 600 })}>
                      {member === 'bride' ? 'NHÀ GÁI' : 'NHÀ TRAI'}
                    </Typography>
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700 }}>Ông {family.parents.father}</Typography>
                    <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 0.5 }}>Bà {family.parents.mother}</Typography>
                    <Typography sx={(theme) => ({ fontSize: '0.85rem', color: theme.palette.text.secondary })}>
                      {family.parents.address}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Announcement */}
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, letterSpacing: '0.12em', fontWeight: 700 })}>
                {invitation.noticeLabel}
              </Typography>
              <Typography sx={(theme) => ({ fontSize: { xs: '1.55rem', sm: '2rem' }, color: theme.palette.primary.main, letterSpacing: '0.08em', fontWeight: 800, mb: 1 })}>
                “{invitation.title}”
              </Typography>
              <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, letterSpacing: '0.12em', fontWeight: 700, mb: 3 })}>
                {invitation.announcementLabel}
              </Typography>
              {/* Couple names in Brush Script Red */}
              <Typography
                sx={(theme) => ({
                  fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", cursive',
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '3.8rem' },
                  color: theme.palette.primary.light,
                  lineHeight: 1.1,
                })}
              >
                {firstMember.fullName}
              </Typography>
              <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.text.secondary, my: 0.5 })}>
                ({invitation.roleLabels[firstMemberKey]})
              </Typography>
              <Typography sx={(theme) => ({ fontSize: '1.8rem', color: theme.palette.primary.light, my: 0.5, fontFamily: '"SVN-HC Pacifico", cursive' })}>
                &amp;
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontFamily: '"SVN-HC Pacifico", "SVN-HC Carosello", cursive',
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '3.8rem' },
                  color: theme.palette.primary.light,
                  lineHeight: 1.1,
                })}
              >
                {secondMember.fullName}
              </Typography>
              <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.text.secondary, mt: 0.5, mb: 4 })}>
                ({invitation.roleLabels[secondMemberKey]})
              </Typography>
              {eventSections.map((event, index) => (
                <Box
                  key={`${event.eventLabel ?? 'event'}-${event.ceremonyDayLabel}`}
                  sx={(theme) => ({
                    py: index === 0 ? 0 : 2.5,
                    mt: index === 0 ? 0 : 2.5,
                    borderTop: index === 0 ? 'none' : `1px solid ${alpha(theme.palette.vintage.gold, 0.28)}`,
                  })}
                >
                  {eventSections.length > 1 && (
                    <Typography sx={(theme) => ({ fontSize: '0.95rem', color: theme.palette.primary.main, letterSpacing: '0.1em', fontWeight: 800, mb: 1 })}>
                      {event.eventLabel}
                    </Typography>
                  )}
                  <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, letterSpacing: '0.08em', fontWeight: 600 })}>
                    {event.ceremonyLabel}
                  </Typography>
                  <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, letterSpacing: '0.08em', fontWeight: 600, mb: 1.5 })}>
                    VÀO LÚC
                  </Typography>
                  <Typography sx={(theme) => ({ fontSize: '1.3rem', fontWeight: 700, color: theme.palette.text.primary, mb: 0.5 })}>
                    {event.ceremonyTimeLabel}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2.5, my: 1.5 }}>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{event.ceremonyWeekdayLabel}</Typography>
                    <Typography sx={(theme) => ({ fontSize: '1.8rem', fontWeight: 800, color: theme.palette.primary.light })}>{event.ceremonyDayLabel}</Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{event.ceremonyMonthLabel}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}>
                    {event.ceremonyYearLabel}
                  </Typography>
                  <Typography sx={(theme) => ({ fontSize: '0.85rem', fontStyle: 'italic', color: theme.palette.text.secondary })}>
                    {event.lunarDateLabel}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

          {/* ── Section 2: ALBUM ẢNH ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="ALBUM ẢNH" />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: { xs: 1.5, sm: 2.5 },
                px: { xs: 0.5, sm: 1 },
                py: 2,
              }}
            >
              {invitation.assets.albumImages.map((src, idx) => {
                const rotation = [-4, 3, -3, 4][idx % 4];
                return (
                  <Box
                    key={src}
                    sx={(theme) => ({
                      position: 'relative',
                      minWidth: 0,
                      p: { xs: 1, sm: 1.4 },
                      backgroundColor: theme.palette.vintage.cream,
                      border: `1px solid ${alpha(theme.palette.vintage.gold, 0.55)}`,
                      boxShadow: `0 12px 20px ${alpha(theme.palette.common.black, 0.2)}`,
                      transform: `rotate(${rotation}deg)`,
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      zIndex: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: { xs: -6, sm: -8 },
                        left: '50%',
                        width: { xs: 34, sm: 48 },
                        height: { xs: 10, sm: 13 },
                        transform: 'translateX(-50%) rotate(-2deg)',
                        backgroundColor: alpha(theme.palette.vintage.gold, 0.38),
                        zIndex: 2,
                      },
                      '&:hover, &:focus-within': {
                        transform: 'rotate(0deg) translateY(-8px) scale(1.03)',
                        boxShadow: `0 18px 30px ${alpha(theme.palette.common.black, 0.28)}`,
                        zIndex: 3,
                      },
                    })}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '2 / 3',
                        overflow: 'hidden',
                        backgroundColor: '#e9e0cc',
                      }}
                    >
                      <Image
                        className="gallery-img"
                        src={src}
                        alt={`Ảnh cưới kỷ niệm ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 46vw, 340px"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                          transformOrigin: 'center center',
                        }}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* ── Section 3: THÔNG TIN TIỆC CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="THÔNG TIN TIỆC CƯỚI" />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: eventSections.length > 1 ? { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' } : '1fr',
                gap: { xs: 3, md: 4 },
              }}
            >
              {eventSections.map((event) => (
                <Box
                  key={`reception-${event.eventLabel ?? 'event'}-${event.receptionDayLabel}`}
                  sx={(theme) => ({
                    p: { xs: 2, sm: 2.5 },
                    textAlign: 'center',
                    backgroundColor: alpha(theme.palette.vintage.cream, 0.58),
                    border: `1px solid ${alpha(theme.palette.vintage.gold, 0.34)}`,
                    borderRadius: '12px',
                  })}
                >
                  {eventSections.length > 1 && (
                    <Typography sx={(theme) => ({ fontSize: '0.95rem', color: theme.palette.primary.main, letterSpacing: '0.1em', fontWeight: 800, mb: 1 })}>
                      {event.eventLabel}
                    </Typography>
                  )}
                  <Typography sx={(theme) => ({ fontSize: '0.9rem', color: theme.palette.vintage.accentTeal, fontWeight: 700, mb: 1 })}>
                    TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC
                  </Typography>
                  <Typography sx={(theme) => ({ fontSize: '1.4rem', fontWeight: 700, color: theme.palette.text.primary, mb: 0.5 })}>
                    {event.receptionTimeLabel}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2.5, my: 1.5 }}>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{event.receptionWeekdayLabel}</Typography>
                    <Typography sx={(theme) => ({ fontSize: '1.8rem', fontWeight: 800, color: theme.palette.primary.light })}>{event.receptionDayLabel}</Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{event.receptionMonthLabel}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}>
                    {event.receptionYearLabel}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2.5, sm: 5 }, my: 2, flexWrap: 'wrap' }}>
                    {event.schedule.slice(0, 2).map((item) => (
                      <Box key={`${event.eventLabel ?? 'event'}-${item.time}`}>
                        <Typography sx={(theme) => ({ fontSize: '0.85rem', color: theme.palette.text.secondary })}>{item.text}</Typography>
                        <Typography sx={{ fontSize: '1.15rem', fontWeight: 700 }}>{item.time}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography sx={(theme) => ({ fontSize: '0.95rem', color: theme.palette.vintage.accentTeal, fontWeight: 700, mt: 2, mb: 1.5 })}>
                    TIỆC CƯỚI SẼ TỔ CHỨC TẠI
                  </Typography>
                  <Typography sx={(theme) => ({ fontSize: '1.15rem', fontWeight: 800, color: theme.palette.primary.main, mb: 1 })}>
                    {event.locationTitle}
                  </Typography>
                  {event.locationLines.map((line) => (
                    <Typography key={line} sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {line}
                    </Typography>
                  ))}
                  {event.mapUrl ? (
                    <Box
                      sx={(theme) => ({
                        width: '100%',
                        height: { xs: 260, sm: 300, md: 280 },
                        mt: 2.5,
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,
                      })}
                    >
                      <iframe
                        title={`Google Map ${event.eventLabel ?? 'tiệc cưới'}`}
                        src={event.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </Box>
                  ) : (
                    <Typography sx={(theme) => ({ fontSize: '0.85rem', fontStyle: 'italic', color: theme.palette.text.secondary, mt: 2 })}>
                      Bản đồ sẽ được cập nhật sau.
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Section 4: LỊCH TRÌNH NGÀY CƯỚI ── */}
          <Box sx={{ px: { xs: 3, sm: 6, md: 8 }, py: 2 }}>
            <DemoSectionTitle title="LỊCH TRÌNH NGÀY CƯỚI" />
            <Box sx={{ maxWidth: eventSections.length > 1 ? 760 : 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3, my: 2 }}>
              {eventSections.map((event) => (
                <Box key={`schedule-${event.eventLabel ?? 'event'}-${event.ceremonyDayLabel}`}>
                  {eventSections.length > 1 && (
                    <Typography sx={(theme) => ({ textAlign: 'center', color: theme.palette.primary.main, fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.1em', mb: 1.5 })}>
                      {event.eventLabel}
                    </Typography>
                  )}
                  <Box sx={{ maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {event.schedule.map((item) => (
                      <Box key={`${event.eventLabel ?? 'event'}-${item.time}-${item.text}`} sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                        <Typography sx={(theme) => ({ fontFamily: '"SVN-HC Marvin Visions", sans-serif', color: theme.palette.primary.light, fontSize: '1.1rem', width: 55 })}>
                          {item.time}
                        </Typography>
                        <Typography sx={(theme) => ({ color: theme.palette.primary.light, fontSize: '0.9rem' })} aria-hidden="true">♦</Typography>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 600 }}>{item.text}</Typography>
                      </Box>
                    ))}
                  </Box>
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
              role="button"
              tabIndex={0}
              aria-label="Mở hộp quà mừng cưới"
              aria-haspopup="dialog"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setIsGiftModalOpen(true);
                }
              }}
              whileHover={{ scale: 1.06, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.2 },
              }}
              onClick={() => setIsGiftModalOpen(true)}
              style={{ cursor: 'pointer', display: 'block', width: 'fit-content', margin: '0 auto' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 250, sm: 300, md: 340 },
                  aspectRatio: '1',
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
                  fill
                  sizes="(max-width: 600px) 250px, (max-width: 900px) 300px, 340px"
                  style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
                  priority
                />
              </Box>
            </motion.div>

            <Button
              type="button"
              variant="text"
              startIcon={<CardGiftcardOutlinedIcon />}
              onClick={() => setIsGiftModalOpen(true)}
              sx={(theme) => ({
                fontSize: '0.95rem',
                color: theme.palette.primary.main,
                fontFamily: '"Lora", serif',
                fontWeight: 600,
                mb: 2,
                textTransform: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: theme.palette.primary.dark,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  transform: 'translateY(-1px)',
                },
              })}
            >
              Nhấn vào đây để mở hộp mừng cưới
            </Button>

            <Typography sx={(theme) => ({ fontSize: '0.85rem', fontStyle: 'italic', color: theme.palette.text.secondary, mt: 1 })}>
              Trân trọng cảm ơn tình cảm và sự hiện diện của Quý khách!
            </Typography>
          </Box>
        </Box>

                  {/* ── Gift Modal ── */}

        <GiftModal open={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} invitation={invitation} />
      </motion.div>
    </Box>
  );
}
