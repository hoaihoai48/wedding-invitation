'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { rsvpSchema, RSVPInput, RSVPPayload, submitRSVP } from '@/lib/rsvpSchema';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleOutlineIcon from '@mui/icons-material/TaskAlt';

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarError, setSnackbarError] = useState('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RSVPInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      attendance: 'attending' as const,
      guestCount: 1,
      wishes: '',
    },
  });

  const onSubmit = async (data: RSVPInput) => {
    setIsSubmitting(true);
    try {
      await submitRSVP(data as RSVPPayload);
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSnackbarError('Có lỗi xảy ra. Vui lòng thử lại sau.');
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          py: 6,
          px: 4,
          textAlign: 'center',
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 72, color: 'primary.main', opacity: 0.9 }} />
        <Typography variant="h4" color="primary.dark" sx={{ fontWeight: 600 }}>
          Cảm ơn bạn! 💜
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
          Xác nhận tham dự của bạn đã được ghi nhận. Chúng mình rất mong được gặp bạn trong ngày trọng đại này!
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setSubmitSuccess(false)}
          sx={{ mt: 2 }}
        >
          Gửi lại
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}
    >
      {/* Name */}
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="rsvp-name"
            label="Họ và tên"
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name?.message}
            placeholder="Nguyễn Văn A"
          />
        )}
      />

      {/* Attendance */}
      <Controller
        name="attendance"
        control={control}
        render={({ field }) => (
          <FormControl error={!!errors.attendance} component="fieldset">
            <FormLabel
              component="legend"
              sx={{
                color: 'text.primary',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                mb: 0.5,
                '&.Mui-focused': { color: 'primary.main' },
              }}
            >
              Bạn có thể tham dự không? *
            </FormLabel>
            <RadioGroup {...field} row>
              <FormControlLabel
                value="attending"
                control={<Radio color="primary" />}
                label="Sẽ tham dự 🥂"
              />
              <FormControlLabel
                value="not_attending"
                control={<Radio color="primary" />}
                label="Tiếc quá, không đến được 😢"
              />
              <FormControlLabel
                value="maybe"
                control={<Radio color="primary" />}
                label="Có thể sẽ đến 🤔"
              />
            </RadioGroup>
            {errors.attendance && (
              <FormHelperText>{errors.attendance.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      {/* Guest Count */}
      <Controller
        name="guestCount"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="rsvp-guest-count"
            label="Số lượng khách (bao gồm bạn)"
            type="number"
            fullWidth
            required
            slotProps={{ htmlInput: { min: 0, max: 10 } }}
            error={!!errors.guestCount}
            helperText={errors.guestCount?.message}
            onChange={(e) => field.onChange(Number(e.target.value))}
          />
        )}
      />

      {/* Wishes */}
      <Controller
        name="wishes"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="rsvp-wishes"
            label="Lời chúc dành cho cô dâu & chú rể"
            fullWidth
            multiline
            rows={4}
            error={!!errors.wishes}
            helperText={errors.wishes?.message ?? 'Tối đa 500 ký tự'}
            placeholder="Chúc hai bạn trăm năm hạnh phúc..."
          />
        )}
      />

      {/* Submit */}
      <Button
        id="rsvp-submit"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={isSubmitting}
        startIcon={
          isSubmitting ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <FavoriteIcon />
          )
        }
        sx={{ alignSelf: 'center', px: 6, py: 1.5, mt: 1 }}
      >
        {isSubmitting ? 'Đang gửi...' : 'Xác nhận tham dự'}
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        slots={{ transition: Slide }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setSnackbarOpen(false)}>
          {snackbarError}
        </Alert>
      </Snackbar>
    </Box>
  );
}
