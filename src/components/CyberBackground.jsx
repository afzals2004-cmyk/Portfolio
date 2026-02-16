import { useEffect, useRef } from 'react';

const CyberBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration - Optimized for Responsive Layout
        const isMobile = window.innerWidth < 768;
        const particles = [];
        const particleCount = isMobile ? 60 : 150; // Reduce density on mobile
        const connectionDistance = isMobile ? 120 : 180; // Shorter connections on mobile
        const fontSize = isMobile ? 12 : 16;
        const matrixColumns = Math.floor(canvas.width / fontSize);
        const matrixDrops = new Array(matrixColumns).fill(1);

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // slightly faster, more dynamic movement
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * (isMobile ? 1.5 : 2) + 1;
                this.pulseSpeed = 0.02 + Math.random() * 0.03;
                this.alpha = Math.random();
                // Add color variation for gradient effect
                this.hue = Math.random() * 60 + 180; // Range from cyan to purple
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha += this.pulseSpeed;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                const opacity = Math.abs(Math.sin(this.alpha)) * 0.7 + 0.3; // Pulsing opacity
                // Gradient color based on particle position
                const r = Math.floor(Math.sin(this.hue * 0.01) * 127 + 128);
                const g = Math.floor(Math.sin(this.hue * 0.01 + 2) * 127 + 128);
                const b = Math.floor(Math.sin(this.hue * 0.01 + 4) * 127 + 128);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        let lastTime = 0;
        const fps = 40; // Slightly smoother
        const interval = 1000 / fps;
        let pulseTime = 0;

        const animate = (currentTime) => {
            animationFrameId = requestAnimationFrame(animate);

            // Frame throttling
            const delta = currentTime - lastTime;
            if (delta < interval) return;
            lastTime = currentTime - (delta % interval);
            pulseTime += 0.01;

            ctx.fillStyle = 'rgba(5, 5, 16, 0.25)'; // Clear darker for better contrast
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Matrix Rain Effect (Enhanced with colors)
            const matrixColors = ['rgba(0, 243, 255, 0.05)', 'rgba(139, 92, 246, 0.04)', 'rgba(236, 72, 153, 0.03)'];
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < matrixDrops.length; i++) {
                if (Math.random() > 0.985) continue;

                // Cycle through gradient colors
                const colorIndex = Math.floor((i + pulseTime * 10) % 3);
                ctx.fillStyle = matrixColors[colorIndex];

                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * fontSize, matrixDrops[i] * fontSize);

                if (matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    matrixDrops[i] = 0;
                }
                matrixDrops[i]++;
            }

            // Connection Network (Enhanced with gradients)
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                const connectionDistanceSq = connectionDistance * connectionDistance;

                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < connectionDistanceSq) {
                        ctx.beginPath();
                        // Dynamic gradient coloring for lines with more vibrant colors
                        const alpha = (1 - distSq / connectionDistanceSq) * 0.25;

                        // Multi-color gradient from cyan to purple to pink
                        const gradient = ctx.createLinearGradient(particle.x, particle.y, particles[j].x, particles[j].y);
                        gradient.addColorStop(0, `rgba(0, 243, 255, ${alpha})`);
                        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.8})`);
                        gradient.addColorStop(1, `rgba(236, 72, 153, ${alpha * 0.6})`);

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
        };

        animate(0);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] bg-[#050510]"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default CyberBackground;
