import React from 'react';

interface AnimatedLogoProps {
    size?: 'sm' | 'md' | 'lg';
    darkMode?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 'md', darkMode = false }) => {
    const sizes = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-12 h-12 text-lg',
        lg: 'w-16 h-16 text-2xl'
    };

    return (
        <div className={`relative ${sizes[size]} group cursor-pointer`}>
            {/* Background glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-75 blur-sm group-hover:blur-md transition-all duration-300 animate-pulse" />

            {/* Main logo container */}
            <div className={`relative ${sizes[size]} rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                {/* Animated text */}
                <span className="relative z-10 tracking-wider">MA</span>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-2 right-1 w-1 h-1 bg-white rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1 left-2 w-1 h-1 bg-white rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }} />
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Tech badges */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
            </div>

            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" style={{ transitionDelay: '100ms' }}>
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
            </div>
        </div>
    );
};