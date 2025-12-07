'use client';

import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <WhatsAppIcon />, href: 'https://wa.me/94771234567', label: 'WhatsApp' },
];

const quickLinks = ['Home', 'Collection', 'About', 'Contact'];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (section: string) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            component="footer"
            id="contact"
            sx={{
                backgroundColor: '#3A3A3A',
                color: 'white',
                pt: { xs: 8, md: 10 },
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Brand Column */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                mb: 2,
                                color: '#C9A962',
                            }}
                        >
                            Waruni Handicraft
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.8,
                                mb: 3,
                                maxWidth: 280,
                            }}
                        >
                            Handcrafted with love, each brass piece tells a unique story.
                            We bring you timeless items made from premium materials
                            and artisan traditions.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.label}
                                    component="a"
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'white',
                                            backgroundColor: '#C9A962',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links Column */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: 'white',
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {quickLinks.map((link) => (
                                <MuiLink
                                    key={link}
                                    component="button"
                                    onClick={() => scrollToSection(link)}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        textDecoration: 'none',
                                        textAlign: 'left',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: '#C9A962',
                                            paddingLeft: 1,
                                        },
                                    }}
                                >
                                    {link}
                                </MuiLink>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Column */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: 'white',
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                📍 Colombo, Sri Lanka
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                📱 +94 77 123 4567
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                                ✉️ hello@warunihandicraft.com
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Newsletter / CTA Column */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: 'white',
                            }}
                        >
                            Connect With Us
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                mb: 2,
                                lineHeight: 1.7,
                            }}
                        >
                            Have questions about our brass items or want to place a custom order?
                            We&apos;d love to hear from you!
                        </Typography>
                        <Box
                            component="a"
                            href="https://wa.me/94771234567?text=Hi! I'm interested in your handcrafted brass items."
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                backgroundColor: '#25D366',
                                color: 'white',
                                px: 3,
                                py: 1.5,
                                borderRadius: 30,
                                textDecoration: 'none',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#128C7E',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
                                },
                            }}
                        >
                            <WhatsAppIcon />
                            Chat on WhatsApp
                        </Box>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Box
                    sx={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        mt: 6,
                        pt: 4,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    >
                        © {currentYear} Waruni Handicraft. All rights reserved.
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }}
                    >
                        Made with <FavoriteIcon sx={{ fontSize: 14, color: '#C9A962' }} /> in Sri Lanka
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
