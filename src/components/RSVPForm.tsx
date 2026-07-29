'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface GuestWish {
  name: string;
  wish: string;
  time: string;
}

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');

  // Sample guest wishes like in demo image 2
  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      name: 'NGUYỄN HÙNG HẬU',
      wish: 'CHÚC ANH CHỊ HẠNH PHÚC TRĂM NĂM AHIHI',
      time: '15:26:44 26/7/2026',
    },
    {
      name: 'BẢO LỘC & DIÊN KHÁNH',
      wish: 'Chúc hai bạn trăm năm hạnh phúc, gia đình êm ấm viên mãn!',
      time: '14:10:20 26/7/2026',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim()) return;

    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    setWishes([
      { name: name.toUpperCase(), wish: wish.toUpperCase(), time: timeStr },
      ...wishes,
    ]);

    setName('');
    setWish('');
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Input Form Box (Matching Image 2 Demo) */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          borderRadius: '12px',
          border: '1.5px solid rgba(84, 46, 8, 0.35)',
          background: 'rgba(255, 253, 248, 0.4)',
          mb: 3,
        }}
      >
        {/* Name input */}
        <Box sx={{ mb: 2 }}>
          <Box
            component="input"
            type="text"
            placeholder="Nhập tên của bạn*"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            sx={{
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              border: '1px solid rgba(84, 46, 8, 0.3)',
              background: 'rgba(248, 243, 224, 0.6)',
              fontSize: '0.9rem',
              color: '#542e08',
              outline: 'none',
              fontFamily: '"Lora", serif',
              '&:focus': {
                borderColor: '#c32a29',
              },
            }}
          />
        </Box>

        {/* Wish textarea */}
        <Box sx={{ mb: 3 }}>
          <Box
            component="textarea"
            rows={3}
            placeholder="Nhập lời chúc của bạn*"
            value={wish}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setWish(e.target.value)}
            required
            sx={{
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              border: '1px solid rgba(84, 46, 8, 0.3)',
              background: 'rgba(248, 243, 224, 0.6)',
              fontSize: '0.9rem',
              color: '#542e08',
              outline: 'none',
              fontFamily: '"Lora", serif',
              resize: 'none',
              '&:focus': {
                borderColor: '#c32a29',
              },
            }}
          />
        </Box>

        {/* Submit button right-aligned dark brown (Matching Image 2 Demo) */}
        <Box sx={{ textAlign: 'right' }}>
          <Box
            component="button"
            type="submit"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: '50px',
              backgroundColor: '#542e08',
              color: '#f8f3e0',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              fontFamily: '"Lora", serif',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#381e05',
                transform: 'translateY(-1px)',
              },
            }}
          >
            GỬI LỜI CHÚC
          </Box>
        </Box>
      </Box>

      {/* Guest Wishes List (Matching Image 2 Demo) */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {wishes.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 2,
              borderRadius: '8px',
              border: '1px solid rgba(84, 46, 8, 0.25)',
              background: 'rgba(255, 253, 248, 0.6)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#542e08' }}>
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', color: 'rgba(84, 46, 8, 0.6)' }}>
                {item.time}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.8rem', color: '#542e08', lineHeight: 1.4 }}>
              {item.wish}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
