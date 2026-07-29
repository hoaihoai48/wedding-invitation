'use client';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Box from '@mui/material/Box';

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
            <Box
                onClick={onToggle}
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 999,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#542e08',
                    color: '#f8f3e0',
                    border: '2px solid #c32a29',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(84,46,8,0.5)',
                    transition: 'all 0.3s ease',
                    animation: isPlaying ? 'spin 6s linear infinite' : 'none',
                    '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    },
                    '&:hover': {
                        transform: 'scale(1.1)',
                        backgroundColor: '#c32a29',
                    },
                }}
            >
                {isPlaying ? <MusicNoteIcon /> : <MusicOffIcon />}
            </Box>
        </>
    );
}
