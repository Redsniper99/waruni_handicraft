'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
    const scrollToCollection = () => {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="home"
            sx={{
                pt: { xs: 14, md: 12 },
                pb: { xs: 4, md: 4 },
                px: { xs: 2, md: 4 },
                backgroundColor: '#FFFFFF',
            }}
        >
            <Container maxWidth="lg">
                {/* Text Content */}
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 6 },
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'secondary.main',
                            letterSpacing: 4,
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            mb: 2,
                            display: 'block',
                        }}
                    >
                        Handcrafted with Love
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                        }}
                    >
                        Waruni Handicraft
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 4,
                            maxWidth: 550,
                            mx: 'auto',
                            lineHeight: 1.7,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                        }}
                    >
                        Each brass piece is a unique work of art, carefully crafted by skilled artisan hands
                        using traditional techniques passed down through generations.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={scrollToCollection}
                        sx={{
                            background: 'linear-gradient(135deg, #C9A962 0%, #D9C08C 100%)',
                            color: '#3A3A3A',
                            px: 5,
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                            boxShadow: '0 8px 32px rgba(201, 169, 98, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #A68B4B 0%, #C9A962 100%)',
                                boxShadow: '0 12px 40px rgba(201, 169, 98, 0.4)',
                                transform: 'translateY(-2px)',
                            },
                        }}
                    >
                        Explore Collection
                    </Button>
                </Box>

                {/* Hero Image - Desktop */}
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: { xs: 3, md: 4 },
                        overflow: 'hidden',
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    <Image
                        src="/all.png"
                        alt="Handcrafted Brass Collection"
                        width={1200}
                        height={600}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                        priority
                    />
                </Box>

                {/* Hero Image - Mobile */}
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Image
                        src="/mobile_all.png"
                        alt="Handcrafted Brass Collection"
                        width={600}
                        height={800}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                        priority
                    />
                </Box>
            </Container>
        </Box>
    );
}
