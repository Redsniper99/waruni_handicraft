'use client';

import { Box, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TuneIcon from '@mui/icons-material/Tune';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { orderSteps } from '@/data/products';

const stepIcons: { [key: string]: React.ReactNode } = {
    search: <SearchIcon sx={{ fontSize: 28 }} />,
    whatsapp: <WhatsAppIcon sx={{ fontSize: 28 }} />,
    details: <TuneIcon sx={{ fontSize: 28 }} />,
    confirmed: <CheckCircleIcon sx={{ fontSize: 28 }} />,
};

export default function OrderProcessSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#FAFAFA',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'secondary.main',
                            letterSpacing: 3,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                        }}
                    >
                        Simple & Easy
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            mb: 2,
                        }}
                    >
                        How to Order
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 500,
                            mx: 'auto',
                        }}
                    >
                        Getting your perfect handcrafted bracelet is simple.
                    </Typography>
                </Box>

                {/* Steps */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {orderSteps.map((step) => (
                        <Box
                            key={step.step}
                            sx={{
                                textAlign: 'center',
                                p: { xs: 2, md: 3 },
                                backgroundColor: '#FFFFFF',
                                borderRadius: 3,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 40px rgba(93, 78, 55, 0.08)',
                                },
                            }}
                        >
                            {/* Step Number & Icon */}
                            <Box
                                sx={{
                                    width: { xs: 56, md: 72 },
                                    height: { xs: 56, md: 72 },
                                    borderRadius: '50%',
                                    backgroundColor: '#F5F0E8',
                                    color: 'primary.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 2,
                                }}
                            >
                                {stepIcons[step.icon]}
                            </Box>

                            {/* Step Number Badge */}
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'secondary.main',
                                    color: 'white',
                                    px: 1.5,
                                    py: 0.25,
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    fontSize: '0.7rem',
                                    mb: 1.5,
                                }}
                            >
                                Step {step.step}
                            </Typography>

                            {/* Step Content */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                                }}
                            >
                                {step.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.5,
                                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
