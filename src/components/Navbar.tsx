'use client';

import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Container,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
    { label: 'Home', path: '/', section: 'home' },
    { label: 'Collection', path: '/collection', section: null },
    { label: 'About', path: '/#about', section: 'about' },
    { label: 'Contact', path: '/#contact', section: 'contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (item: typeof navItems[0]) => {
        setMobileOpen(false);

        // If it's the collection page, just navigate
        if (item.path === '/collection') {
            router.push('/collection');
            return;
        }

        // If we're on the homepage and there's a section
        if (pathname === '/' && item.section) {
            const element = document.getElementById(item.section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        // If we're not on homepage, navigate to homepage with hash
        if (item.section) {
            router.push(`/#${item.section}`);
            // Small delay to allow navigation, then scroll
            setTimeout(() => {
                const element = document.getElementById(item.section!);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            router.push(item.path);
        }
    };

    const drawer = (
        <Box
            sx={{
                height: '100%',
                background: 'linear-gradient(180deg, #FDFCF9 0%, #F5F0E8 100%)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: '"Playfair Display", serif',
                        color: 'primary.main',
                        fontWeight: 600,
                    }}
                >
                    Waruni
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List sx={{ flexGrow: 1, pt: 4 }}>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => handleNavClick(item)}
                            sx={{
                                py: 2,
                                px: 4,
                                '&:hover': {
                                    backgroundColor: 'rgba(139, 115, 85, 0.08)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    color: 'text.primary',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Floating Navbar Container */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                    px: { xs: 2, md: 4 },
                    pt: { xs: 1.5, md: 2 },
                }}
            >
                <Container maxWidth="lg" disableGutters>
                    <AppBar
                        position="static"
                        elevation={0}
                        sx={{
                            backgroundColor: 'rgba(253, 252, 249, 0.95)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 50,
                            boxShadow: trigger
                                ? '0 4px 24px rgba(93, 78, 55, 0.15)'
                                : '0 2px 16px rgba(93, 78, 55, 0.08)',
                            transition: 'all 0.3s ease',
                            border: '1px solid',
                            borderColor: 'rgba(201, 169, 98, 0.2)',
                        }}
                    >
                        <Toolbar
                            sx={{
                                justifyContent: 'space-between',
                                py: 0.5,
                                px: { xs: 2, md: 3 },
                                minHeight: { xs: 56, md: 64 },
                            }}
                        >
                            {/* Logo / Brand */}
                            <Typography
                                variant="h6"
                                component={Link}
                                href="/"
                                sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    letterSpacing: 0.5,
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                }}
                            >
                                Waruni Handicraft
                            </Typography>

                            {/* Desktop Navigation */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        onClick={() => handleNavClick(item)}
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            px: 2.5,
                                            py: 1,
                                            borderRadius: 25,
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(139, 115, 85, 0.1)',
                                                color: 'primary.main',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>

                            {/* Mobile Menu Button */}
                            <IconButton
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { md: 'none' },
                                    color: 'primary.main',
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
