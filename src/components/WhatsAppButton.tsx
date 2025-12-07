'use client';

import { Box, Tooltip, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
    const handleClick = () => {
        const whatsappNumber = '94771234567';
        const message = encodeURIComponent("Hi! I'm interested in your handcrafted brass items.");
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 32 },
                right: { xs: 20, md: 32 },
                zIndex: 1000,
            }}
        >
            <Tooltip title="Chat with us on WhatsApp" placement="left">
                <Fab
                    onClick={handleClick}
                    aria-label="WhatsApp"
                    sx={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        width: { xs: 56, md: 64 },
                        height: { xs: 56, md: 64 },
                        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#128C7E',
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 28px rgba(37, 211, 102, 0.5)',
                        },
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                            '0%': {
                                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                            },
                            '50%': {
                                boxShadow: '0 4px 30px rgba(37, 211, 102, 0.6)',
                            },
                            '100%': {
                                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                            },
                        },
                    }}
                >
                    <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                </Fab>
            </Tooltip>
        </Box>
    );
}
