'use client';

import { createTheme } from '@mui/material/styles';

// Bracelet-inspired color palette
const palette = {
    primary: {
        main: '#8B7355',      // Warm brown
        light: '#A8927A',
        dark: '#6B5642',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#C9A962',      // Muted gold
        light: '#D9C08C',
        dark: '#A68B4B',
        contrastText: '#3A3A3A',
    },
    background: {
        default: '#FDFCF9',   // Cream white
        paper: '#FFFFFF',
    },
    text: {
        primary: '#3A3A3A',   // Charcoal
        secondary: '#5D4E37', // Deep earth
    },
    divider: '#E8E2D9',
};

const theme = createTheme({
    palette,
    typography: {
        fontFamily: '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 600,
            fontSize: '2.75rem',
            lineHeight: 1.3,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.4,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h4: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h5: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h6: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
        },
        body1: {
            fontFamily: '"Outfit", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontFamily: '"Outfit", sans-serif',
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        'none',
        '0px 2px 8px rgba(93, 78, 55, 0.06)',
        '0px 4px 16px rgba(93, 78, 55, 0.08)',
        '0px 6px 24px rgba(93, 78, 55, 0.10)',
        '0px 8px 32px rgba(93, 78, 55, 0.12)',
        '0px 12px 40px rgba(93, 78, 55, 0.14)',
        '0px 16px 48px rgba(93, 78, 55, 0.16)',
        '0px 20px 56px rgba(93, 78, 55, 0.18)',
        '0px 24px 64px rgba(93, 78, 55, 0.20)',
        '0px 28px 72px rgba(93, 78, 55, 0.22)',
        '0px 32px 80px rgba(93, 78, 55, 0.24)',
        '0px 36px 88px rgba(93, 78, 55, 0.26)',
        '0px 40px 96px rgba(93, 78, 55, 0.28)',
        '0px 44px 104px rgba(93, 78, 55, 0.30)',
        '0px 48px 112px rgba(93, 78, 55, 0.32)',
        '0px 52px 120px rgba(93, 78, 55, 0.34)',
        '0px 56px 128px rgba(93, 78, 55, 0.36)',
        '0px 60px 136px rgba(93, 78, 55, 0.38)',
        '0px 64px 144px rgba(93, 78, 55, 0.40)',
        '0px 68px 152px rgba(93, 78, 55, 0.42)',
        '0px 72px 160px rgba(93, 78, 55, 0.44)',
        '0px 76px 168px rgba(93, 78, 55, 0.46)',
        '0px 80px 176px rgba(93, 78, 55, 0.48)',
        '0px 84px 184px rgba(93, 78, 55, 0.50)',
        '0px 88px 192px rgba(93, 78, 55, 0.52)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    padding: '12px 32px',
                    fontSize: '1rem',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 6px 24px rgba(93, 78, 55, 0.15)',
                        transform: 'translateY(-2px)',
                    },
                },
                contained: {
                    background: 'linear-gradient(135deg, #8B7355 0%, #A8927A 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #6B5642 0%, #8B7355 100%)',
                    },
                },
                outlined: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0px 4px 20px rgba(93, 78, 55, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 8px 32px rgba(93, 78, 55, 0.15)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(253, 252, 249, 0.9)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0px 2px 20px rgba(93, 78, 55, 0.05)',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 24,
                    paddingRight: 24,
                    '@media (min-width:600px)': {
                        paddingLeft: 32,
                        paddingRight: 32,
                    },
                },
            },
        },
    },
});

export default theme;
