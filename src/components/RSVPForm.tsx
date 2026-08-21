'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  QuerySnapshot,
  QueryDocumentSnapshot,
  DocumentData,
  FirestoreError,
} from 'firebase/firestore';

interface GuestWish {
  id?: string;
  name: string;
  wish: string;
  time: string;
}

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [wishes, setWishes] = useState<GuestWish[]>([]);

  // Realtime listener for Firestore wishes
  useEffect(() => {
    try {
      const wishesRef = collection(db, 'wishes');
      const q = query(wishesRef, orderBy('createdAt', 'desc'));

      const unsubscribe = onSnapshot(
        q,
        (snapshot: QuerySnapshot<DocumentData>) => {
          if (!snapshot.empty) {
            const fetchedWishes: GuestWish[] = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
              const data = doc.data();
              const dateObj = data.createdAt ? (data.createdAt.toDate() as Date) : new Date();
              const timeStr = `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj
                .getMinutes()
                .toString()
                .padStart(2, '0')}:${dateObj.getSeconds().toString().padStart(2, '0')} ${dateObj.getDate()}/${
                dateObj.getMonth() + 1
              }/${dateObj.getFullYear()}`;

              return {
                id: doc.id,
                name: (data.name as string) || 'Khách Mời',
                wish: (data.wish as string) || '',
                time: (data.time as string) || timeStr,
              };
            });

            setWishes(fetchedWishes);
          }
        },
        (error: FirestoreError) => {
          console.log('Firestore listener error (using fallback local state):', error.message);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error('Firebase initialization check:', err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')} ${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()}`;

    const formattedName = name.trim().toUpperCase();
    const formattedWish = wish.trim();

    try {
      await addDoc(collection(db, 'wishes'), {
        name: formattedName,
        wish: formattedWish,
        time: timeStr,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('Error saving wish to Firebase:', err);
      // Fallback local update if network issue
      setWishes((prev) => [
        { id: Date.now().toString(), name: formattedName, wish: formattedWish, time: timeStr },
        ...prev,
      ]);
    } finally {
      setName('');
      setWish('');
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Input Form Box */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={(theme) => ({
          p: 3,
          borderRadius: '12px',
          border: `1.5px solid ${theme.palette.vintage.borderDark}`,
          background: alpha(theme.palette.vintage.cream, 0.4),
          mb: 3,
        })}
      >
        {/* Name input */}
        <Box sx={{ mb: 2 }}>
          <Box
            component="input"
            type="text"
            aria-label="Tên của bạn"
            placeholder="Nhập tên của bạn*"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            sx={(theme) => ({
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              border: `1px solid ${theme.palette.vintage.borderDark}`,
              background: alpha(theme.palette.vintage.paper, 0.6),
              fontSize: '0.9rem',
              color: theme.palette.text.primary,
              outline: 'none',
              fontFamily: '"Lora", serif',
              '&:focus': {
                borderColor: theme.palette.primary.light,
              },
            })}
          />
        </Box>

        {/* Wish textarea */}
        <Box sx={{ mb: 3 }}>
          <Box
            component="textarea"
            rows={3}
            aria-label="Lời chúc của bạn"
            placeholder="Nhập lời chúc của bạn*"
            value={wish}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setWish(e.target.value)}
            required
            sx={(theme) => ({
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              border: `1px solid ${theme.palette.vintage.borderDark}`,
              background: alpha(theme.palette.vintage.paper, 0.6),
              fontSize: '0.9rem',
              color: theme.palette.text.primary,
              outline: 'none',
              fontFamily: '"Lora", serif',
              resize: 'none',
              '&:focus': {
                borderColor: theme.palette.primary.light,
              },
            })}
          />
        </Box>

        {/* Submit button */}
        <Box sx={{ textAlign: 'right' }}>
          <Box
            component="button"
            type="submit"
            disabled={isSubmitting}
            sx={(theme) => ({
              px: 4,
              py: 1.2,
              borderRadius: '50px',
              backgroundColor: theme.palette.text.primary,
              color: theme.palette.background.default,
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              fontFamily: '"Lora", serif',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                transform: 'translateY(-1px)',
              },
              '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
                transform: 'none',
              },
            })}
          >
            GỬI LỜI CHÚC
          </Box>
        </Box>
      </Box>

      {/* Guest Wishes List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {wishes.map((item) => (
          <Box
            key={item.id}
            sx={(theme) => ({
              p: 2,
              borderRadius: '8px',
              border: `1px solid ${theme.palette.vintage.borderDark}`,
              background: alpha(theme.palette.vintage.cream, 0.6),
            })}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography sx={(theme) => ({ fontWeight: 700, fontSize: '0.85rem', color: theme.palette.text.primary })}>
                {item.name}
              </Typography>
              <Typography sx={(theme) => ({ fontSize: '0.7rem', color: theme.palette.text.secondary })}>
                {item.time}
              </Typography>
            </Box>
            <Typography sx={(theme) => ({ fontSize: '0.8rem', color: theme.palette.text.primary, lineHeight: 1.4 })}>
              {item.wish}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
