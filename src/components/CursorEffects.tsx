import React, { useEffect, useState, useCallback, useRef } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    color: string;
}

interface ClickEffect {
    id: number;
    x: number;
    y: number;
    scale: number;
    opacity: number;
    rotation: number;
}

export const CursorEffects: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<Particle[]>([]);
    const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const animationFrameRef = useRef<number>();
    const lastParticleTime = useRef(0);

    const colors = [
        'rgba(59, 130, 246, 0.8)',   // Blue
        'rgba(139, 92, 246, 0.8)',   // Purple
        'rgba(249, 115, 22, 0.8)',   // Orange
        'rgba(34, 197, 94, 0.8)',    // Green
        'rgba(236, 72, 153, 0.8)',   // Pink
    ];

    const updateParticles = useCallback(() => {
        setParticles(prev =>
            prev.map(particle => ({
                ...particle,
                x: particle.x + particle.vx,
                y: particle.y + particle.vy,
                life: particle.life - 1,
                vx: particle.vx * 0.98,
                vy: particle.vy * 0.98
            })).filter(particle => particle.life > 0)
        );

        setClickEffects(prev =>
            prev.map(effect => ({
                ...effect,
                scale: Math.min(effect.scale + 0.08, 2.5),
                opacity: Math.max(effect.opacity - 0.015, 0),
                rotation: effect.rotation + 2
            })).filter(effect => effect.opacity > 0)
        );
    }, []);

    const animate = useCallback(() => {
        updateParticles();
        animationFrameRef.current = requestAnimationFrame(animate);
    }, [updateParticles]);

    useEffect(() => {
        animationFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [animate]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const now = Date.now();
            // Throttle particle creation for better performance
            if (now - lastParticleTime.current > 50 && Math.random() > 0.6) {
                lastParticleTime.current = now;

                const newParticle: Particle = {
                    id: now + Math.random(),
                    x: e.clientX + (Math.random() - 0.5) * 30,
                    y: e.clientY + (Math.random() - 0.5) * 30,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    life: 80,
                    maxLife: 80,
                    size: Math.random() * 3 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)]
                };

                setParticles(prev => [...prev.slice(-30), newParticle]);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleClick = (e: MouseEvent) => {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 150);

            // Create multiple ripple effects for more impact
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const clickEffect: ClickEffect = {
                        id: Date.now() + i,
                        x: e.clientX + (Math.random() - 0.5) * 10,
                        y: e.clientY + (Math.random() - 0.5) * 10,
                        scale: 0,
                        opacity: 0.8 - i * 0.2,
                        rotation: Math.random() * 360
                    };

                    setClickEffects(prev => [...prev, clickEffect]);
                }, i * 100);
            }

            // Create burst of particles on click
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const speed = 3 + Math.random() * 2;
                const newParticle: Particle = {
                    id: Date.now() + i + 1000,
                    x: e.clientX,
                    y: e.clientY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 60,
                    maxLife: 60,
                    size: Math.random() * 4 + 3,
                    color: colors[Math.floor(Math.random() * colors.length)]
                };

                setParticles(prev => [...prev, newParticle]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('click', handleClick);
        };
    }, [colors]);

    return (
        <>
            {/* Custom Cursor */}
            {isVisible && (
                <div
                    className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-100 ${
                        isClicking ? 'scale-150' : 'scale-100'
                    }`}
                    style={{
                        transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px)`,
                        width: '24px',
                        height: '24px',
                        background: isClicking
                            ? 'radial-gradient(circle, rgba(249, 115, 22, 1) 0%, rgba(59, 130, 246, 0.8) 100%)'
                            : 'radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(139, 92, 246, 0.7) 100%)',
                        borderRadius: '50%',
                        boxShadow: isClicking
                            ? '0 0 30px rgba(249, 115, 22, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)'
                            : '0 0 20px rgba(59, 130, 246, 0.6)',
                        zIndex: 9999
                    }}
                >
                    {/* Inner glow */}
                    <div
                        className="absolute inset-1 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                        }}
                    />
                </div>
            )}

            {/* Particles */}
            {particles.map(particle => {
                const opacity = particle.life / particle.maxLife;
                return (
                    <div
                        key={particle.id}
                        className="fixed pointer-events-none z-40"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            background: particle.color.replace('0.8', opacity.toString()),
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.color.replace('0.8', (opacity * 0.5).toString())}`
                        }}
                    />
                );
            })}

            {/* Click Effects */}
            {clickEffects.map(effect => (
                <div
                    key={effect.id}
                    className="fixed pointer-events-none z-40"
                    style={{
                        left: effect.x,
                        top: effect.y,
                        width: '80px',
                        height: '80px',
                        border: '3px solid rgba(59, 130, 246, 0.8)',
                        borderRadius: '50%',
                        transform: `translate(-50%, -50%) scale(${effect.scale}) rotate(${effect.rotation}deg)`,
                        opacity: effect.opacity,
                        background: `conic-gradient(from ${effect.rotation}deg, transparent, rgba(139, 92, 246, 0.2), transparent)`
                    }}
                />
            ))}

            {/* Secondary ripple effects */}
            {clickEffects.map(effect => (
                <div
                    key={`secondary-${effect.id}`}
                    className="fixed pointer-events-none z-39"
                    style={{
                        left: effect.x,
                        top: effect.y,
                        width: '120px',
                        height: '120px',
                        border: '2px solid rgba(249, 115, 22, 0.6)',
                        borderRadius: '50%',
                        transform: `translate(-50%, -50%) scale(${effect.scale * 0.8}) rotate(${-effect.rotation}deg)`,
                        opacity: effect.opacity * 0.6,
                        background: `radial-gradient(circle, transparent 60%, rgba(249, 115, 22, 0.1) 100%)`
                    }}
                />
            ))}

            <style jsx global>{`
                * {
                    cursor: none !important;
                }

                button, a, input, textarea, select {
                    cursor: none !important;
                }

                button:hover, a:hover {
                    cursor: none !important;
                }

                @keyframes ripple {
                    0% {
                        transform: translate(-50%, -50%) scale(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(2.5) rotate(360deg);
                        opacity: 0;
                    }
                }

                @keyframes particle-fade {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.5);
                    }
                }
            `}</style>
        </>
    );
};