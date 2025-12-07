const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(__dirname, '../public/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all PNG files in public directory
const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

async function optimizeImages() {
    console.log('Starting image optimization...\n');

    for (const file of files) {
        const inputPath = path.join(publicDir, file);
        const outputPath = path.join(publicDir, file); // Overwrite original

        try {
            const originalStats = fs.statSync(inputPath);
            const originalSize = originalStats.size;

            // Optimize image
            await sharp(inputPath)
                .png({
                    quality: 90,
                    compressionLevel: 9,
                    palette: true,
                })
                .toBuffer()
                .then(async (buffer) => {
                    // Only save if smaller
                    if (buffer.length < originalSize) {
                        fs.writeFileSync(outputPath, buffer);
                        const savedPercent = ((1 - buffer.length / originalSize) * 100).toFixed(1);
                        console.log(`✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(buffer.length / 1024).toFixed(1)}KB (saved ${savedPercent}%)`);
                    } else {
                        console.log(`○ ${file}: Already optimized (${(originalSize / 1024).toFixed(1)}KB)`);
                    }
                });
        } catch (error) {
            console.error(`✗ Error processing ${file}:`, error.message);
        }
    }

    console.log('\n✓ Image optimization complete!');
}

optimizeImages();
