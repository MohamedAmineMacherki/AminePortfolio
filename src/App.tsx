import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EnhancedSkills } from './components/EnhancedSkills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { CursorEffects } from './components/CursorEffects';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingElements } from './components/FloatingElements';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
      <LanguageProvider>
        <Router>
          <div className={`min-h-screen transition-colors duration-300 ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}>
            {/* Background Effects */}
            <ParticleBackground darkMode={darkMode} />
            <FloatingElements darkMode={darkMode} />

            {/* Cursor Effects */}
            <CursorEffects />

            {/* Navigation */}
            <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Main Content */}
            <main className="relative z-20">
              <Routes>
                <Route path="/" element={<Hero darkMode={darkMode} />} />
                <Route path="/about" element={<About darkMode={darkMode} />} />
                <Route path="/experience" element={<Experience darkMode={darkMode} />} />
                <Route path="/skills" element={<EnhancedSkills darkMode={darkMode} />} />
                <Route path="/education" element={<Education darkMode={darkMode} />} />
                <Route path="/projects" element={<Projects darkMode={darkMode} />} />
                <Route path="/achievements" element={<Achievements darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              </Routes>
            </main>

            {/* Chatbot */}
            <Chatbot darkMode={darkMode} />

            {/* Global Styles */}
            <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
            
            * {
              font-family: 'Inter', sans-serif;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            /* Custom scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: ${darkMode ? '#1f2937' : '#f1f5f9'};
            }
            
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(45deg, #3b82f6, #8b5cf6);
              border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(45deg, #2563eb, #7c3aed);
            }

            /* Smooth animations */
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            
            .animate-glow {
              animation: glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes glow {
              from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
              to { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
            }
            
            /* Glassmorphism effect */
            .glass {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            /* Gradient text */
            .gradient-text {
              background: linear-gradient(45deg, #3b82f6, #8b5cf6, #f97316);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradient-shift 3s ease infinite;
            }
            
            @keyframes gradient-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
          </div>
        </Router>
      </LanguageProvider>
  );
}

export default App;