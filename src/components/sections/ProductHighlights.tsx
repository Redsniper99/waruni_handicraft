'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion.create(Box);

// Extended product details
const productDetails = [
    {
        id: 1,
        name: 'Golden Elegance',
        tagline: 'Timeless Beauty',
        description: 'A masterpiece of traditional brass craftsmanship, this piece embodies the golden era of Sri Lankan artistry. Each curve and detail is meticulously hand-polished to achieve a mirror-like finish.',
        features: ['Hand-polished finish', 'Traditional design', 'Premium brass'],
        image: '/1.png',
    },
    {
        id: 2,
        name: 'Vintage Charm',
        tagline: 'Classic Heritage',
        description: 'Inspired by antique designs passed down through generations, Vintage Charm captures the essence of old-world elegance. The intricate patterns tell stories of ancient craftsmanship.',
        features: ['Antique finish', 'Intricate patterns', 'Cultural motifs'],
        image: '/2.png',
    },
    {
        id: 3,
        name: 'Royal Accent',
        tagline: 'Majestic Craftsmanship',
        description: 'Fit for royalty, this brass piece showcases the pinnacle of artisan skill. The luxurious detailing and premium finish make it a statement piece that elevates any space.',
        features: ['Luxury finish', 'Statement piece', 'Artisan crafted'],
        image: '/3.png',
    },
    {
        id: 4,
        name: 'Heritage Beauty',
        tagline: 'Eternal Grace',
        description: 'A celebration of Sri Lankan heritage, this piece combines modern aesthetics with traditional techniques. The warm brass tones create an inviting atmosphere.',
        features: ['Modern-traditional blend', 'Warm tones', 'Heirloom quality'],
        image: '/4.png',
    },
];

export default function ProductHighlights() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    const handleViewDetails = (productName: string) => {
        const whatsappNumber = '94771234567';
        const message = encodeURIComponent(`Hi! I'm interested in the "${productName}" brass piece.`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    const goToNext = useCallback(() => {
        if (activeIndex < productDetails.length - 1) {
            setActiveIndex(prev => prev + 1);
        }
    }, [activeIndex]);

    const goToPrev = useCallback(() => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    }, [activeIndex]);

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop wheel handler
    useEffect(() => {
        if (isMobile) return;

        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const rect = container.getBoundingClientRect();
            const isSticky = rect.top <= 0 && rect.bottom > window.innerHeight;

            if (isSticky && !isScrollingRef.current) {
                const atStart = activeIndex === 0 && e.deltaY < 0;
                const atEnd = activeIndex === productDetails.length - 1 && e.deltaY > 0;

                if (!atStart && !atEnd) {
                    e.preventDefault();
                    isScrollingRef.current = true;

                    if (e.deltaY > 0) {
                        goToNext();
                    } else {
                        goToPrev();
                    }

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 700);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [activeIndex, goToNext, goToPrev, isMobile]);

    // Mobile horizontal swipe handler
    useEffect(() => {
        if (!isMobile) return;

        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrollingRef.current) return;

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const diffX = touchStartX.current - touchEndX;
            const diffY = touchStartY.current - touchEndY;

            // Only trigger if horizontal swipe is dominant
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                isScrollingRef.current = true;

                if (diffX > 0) {
                    // Swipe left - go to next
                    goToNext();
                } else {
                    // Swipe right - go to prev
                    goToPrev();
                }

                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 500);
            }
        };

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [activeIndex, goToNext, goToPrev, isMobile]);

    const currentProduct = productDetails[activeIndex];

    // Mobile layout - simple carousel, no pinning
    if (isMobile) {
        return (
            <Box
                ref={containerRef}
                id="collection"
                sx={{
                    py: { xs: 8, md: 10 },
                    backgroundColor: '#FFFFFF',
                }}
            >
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'secondary.main',
                            letterSpacing: 3,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                        }}
                    >
                        Our Favorites
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                        }}
                    >
                        Featured Pieces
                    </Typography>
                </Box>

                <Container maxWidth="lg">
                    {/* Product Image */}
                    <Box
                        sx={{
                            position: 'relative',
                            height: 300,
                            mb: 3,
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={currentProduct.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Image
                                    src={currentProduct.image}
                                    alt={currentProduct.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </MotionBox>
                        </AnimatePresence>
                    </Box>

                    {/* Product Info */}
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={currentProduct.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            sx={{ textAlign: 'center', px: 2 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'secondary.main',
                                    letterSpacing: 2,
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                }}
                            >
                                {currentProduct.tagline}
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: '"Playfair Display", serif',
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    my: 1,
                                    fontSize: '1.5rem',
                                }}
                            >
                                {currentProduct.name}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    mb: 2,
                                    fontSize: '0.9rem',
                                }}
                            >
                                {currentProduct.description}
                            </Typography>

                            {/* Features */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3, justifyContent: 'center' }}>
                                {currentProduct.features.map((feature) => (
                                    <Box
                                        key={feature}
                                        sx={{
                                            px: 1.5,
                                            py: 0.5,
                                            backgroundColor: '#F5F0E8',
                                            borderRadius: 20,
                                            fontSize: '0.75rem',
                                            color: 'primary.main',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {feature}
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                variant="contained"
                                onClick={() => handleViewDetails(currentProduct.name)}
                                sx={{
                                    background: 'linear-gradient(135deg, #C9A962 0%, #D9C08C 100%)',
                                    color: '#3A3A3A',
                                    px: 3,
                                    py: 1,
                                    borderRadius: 25,
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #A68B4B 0%, #C9A962 100%)',
                                    },
                                }}
                            >
                                Inquire Now
                            </Button>
                        </MotionBox>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                            mt: 4,
                        }}
                    >
                        <IconButton
                            onClick={goToPrev}
                            disabled={activeIndex === 0}
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: activeIndex === 0 ? '#F5F5F5' : '#F5F0E8',
                                color: activeIndex === 0 ? '#CCC' : 'primary.main',
                            }}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {productDetails.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    sx={{
                                        width: activeIndex === index ? 24 : 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: 'primary.main',
                                        opacity: activeIndex === index ? 1 : 0.3,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </Box>

                        <IconButton
                            onClick={goToNext}
                            disabled={activeIndex === productDetails.length - 1}
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: activeIndex === productDetails.length - 1 ? '#F5F5F5' : '#F5F0E8',
                                color: activeIndex === productDetails.length - 1 ? '#CCC' : 'primary.main',
                            }}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Box>

                    {/* Swipe hint */}
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            mt: 2,
                            color: 'text.disabled',
                        }}
                    >
                        Swipe left or right to navigate
                    </Typography>

                    {/* View All Button */}
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button
                            component={Link}
                            href="/collection"
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                px: 3,
                                py: 1,
                                borderRadius: 25,
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                },
                            }}
                        >
                            View All Collection
                        </Button>
                    </Box>
                </Container>
            </Box>
        );
    }

    // Desktop layout - pinned scroll
    return (
        <Box
            ref={containerRef}
            id="collection"
            sx={{
                height: `${productDetails.length * 100}vh`,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        pt: 10,
                        pb: 2,
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'secondary.main',
                            letterSpacing: 3,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                        }}
                    >
                        Our Favorites
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            fontSize: '2.5rem',
                        }}
                    >
                        Featured Pieces
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '1.2fr 1fr',
                                gap: 6,
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <MotionBox
                                        key={currentProduct.id}
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -30 }}
                                        transition={{ duration: 0.5 }}
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        <Image
                                            src={currentProduct.image}
                                            alt={currentProduct.name}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            priority
                                        />
                                    </MotionBox>
                                </AnimatePresence>
                            </Box>

                            <Box>
                                <AnimatePresence mode="wait">
                                    <MotionBox
                                        key={currentProduct.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                color: 'secondary.main',
                                                letterSpacing: 2,
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                mb: 1,
                                                display: 'block',
                                            }}
                                        >
                                            {currentProduct.tagline}
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: '"Playfair Display", serif',
                                                color: 'text.primary',
                                                fontWeight: 600,
                                                mb: 2,
                                                fontSize: '2.25rem',
                                            }}
                                        >
                                            {currentProduct.name}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                fontSize: '1.05rem',
                                            }}
                                        >
                                            {currentProduct.description}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                            {currentProduct.features.map((feature) => (
                                                <Box
                                                    key={feature}
                                                    sx={{
                                                        px: 2,
                                                        py: 0.5,
                                                        backgroundColor: '#F5F0E8',
                                                        borderRadius: 20,
                                                        fontSize: '0.85rem',
                                                        color: 'primary.main',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {feature}
                                                </Box>
                                            ))}
                                        </Box>

                                        <Button
                                            variant="contained"
                                            onClick={() => handleViewDetails(currentProduct.name)}
                                            sx={{
                                                background: 'linear-gradient(135deg, #C9A962 0%, #D9C08C 100%)',
                                                color: '#3A3A3A',
                                                px: 4,
                                                py: 1.25,
                                                borderRadius: 25,
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #A68B4B 0%, #C9A962 100%)',
                                                },
                                            }}
                                        >
                                            Inquire Now
                                        </Button>
                                    </MotionBox>
                                </AnimatePresence>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 3,
                                mt: 4,
                            }}
                        >
                            <IconButton
                                onClick={goToPrev}
                                disabled={activeIndex === 0}
                                sx={{
                                    width: 44,
                                    height: 44,
                                    backgroundColor: activeIndex === 0 ? '#F5F5F5' : '#F5F0E8',
                                    color: activeIndex === 0 ? '#CCC' : 'primary.main',
                                    '&:hover': {
                                        backgroundColor: activeIndex === 0 ? '#F5F5F5' : 'primary.main',
                                        color: activeIndex === 0 ? '#CCC' : 'white',
                                    },
                                }}
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>

                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {productDetails.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        sx={{
                                            width: activeIndex === index ? 28 : 10,
                                            height: 10,
                                            borderRadius: 5,
                                            backgroundColor: 'primary.main',
                                            opacity: activeIndex === index ? 1 : 0.3,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': { opacity: 0.7 },
                                        }}
                                    />
                                ))}
                            </Box>

                            <IconButton
                                onClick={goToNext}
                                disabled={activeIndex === productDetails.length - 1}
                                sx={{
                                    width: 44,
                                    height: 44,
                                    backgroundColor: activeIndex === productDetails.length - 1 ? '#F5F5F5' : '#F5F0E8',
                                    color: activeIndex === productDetails.length - 1 ? '#CCC' : 'primary.main',
                                    '&:hover': {
                                        backgroundColor: activeIndex === productDetails.length - 1 ? '#F5F5F5' : 'primary.main',
                                        color: activeIndex === productDetails.length - 1 ? '#CCC' : 'white',
                                    },
                                }}
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: 'center',
                                mt: 1.5,
                                color: 'text.secondary',
                                fontSize: '0.85rem',
                            }}
                        >
                            {activeIndex + 1} / {productDetails.length}
                        </Typography>

                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button
                                component={Link}
                                href="/collection"
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    px: 4,
                                    py: 1.25,
                                    borderRadius: 25,
                                    borderWidth: 2,
                                    '&:hover': {
                                        borderWidth: 2,
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                    },
                                }}
                            >
                                View All Collection
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}
