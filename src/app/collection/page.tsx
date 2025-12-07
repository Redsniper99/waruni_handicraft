'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { products } from '@/data/products';

export default function CollectionPage() {
    const handleInquiry = (productName: string) => {
        const whatsappNumber = '94771234567';
        const message = encodeURIComponent(`Hi! I'm interested in the "${productName}" brass piece. Can you tell me more about it?`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                {/* Back Button */}
                <Box sx={{ mb: 4 }}>
                    <Button
                        component={Link}
                        href="/"
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>

                {/* Header */}
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
                        Handcrafted with Love
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        Our Collection
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 550,
                            mx: 'auto',
                        }}
                    >
                        Explore our complete collection of handcrafted brass items. Each piece is unique and made with care.
                    </Typography>
                </Box>

                {/* Products Grid */}
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#FAFAFA',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#F5F5F5',
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 12px 40px rgba(93, 78, 55, 0.12)',
                                        '& .MuiCardMedia-root': {
                                            transform: 'scale(1.03)',
                                        },
                                        '& .inquiry-btn': {
                                            opacity: 1,
                                        },
                                    },
                                }}
                            >
                                <CardActionArea
                                    onClick={() => handleInquiry(product.name)}
                                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                                >
                                    <Box sx={{ overflow: 'hidden', p: 2, pb: 0 }}>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.name}
                                            sx={{
                                                height: { xs: 160, sm: 200, md: 220 },
                                                objectFit: 'contain',
                                                transition: 'transform 0.4s ease',
                                                borderRadius: 2,
                                            }}
                                        />
                                    </Box>
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            p: 2,
                                            pt: 1.5,
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 600,
                                                color: 'text.primary',
                                                mb: 0.5,
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                            }}
                                        >
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                fontSize: { xs: '0.75rem', md: '0.85rem' },
                                                lineHeight: 1.5,
                                                mb: 1.5,
                                                display: { xs: 'none', sm: 'block' },
                                            }}
                                        >
                                            {product.description}
                                        </Typography>
                                        <Box
                                            className="inquiry-btn"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                color: '#25D366',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                opacity: { xs: 1, md: 0 },
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        >
                                            <WhatsAppIcon sx={{ fontSize: 16 }} />
                                            <span>Inquire Now</span>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* WhatsApp CTA */}
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'text.primary',
                            mb: 2,
                            fontFamily: '"Playfair Display", serif',
                        }}
                    >
                        Love what you see?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 3,
                            maxWidth: 400,
                            mx: 'auto',
                        }}
                    >
                        Contact us on WhatsApp to discuss your order or request a custom brass piece.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => window.open('https://wa.me/94771234567?text=Hi! I\'m interested in your brass items.', '_blank')}
                        sx={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: 25,
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#128C7E',
                            },
                        }}
                    >
                        Chat on WhatsApp
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
