/*
import React, { useState, useEffect } from 'react';

interface AminoFaceProps {
    isTyping?: boolean;
    emotion?: 'happy' | 'thinking' | 'excited' | 'neutral' | 'listening' | 'wow';
    darkMode?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export const AminoFace: React.FC<AminoFaceProps> = ({
                                                        isTyping = false,
                                                        emotion = 'excited',
                                                        darkMode = false,
                                                        size = 'medium'
                                                    }) => {
    const [wiggle, setWiggle] = useState(0);
    const [sparkles, setSparkles] = useState<{id: number, x: number, y: number, delay: number}[]>([]);
    const [bounce, setBounce] = useState(0);
    const [rainbow, setRainbow] = useState(0);

    const sizeMap = {
        small: { container: 'w-16 h-16', svg: 'w-12 h-12' },
        medium: { container: 'w-24 h-24', svg: 'w-20 h-20' },
        large: { container: 'w-32 h-32', svg: 'w-28 h-28' }
    };

    // Wiggle animation
    useEffect(() => {
        const interval = setInterval(() => {
            setWiggle(prev => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Bounce animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBounce(prev => (prev + 1) % 100);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    // Rainbow color cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setRainbow(prev => (prev + 1) % 360);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Generate sparkles
    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: 8 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2
            }));
            setSparkles(newSparkles);
        };

        generateSparkles();
        const interval = setInterval(generateSparkles, 3000);
        return () => clearInterval(interval);
    }, []);

    const getEyes = () => {
        switch (emotion) {
            case 'excited':
            case 'wow':
                return {
                    leftEye: '★',
                    rightEye: '★',
                    eyeSize: 'text-2xl',
                    eyeColor: 'text-yellow-300'
                };
            case 'happy':
                return {
                    leftEye: '◕',
                    rightEye: '◕',
                    eyeSize: 'text-xl',
                    eyeColor: 'text-pink-300'
                };
            case 'thinking':
                return {
                    leftEye: '◔',
                    rightEye: '◑',
                    eyeSize: 'text-lg',
                    eyeColor: 'text-blue-300'
                };
            case 'listening':
                return {
                    leftEye: '◉',
                    rightEye: '◉',
                    eyeSize: 'text-lg',
                    eyeColor: 'text-green-300'
                };
            default:
                return {
                    leftEye: '●',
                    rightEye: '●',
                    eyeSize: 'text-lg',
                    eyeColor: 'text-white'
                };
        }
    };

    const getMouth = () => {
        if (isTyping) {
            const mouths = ['◡', '◠', '◡', '◕'];
            return mouths[Math.floor(wiggle / 90) % 4];
        }

        switch (emotion) {
            case 'excited':
            case 'wow':
                return '◯';
            case 'happy':
                return '◡';
            case 'thinking':
                return '◔';
            case 'listening':
                return '◡';
            default:
                return '━';
        }
    };

    const eyes = getEyes();
    const wiggleAmount = Math.sin(wiggle * 0.1) * 3;
    const bounceAmount = Math.sin(bounce * 0.2) * 5;
    const scaleAmount = 1 + Math.sin(bounce * 0.15) * 0.1;

    const rainbowColor = `hsl(${rainbow}, 70%, 60%)`;
    const shadowColor = `hsl(${rainbow + 180}, 70%, 40%)`;

    return (
        <div className="relative flex items-center justify-center">
            {/!* Sparkles *!/}
            {sparkles.map(sparkle => (
                <div
                    key={sparkle.id}
                    className="absolute text-yellow-300 animate-ping"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        animationDelay: `${sparkle.delay}s`,
                        fontSize: '8px'
                    }}
                >
                    ✨
                </div>
            ))}

            {/!* Main face container *!/}
            <div
                className={`${sizeMap[size].container} rounded-full flex flex-col items-center justify-center relative overflow-visible transition-all duration-300`}
                style={{
                    background: emotion === 'excited' || emotion === 'wow'
                        ? `linear-gradient(45deg, ${rainbowColor}, ${shadowColor})`
                        : darkMode
                            ? 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
                            : 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                    transform: `rotate(${wiggleAmount}deg) translateY(${-bounceAmount}px) scale(${scaleAmount})`,
                    boxShadow: `0 ${10 + bounceAmount}px 30px rgba(0,0,0,0.3), 0 0 50px ${rainbowColor}`,
                    border: '3px solid rgba(255,255,255,0.3)'
                }}
            >
                {/!* Face glow *!/}
                <div
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)`,
                    }}
                />

                {/!* Eyes container *!/}
                <div className="flex gap-2 mb-1 relative z-10">
                    <span
                        className={`${eyes.eyeSize} ${eyes.eyeColor} animate-bounce`}
                        style={{
                            animationDelay: '0s',
                            textShadow: '0 0 10px currentColor',
                            transform: `rotate(${Math.sin(wiggle * 0.2) * 10}deg)`
                        }}
                    >
                        {eyes.leftEye}
                    </span>
                    <span
                        className={`${eyes.eyeSize} ${eyes.eyeColor} animate-bounce`}
                        style={{
                            animationDelay: '0.1s',
                            textShadow: '0 0 10px currentColor',
                            transform: `rotate(${Math.sin(wiggle * 0.2 + 1) * 10}deg)`
                        }}
                    >
                        {eyes.rightEye}
                    </span>
                </div>

                {/!* Mouth *!/}
                <span
                    className={`text-xl text-white animate-pulse relative z-10`}
                    style={{
                        textShadow: '0 0 15px rgba(255,255,255,0.8)',
                        transform: `scale(${1 + Math.sin(wiggle * 0.3) * 0.2})`
                    }}
                >
                    {getMouth()}
                </span>

                {/!* Cheek blush *!/}
                {(emotion === 'happy' || emotion === 'excited') && (
                    <>
                        <div
                            className="absolute left-1 top-1/2 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-pulse"
                            style={{ transform: 'translateY(-50%)' }}
                        />
                        <div
                            className="absolute right-1 top-1/2 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-pulse"
                            style={{ transform: 'translateY(-50%)' }}
                        />
                    </>
                )}

                {/!* Thinking bubbles *!/}
                {emotion === 'thinking' && (
                    <div className="absolute -top-8 -right-4">
                        <div className="relative">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce opacity-80" style={{ animationDelay: '0s' }} />
                            <div className="w-3 h-3 bg-white rounded-full animate-bounce opacity-60 absolute -top-4 left-2" style={{ animationDelay: '0.2s' }} />
                            <div className="w-4 h-4 bg-white rounded-full animate-bounce opacity-40 absolute -top-8 left-4" style={{ animationDelay: '0.4s' }} />
                        </div>
                    </div>
                )}

                {/!* Excited particles *!/}
                {(emotion === 'excited' || emotion === 'wow') && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute text-yellow-300 animate-ping"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${10 + (i % 2) * 70}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    fontSize: '12px'
                                }}
                            >
                                ⭐
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/!* Message bubble *!/}
            {emotion === 'excited' && (
                <div
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg"
                    style={{
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                    }}
                >
                    WAWOOOOOOOOO! 🎉
                    <div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                    />
                </div>
            )}

            {/!* Ground shadow *!/}
            <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black rounded-full opacity-20"
                style={{
                    width: sizeMap[size].container.includes('16') ? '60px' :
                        sizeMap[size].container.includes('24') ? '80px' : '100px',
                    height: '8px',
                    transform: `translateX(-50%) scaleY(${0.5 + bounceAmount * 0.01})`
                }}
            />
        </div>
    );
};

// Demo component
export default function CartoonFaceDemo() {
    const [currentEmotion, setCurrentEmotion] = useState<'happy' | 'thinking' | 'excited' | 'neutral' | 'listening' | 'wow'>('excited');
    const [isTyping, setIsTyping] = useState(false);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('large');

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/!* Background stars *!/}
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute text-white opacity-50 animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        fontSize: '8px'
                    }}
                >
                    ✦
                </div>
            ))}

            <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 animate-pulse">
                    WAWOOOOOOOOO! 🎊
                </h1>
                <p className="text-white text-xl mb-8 animate-bounce">
                    The most amazing cartoon face ever! ✨
                </p>
            </div>

            <div className="mb-12">
                <AminoFace
                    emotion={currentEmotion}
                    isTyping={isTyping}
                    size={size}
                />
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap gap-3">
                    {(['excited', 'wow', 'happy', 'thinking', 'listening', 'neutral'] as const).map((emotion) => (
                        <button
                            key={emotion}
                            onClick={() => setCurrentEmotion(emotion)}
                            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                                currentEmotion === emotion
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg scale-110'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                        >
                            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => setIsTyping(!isTyping)}
                        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                            isTyping
                                ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                                : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                    >
                        {isTyping ? 'Stop Talking' : 'Start Talking'}
                    </button>

                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value as 'small' | 'medium' | 'large')}
                        className="px-4 py-3 rounded-full bg-white/20 text-white font-bold"
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <p className="text-center text-white/80 text-sm max-w-md">
                    🎨 This cartoon face wiggles, bounces, sparkles, and changes colors!
                    Try different emotions and watch the magic happen! ✨
                </p>
            </div>
        </div>
    );
}*/
