'use client';

import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

interface AudioPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    React.useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch(() => {
                // Handle autoplay block browser restrictions
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <>
            {/* Native HTML5 Audio element for persistent play/pause */}
            <audio
                ref={audioRef}
                src="https://cdn.chungdoi.com/music/mot-doi.mp3"
                loop
                preload="auto"
            />

            {/* Floating Rotating Disc Button */}
            <IconButton
                aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Bật nhạc'}
                title={isPlaying ? 'Tạm dừng nhạc' : 'Bật nhạc'}
                onClick={onToggle}
                sx={(theme) => ({
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 999,
                    width: 52,
                    height: 52,
                    backgroundColor: theme.palette.vintage.darkBrown,
                    color: theme.palette.vintage.cream,
                    border: `2px solid ${theme.palette.vintage.gold}`,
                    boxShadow: `0 4px 18px ${alpha(theme.palette.common.black, 0.5)}, 0 0 12px ${alpha(theme.palette.vintage.gold, isPlaying ? 0.6 : 0)}`,
                    transition: 'all 0.3s ease',
                    animation: isPlaying ? 'spin-disc 4s linear infinite' : 'none',
                    '@keyframes spin-disc': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.vintage.woodDark,
                    },
                })}
            >
                {isPlaying ? (
                    <MusicNoteIcon
                        sx={(theme) => ({
                            fontSize: 26,
                            color: theme.palette.vintage.gold,
                        })}
                    />
                ) : (
                    <MusicOffIcon
                        sx={(theme) => ({
                            fontSize: 24,
                            color: theme.palette.primary.light,
                            opacity: 0.6,
                        })}
                    />
                )}
            </IconButton>
        </>
    );
}
