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

        // Configuration - Optimized with High Density
        const particles = [];
        const particleCount = 100; // Restored to 100 as requested
        const connectionDistance = 150;
        // Reduce matrix column density for performance
        const fontSize = 20;
        const matrixColumns = Math.floor(canvas.width / fontSize);
        const matrixDrops = new Array(matrixColumns).fill(1);

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Slower movement for smoother feel and less jitter
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(0, 243, 255, 0.4)'; // Slightly lower opacity
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        let lastTime = 0;
        const fps = 30; // Cap at 30FPS for background to save GPU for UI
        const interval = 1000 / fps;

        const animate = (currentTime) => {
            animationFrameId = requestAnimationFrame(animate);

            // Frame throttling
            const delta = currentTime - lastTime;
            if (delta < interval) return;
            lastTime = currentTime - (delta % interval);

            ctx.fillStyle = 'rgba(5, 5, 16, 0.2)'; // Increased trail fade for less accumulation work
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Matrix Rain Effect (Optimized)
            ctx.fillStyle = 'rgba(0, 243, 255, 0.03)'; // Very subtle
            ctx.font = `${fontSize}px monospace`;

            // Only update matrix every other frame effectively by index skipping if needed, 
            // but for now relying on FPS cap.
            for (let i = 0; i < matrixDrops.length; i++) {
                if (Math.random() > 0.98) continue; // Skip some updates for performance randomness

                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * fontSize, matrixDrops[i] * fontSize);

                if (matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    matrixDrops[i] = 0;
                }
                matrixDrops[i]++;
            }

            // Connection Network (Foreground Layer)
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // Draw Connections - Optimized Distance Check (No Sqrt)
                const connectionDistanceSq = connectionDistance * connectionDistance;

                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distSq = dx * dx + dy * dy;

                    // Quick bounding box check not needed if we check distSq directly, 
                    // but keeping logic simple.
                    if (distSq < connectionDistanceSq) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 243, 255, ${0.15 * (1 - distSq / connectionDistanceSq)})`; // Lower alpha
                        ctx.lineWidth = 0.5;
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
