'use client';

import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaIcon from '@mui/icons-material/Spa';

const values = [
    {
        icon: <FavoriteIcon sx={{ fontSize: 28 }} />,
        title: 'Handcrafted with Love',
        description: 'Every piece is made with care and passion',
    },
    {
        icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
        title: 'Unique Designs',
        description: 'No two pieces are exactly alike',
    },
    {
        icon: <SpaIcon sx={{ fontSize: 28 }} />,
        title: 'Premium Brass',
        description: 'High quality materials with lasting shine',
    },
];

export default function AboutSection() {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#FFFFFF',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                    {/* Image Column */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: 4,
                                overflow: 'hidden',
                                backgroundColor: '#FAFAFA',
                                p: 3,
                            }}
                        >
                            <Image
                                src="/5.png"
                                alt="Handcrafted brass item"
                                width={500}
                                height={500}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 16,
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Content Column */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ pl: { md: 3 } }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'secondary.main',
                                    letterSpacing: 3,
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                Our Story
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'text.primary',
                                    mt: 1,
                                    mb: 3,
                                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                                }}
                            >
                                About Waruni Handicraft
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 2,
                                    lineHeight: 1.8,
                                }}
                            >
                                At Waruni Handicraft, we believe that brass items should tell a story. Each piece
                                we create is a labor of love, meticulously handcrafted using traditional techniques
                                passed down through generations.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 4,
                                    lineHeight: 1.8,
                                }}
                            >
                                Our mission is to bring unique, meaningful brass pieces into your life – items
                                that connect you to the beauty of handmade artistry and timeless craftsmanship.
                            </Typography>

                            {/* Values */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                {values.map((value, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: 2,
                                                backgroundColor: '#F5F0E8',
                                                color: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {value.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    color: 'text.primary',
                                                    fontWeight: 600,
                                                    mb: 0.25,
                                                }}
                                            >
                                                {value.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary' }}
                                            >
                                                {value.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
