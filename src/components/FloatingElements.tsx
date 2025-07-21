import React from 'react';

interface FloatingElementsProps {
    darkMode: boolean;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({ darkMode }) => {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 opacity-20">
                <div className={`w-full h-full rounded-lg transform rotate-45 animate-pulse ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-500'
                }`} style={{ animationDuration: '3s' }} />
            </div>

            <div className="absolute top-40 right-20 w-16 h-16 opacity-15">
                <div className={`w-full h-full rounded-full animate-bounce ${
                    darkMode ? 'bg-purple-400' : 'bg-purple-500'
                }`} style={{ animationDuration: '4s' }} />
            </div>

            <div className="absolute bottom-32 left-20 w-12 h-12 opacity-25">
                <div className={`w-full h-full transform rotate-12 animate-spin ${
                    darkMode ? 'bg-orange-400' : 'bg-orange-500'
                }`} style={{ animationDuration: '8s' }} />
            </div>

            <div className="absolute bottom-20 right-32 w-24 h-24 opacity-10">
                <div className={`w-full h-full rounded-lg transform -rotate-12 animate-pulse ${
                    darkMode ? 'bg-green-400' : 'bg-green-500'
                }`} style={{ animationDuration: '5s' }} />
            </div>

            <div className="absolute top-1/2 left-4 w-8 h-8 opacity-30">
                <div className={`w-full h-full rounded-full animate-ping ${
                    darkMode ? 'bg-cyan-400' : 'bg-cyan-500'
                }`} style={{ animationDuration: '6s' }} />
            </div>

            <div className="absolute top-1/3 right-8 w-14 h-14 opacity-20">
                <div className={`w-full h-full transform rotate-45 animate-bounce ${
                    darkMode ? 'bg-pink-400' : 'bg-pink-500'
                }`} style={{ animationDuration: '7s' }} />
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 opacity-5">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse filter blur-3xl" />
            </div>

            <div className="absolute bottom-0 right-1/4 w-80 h-80 opacity-5">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-pulse filter blur-3xl" style={{ animationDelay: '2s' }} />
            </div>
        </div>
    );
};