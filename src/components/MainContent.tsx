'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import RSVPForm from './RSVPForm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// ── Animated section wrapper ────────────────────────────────────────────────
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Section heading ──────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          letterSpacing: '0.35em',
          display: 'block',
          mb: 1,
          fontFamily: '"Lato", sans-serif',
          fontSize: '0.7rem',
        }}
      >
        ✦ ✦ ✦
      </Typography>
      <Typography
        variant="h3"
        sx={{
          background: 'linear-gradient(135deg, #9333ea, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {children}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #c084fc, transparent)',
          mx: 'auto',
          mt: 2,
        }}
      />
    </Box>
  );
}

// ── Timeline Event ───────────────────────────────────────────────────────────
interface EventProps {
  time: string;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

function TimelineEvent({ time, title, description, icon, isLast = false }: EventProps) {
  return (
    <Box sx={{ display: 'flex', gap: 3, position: 'relative' }}>
      {/* Vertical line */}
      {!isLast && (
        <Box
          sx={{
            position: 'absolute',
            left: 27,
            top: 56,
            bottom: -24,
            width: '2px',
            background: 'linear-gradient(to bottom, #c084fc, transparent)',
          }}
        />
      )}
      {/* Icon bubble */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f3e8ff, #ede9fe)',
          border: '2px solid',
          borderColor: 'primary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(192, 132, 252, 0.2)',
        }}
      >
        {icon}
      </Box>
      {/* Content */}
      <Box sx={{ pb: isLast ? 0 : 4, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
          <Typography
            variant="caption"
            sx={{ color: 'primary.main', fontFamily: '"Lato", sans-serif', letterSpacing: '0.1em' }}
          >
            {time}
          </Typography>
        </Box>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

// ── Main Content ─────────────────────────────────────────────────────────────
export default function MainContent() {
  const events: EventProps[] = [
    {
      time: '10:00',
      title: 'Đón khách',
      description: 'Ban tổ chức tiếp đón quý khách tại sảnh chính. Xin mời dùng trà và bánh ngọt.',
      icon: '🎊',
    },
    {
      time: '11:00',
      title: 'Lễ thành hôn',
      description:
        'Nghi lễ trao nhẫn và lời thề nguyện trước sự chứng kiến của gia đình, người thân và bè bạn.',
      icon: '💍',
    },
    {
      time: '12:00',
      title: 'Tiệc mừng',
      description:
        'Tiệc cưới ấm cúng với đặc sản Khánh Hòa. Cùng nhau nâng ly mừng hạnh phúc của đôi uyên ương.',
      icon: '🥂',
      isLast: true,
    },
  ];

  return (
    <Box
      component="main"
      sx={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #fff 50%, #fdf8ff 100%)' }}
    >
      {/* ── Hero Section ── */}
      <Box
        id="hero"
        sx={{ position: 'relative', height: { xs: '70vh', md: '90vh' }, overflow: 'hidden' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src="/images/hero.png"
            alt="Ảnh cưới Vũ & Nhím"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(139,92,246,0.15) 0%, transparent 40%, rgba(253,248,255,1) 100%)',
            }}
          />
        </motion.div>

        {/* Hero text overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 40, md: 60 },
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                color: 'white',
                textShadow: '0 2px 20px rgba(139,92,246,0.5)',
                mb: 1,
              }}
            >
              Vũ &amp; Nhím
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
              }}
            >
              Mãi mãi bên nhau
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ── Love Quote ── */}
      <FadeInSection>
        <Container maxWidth="sm" sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <FavoriteIcon sx={{ color: 'secondary.main', fontSize: 32, mb: 2 }} />
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ lineHeight: 1.8, fontStyle: 'italic' }}
          >
            &ldquo;Tình yêu không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.&rdquo;
          </Typography>
          <Typography
            variant="caption"
            color="primary.main"
            sx={{ mt: 2, display: 'block', letterSpacing: '0.15em' }}
          >
            — Antoine de Saint-Exupéry
          </Typography>
        </Container>
      </FadeInSection>

      <Divider sx={{ borderColor: 'rgba(192, 132, 252, 0.15)' }} />

      {/* ── Timeline ── */}
      <Box id="timeline" component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <FadeInSection>
            <SectionHeading>Chương Trình Ngày Cưới</SectionHeading>
          </FadeInSection>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(192, 132, 252, 0.15)',
              boxShadow: '0 8px 40px rgba(139, 92, 246, 0.06)',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {events.map((event, idx) => (
                <FadeInSection key={event.title} delay={idx * 0.15}>
                  <TimelineEvent {...event} />
                </FadeInSection>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(192, 132, 252, 0.15)' }} />

      {/* ── Map Section ── */}
      <Box id="map" component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <SectionHeading>Địa Điểm</SectionHeading>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 3,
                  py: 1.5,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)',
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                  Diên Khánh, Khánh Hòa
                </Typography>
              </Box>
            </Box>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Box
              sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(192, 132, 252, 0.15)',
                height: { xs: 300, md: 450 },
              }}
            >
              <iframe
                title="Vị trí đám cưới – Diên Khánh, Khánh Hòa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31329.67!2d109.109!3d12.252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317671b419bb0001%3A0xebda64e31eedf7b7!2sDi%C3%AAn%20Kh%C3%A1nh%2C%20Kh%C3%A1nh%20H%C3%B2a!5e0!3m2!1svi!2svn!4v1699000000000!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(192, 132, 252, 0.15)' }} />

      {/* ── RSVP Form ── */}
      <Box id="rsvp" component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <FadeInSection>
            <SectionHeading>Xác Nhận Tham Dự</SectionHeading>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, sm: 6 },
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(192, 132, 252, 0.18)',
                boxShadow: '0 8px 48px rgba(139, 92, 246, 0.08)',
              }}
            >
              <RSVPForm />
            </Paper>
          </FadeInSection>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(192, 132, 252, 0.15)' }} />

      {/* ── Wedding Gift / QR Code ── */}
      <Box id="gift" component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <FadeInSection>
            <SectionHeading>Mừng Cưới</SectionHeading>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, sm: 6 },
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(192, 132, 252, 0.18)',
                boxShadow: '0 8px 48px rgba(139, 92, 246, 0.08)',
                textAlign: 'center',
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn gửi lời chúc qua hình
                thức chuyển khoản, xin vui lòng sử dụng thông tin bên dưới.
              </Typography>

              {/* Bank info */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
                  borderRadius: '16px',
                  p: 3,
                  mb: 4,
                  border: '1px solid rgba(192, 132, 252, 0.2)',
                }}
              >
                <Typography variant="h6" color="primary.dark" gutterBottom sx={{ fontWeight: 600 }}>
                  Thông tin chuyển khoản
                </Typography>
                {[
                  { label: 'Ngân hàng', value: 'Vietcombank' },
                  { label: 'Số tài khoản', value: '0123 4567 8901' },
                  { label: 'Chủ tài khoản', value: 'NGUYEN VAN VU' },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{ display: 'flex', justifyContent: 'space-between', py: 0.75 }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* QR Code */}
              <Typography
                variant="overline"
                color="primary.main"
                sx={{ letterSpacing: '0.2em', display: 'block', mb: 2 }}
              >
                hoặc quét mã QR
              </Typography>
              <Box
                sx={{
                  display: 'inline-block',
                  p: 2,
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'primary.light',
                  background: 'white',
                  boxShadow: '0 8px 24px rgba(192, 132, 252, 0.15)',
                }}
              >
                <Image
                  src="/images/qr-code.png"
                  alt="QR code chuyển khoản mừng cưới"
                  width={200}
                  height={200}
                  style={{ display: 'block', borderRadius: '8px' }}
                />
              </Box>
            </Paper>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        component="footer"
        sx={{
          py: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
          borderTop: '1px solid rgba(192, 132, 252, 0.15)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: 'linear-gradient(135deg, #9333ea, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mb: 1,
          }}
        >
          Vũ &amp; Nhím
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.2em', mb: 2 }}>
          30 · 08 · 2025
        </Typography>
        <FavoriteIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
          Trân trọng cảm ơn sự hiện diện của quý khách
        </Typography>
      </Box>
    </Box>
  );
}
