'use client';

import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: '#FFFFFF',
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
                        Testimonials
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'text.primary',
                            mt: 1,
                            mb: 2,
                        }}
                    >
                        Customer Love
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 500,
                            mx: 'auto',
                        }}
                    >
                        Hear from our wonderful customers who have welcomed our handcrafted brass pieces into their homes.
                    </Typography>
                </Box>

                {/* Testimonials Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 3,
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            elevation={0}
                            sx={{
                                height: '100%',
                                backgroundColor: '#FAFAFA',
                                borderRadius: 3,
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#F5F5F5',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                {/* Quote Icon */}
                                <FormatQuoteIcon
                                    sx={{
                                        color: 'secondary.main',
                                        fontSize: 32,
                                        mb: 2,
                                        opacity: 0.6,
                                    }}
                                />

                                {/* Rating */}
                                <Rating
                                    value={5}
                                    readOnly
                                    size="small"
                                    sx={{
                                        mb: 2,
                                        '& .MuiRating-iconFilled': {
                                            color: 'secondary.main',
                                        },
                                    }}
                                />

                                {/* Quote */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.7,
                                        mb: 3,
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    &ldquo;{testimonial.quote}&rdquo;
                                </Typography>

                                {/* Customer Info */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Avatar
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {testimonial.name.charAt(0)}
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: 'text.primary',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {testimonial.location}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
