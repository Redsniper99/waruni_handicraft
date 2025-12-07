'use client';

import { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { galleryImages } from '@/data/products';

const MotionBox = motion.create(Box);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function GallerySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <Box
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#FAFAFA',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <MotionBox
                    sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
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
                        Gallery
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            mb: 2,
                        }}
                    >
                        Our Collection
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 500,
                            mx: 'auto',
                        }}
                    >
                        Browse through our curated gallery of handcrafted brass items.
                    </Typography>
                </MotionBox>

                {/* Gallery Grid */}
                <MotionBox
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(3, 1fr)',
                        },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {galleryImages.map((image, index) => (
                        <MotionBox
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.3 }
                            }}
                            sx={{
                                position: 'relative',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 3,
                                overflow: 'hidden',
                                p: 2,
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 16px 48px rgba(93, 78, 55, 0.12)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingBottom: '100%',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={`Brass item ${index + 1}`}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </MotionBox>
                    ))}
                </MotionBox>
            </Container>
        </Box>
    );
}
