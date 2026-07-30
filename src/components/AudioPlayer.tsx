'use client';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

interface AudioPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
}

export default function AudioPlayer( { isPlaying, onToggle }: AudioPlayerProps ) {
    return (
        <>
            {/* Youtube Embed Background Player for https://www.youtube.com/watch?v=JgTZvDbaTtg */}
            {isPlaying && (
                <Box
                    component="iframe"
                    src="https://cdn.chungdoi.com/music/mot-doi.mp3"
                    title="Nhạc Đám Cưới"
                    sx={{ display: 'none' }}
                    allow="autoplay"
                />
            )}

            {/* Floating Rotating Disc Button */}
            <IconButton
                onClick={onToggle}
                sx={(theme) => ({
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 999,
                    width: 48,
                    height: 48,
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.background.default,
                    border: `2px solid ${theme.palette.primary.light}`,
                    boxShadow: `0 4px 15px ${alpha(theme.palette.common.black, 0.4)}`,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: theme.palette.text.primary,
                        transform: 'scale(1.05)',
                    },
                })}
            >
                {isPlaying ? (
                    <MusicNoteIcon
                        sx={(theme) => ({
                            fontSize: 24,
                            color: theme.palette.primary.light,
                            animation: 'pulse-music 1.5s ease-in-out infinite',
                            '@keyframes pulse-music': {
                                '0%': { transform: 'scale(1)' },
                                '50%': { transform: 'scale(1.2)' },
                                '100%': { transform: 'scale(1)' },
                            },
                        })}
                    />
                ) : (
                    <MusicOffIcon />
                )}
            </IconButton>
        </>
    );
}
