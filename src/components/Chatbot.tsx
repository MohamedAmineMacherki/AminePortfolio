import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2, Heart } from 'lucide-react';

// Cartoon Amino Face Component
const AminoFace = ({ isTyping = false, emotion = 'neutral', darkMode = false, size = 'small' }) => {
    const [wiggle, setWiggle] = useState(0);
    const [sparkles, setSparkles] = useState([]);
    const [bounce, setBounce] = useState(0);
    const [rainbow, setRainbow] = useState(0);

    const sizeMap = {
        small: { container: 'w-10 h-10', svg: 'w-8 h-8' },
        medium: { container: 'w-16 h-16', svg: 'w-12 h-12' },
        large: { container: 'w-24 h-24', svg: 'w-20 h-20' }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setWiggle(prev => (prev + 1) % 360);
        }, 80);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBounce(prev => (prev + 1) % 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setRainbow(prev => (prev + 1) % 360);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    const getEyes = () => {
        if (isTyping) {
            const eyes = ['◕', '◔', '◕', '●'];
            return {
                leftEye: eyes[Math.floor(wiggle / 90) % 4],
                rightEye: eyes[Math.floor(wiggle / 90) % 4],
                eyeSize: 'text-sm',
                eyeColor: 'text-pink-400'
            };
        }

        switch (emotion) {
            case 'excited':
            case 'wow':
                return {
                    leftEye: '★',
                    rightEye: '★',
                    eyeSize: 'text-lg',
                    eyeColor: 'text-yellow-400'
                };
            case 'happy':
                return {
                    leftEye: '◕',
                    rightEye: '◕',
                    eyeSize: 'text-sm',
                    eyeColor: 'text-pink-400'
                };
            case 'thinking':
                return {
                    leftEye: '◔',
                    rightEye: '◑',
                    eyeSize: 'text-sm',
                    eyeColor: 'text-blue-400'
                };
            case 'listening':
                return {
                    leftEye: '◉',
                    rightEye: '◉',
                    eyeSize: 'text-sm',
                    eyeColor: 'text-green-400'
                };
            default:
                return {
                    leftEye: '●',
                    rightEye: '●',
                    eyeSize: 'text-sm',
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
    const wiggleAmount = Math.sin(wiggle * 0.1) * 2;
    const bounceAmount = Math.sin(bounce * 0.2) * 3;
    const scaleAmount = 1 + Math.sin(bounce * 0.15) * 0.05;

    const rainbowColor = `hsl(${rainbow}, 60%, 70%)`;

    return (
        <div className="relative flex items-center justify-center">
            <div
                className={`${sizeMap[size].container} rounded-full flex flex-col items-center justify-center relative overflow-visible transition-all duration-300`}
                style={{
                    background: `linear-gradient(135deg, ${rainbowColor}, hsl(${rainbow + 60}, 60%, 70%))`,
                    transform: `rotate(${wiggleAmount}deg) translateY(${-bounceAmount}px) scale(${scaleAmount})`,
                    boxShadow: `0 ${5 + bounceAmount}px 20px rgba(0,0,0,0.2), 0 0 30px ${rainbowColor}`,
                    border: '2px solid rgba(255,255,255,0.4)'
                }}
            >
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                    }}
                />

                <div className="flex gap-1 mb-1 relative z-10">
                    <span
                        className={`${eyes.eyeSize} ${eyes.eyeColor}`}
                        style={{
                            textShadow: '0 0 8px currentColor',
                            transform: `rotate(${Math.sin(wiggle * 0.2) * 5}deg)`
                        }}
                    >
                        {eyes.leftEye}
                    </span>
                    <span
                        className={`${eyes.eyeSize} ${eyes.eyeColor}`}
                        style={{
                            textShadow: '0 0 8px currentColor',
                            transform: `rotate(${Math.sin(wiggle * 0.2 + 1) * 5}deg)`
                        }}
                    >
                        {eyes.rightEye}
                    </span>
                </div>

                <span
                    className="text-sm text-white relative z-10"
                    style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.6)',
                        transform: `scale(${1 + Math.sin(wiggle * 0.3) * 0.1})`
                    }}
                >
                    {getMouth()}
                </span>

                {(emotion === 'happy' || emotion === 'excited') && (
                    <>
                        <div className="absolute left-0 top-1/2 w-2 h-2 bg-orange-500 rounded-full opacity-50" />
                        <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-300 rounded-full opacity-50" />
                    </>
                )}
            </div>
        </div>
    );
};

interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
}

interface ChatbotProps {
    darkMode?: boolean;
}

export const Chatbot: React.FC<ChatbotProps> = ({ darkMode = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: 'bot',
            content: "Hello there! ✨ I'm Amino, Mohamed Amine's lovely AI assistant! I'm here to chat about his amazing journey, skills, projects, and achievements. What would you love to discover? 🌟",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [aminoEmotion, setAminoEmotion] = useState<'happy' | 'thinking' | 'excited' | 'neutral' | 'listening'>('happy');
    const [showWelcome, setShowWelcome] = useState(true);
    const [heartAnimation, setHeartAnimation] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
            setAminoEmotion('excited');
            setTimeout(() => setAminoEmotion('happy'), 2000);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    // Heart animation trigger
    useEffect(() => {
        if (aminoEmotion === 'excited') {
            setHeartAnimation(true);
            setTimeout(() => setHeartAnimation(false), 2000);
        }
    }, [aminoEmotion]);

    // Enhanced profile data with more comprehensive information
    const profileData = {
        personal: {
            name: "Mohamed Amine Macherki",
            title: "Software Development Engineer & Scrum Master",
            location: "Tunis, Tunisia",
            email: "mohamedamine.macherki@ieee.org",
            phone: "+216 56 58 60 61",
            linkedin: "https://www.linkedin.com/in/mohamed-amine-macherki-b62a65200/",
            github: "Available on request",
            portfolio: "Available on request",
            credly: "https://www.credly.com/users/mohamed-amine-machrki",
            nationality: "Tunisian",
            birthDate: "21/11/1999",
            birthPlace: "Mahdia, Tunisia"
        },
        currentPosition: {
            company: "Sofrecom Tunisia (Orange France subsidiary)",
            role: "Software Development Engineer & Scrum Master",
            startDate: "September 2023",
            status: "Present",
            teamSize: "50+ people from 4 countries",
            keyProject: "DISCO - Digital and innovative openSource platform for core commerce"
        },
        languages: {
            motherTongue: "Arabic",
            french: "Full Professional Proficiency",
            english: "Full Professional Proficiency",
            german: "Professional Working Proficiency"
        },
        education: [
            {
                degree: "National Engineering Degree",
                field: "Telecommunications and Computer Science",
                institution: "ENET'COM - National School of Electronics and Telecommunications of Sfax",
                period: "2020-2023",
                location: "Sfax, Tunisia",
                honors: "Very Good Distinction"
            },
            {
                degree: "Undergraduate Degree",
                field: "Pre-engineering (Mathematics and Physics)",
                institution: "IPEIM - Preparatory Institute for Engineering Studies of Monastir",
                period: "2018-2020",
                location: "Monastir, Tunisia",
                honors: "Good Distinction"
            },
            {
                degree: "High School Graduation Diploma",
                field: "Mathematics",
                institution: "Ksour Essef High School",
                period: "2018",
                location: "Mahdia, Tunisia",
                honors: "Good Distinction"
            }
        ],
        experience: [
            {
                role: "Software Development Engineer & Scrum Master",
                company: "Sofrecom Tunisia (Orange France subsidiary)",
                period: "Sep 2023 - Present",
                location: "Tunis, TN",
                achievements: [
                    "Led DISCO project - Digital innovative openSource platform for core commerce",
                    "Worked with 50+ team members from 4 countries on high-performing microservices",
                    "Optimized API response time from 3.6s to 0.5s (86% improvement)",
                    "Integrated Kafka and S3 for event-based reporting",
                    "Spearheaded MVP development for microfrontend architecture",
                    "ODA TMF Award winner at DTW23 - Reduced carbon footprint via eco-friendly solutions"
                ],
                techStack: ["Spring Boot", "React", "Microfrontends", "Microservices", "Keycloak", "Kafka", "S3", "JUnit", "Mockito", "TDD", "OpenShift"]
            },
            {
                role: "R&D Engineer Intern",
                company: "Sofrecom Tunisia (Orange Innovation)",
                period: "Feb 2023 - Aug 2023",
                location: "Tunis, TN",
                achievements: [
                    "Developed SOFLEARN - VR-based medical learning platform using AI and blockchain",
                    "Co-developed with medical university, reducing training costs by 30%",
                    "Integrated Rental NFTs & smart contracts for 10+ medical scenarios",
                    "Designed AI-powered virtual tutor using NLP and ML for real-time Q&A",
                    "Presented solution at Orange Innovation Day 2024"
                ],
                techStack: ["Virtual Reality", "Blockchain", "AI", "Machine Learning", "NLP", "Smart Contracts", "NFT", "Unity", "Oculus Quest 2"]
            },
            {
                role: "R&D Engineer Intern",
                company: "Talan Tunisia",
                period: "Jun 2022 - Jul 2022",
                location: "Tunis, TN",
                achievements: [
                    "Led MetaSports mixed reality multiplayer app development",
                    "Integrated AI features for enhanced real-time interaction",
                    "Achieved full HoloLens 2 compatibility for immersive user experience"
                ],
                techStack: ["Mixed Reality", "HoloLens 2", "AI", "Unity", "Multiplayer Systems"]
            },
            {
                role: "Frontend & Big Data Intern",
                company: "Consultim-it",
                period: "Aug 2022 - Oct 2022",
                location: "Sousse, TN",
                achievements: [
                    "Developed drag-and-drop interface application for client interactions",
                    "Implemented Big Data solutions for real-time customer data processing",
                    "Ensured efficient data management and seamless user experience"
                ],
                techStack: ["Big Data", "Real-time Processing", "Frontend Development", "Data Visualization"]
            }
        ],
        skills: {
            programming: ["Java 8+", "JavaScript (ES6+)", "TypeScript", "Python", "C#"],
            webFrameworks: ["React.js", "Angular", "Spring Boot", "Node.js"],
            cloud: ["AWS", "Azure", "Docker", "Kubernetes", "OpenShift", "CI/CD (Jenkins, Maven)"],
            databases: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
            aiMl: ["Supervised & Unsupervised ML", "Computer Vision", "NLP", "TensorFlow", "OpenCV"],
            blockchain: ["Smart Contracts", "NFT", "Metamask", "Web3"],
            tools: ["Git", "GitLab", "GitHub", "Jira", "Confluence", "Artifactory", "Linux"],
            testing: ["JUnit", "Mockito", "TDD"],
            other: ["Kafka", "Elasticsearch", "Keycloak", "Unity", "Blender", "Oculus Quest 2"]
        },
        achievements: [
            "🏆 1st Prize - NASA International Space Apps Challenge 2021 (Galactic Problem-Solver)",
            "🥉 2nd Place - Innov'Project 1 Challenge by PACK DGSE 2022",
            "🏅 ODA TMF Award Winner at DTW23 for DISCO Project",
            "👑 Vice-President IEEE ENET'Com Student Branch (2020-2021)",
            "🚀 Founding Member & Marketing Manager ENET'COM Junior Enterprise (2020-2023)",
            "🎯 Presented at Orange Innovation Day 2024",
            "🌱 Eco-design advocate - Certified in sustainable software development"
        ],
        projects: [
            {
                name: "DISCO Microservices Platform",
                description: "Digital innovative openSource platform for core commerce - DTW23 Laureate",
                technologies: ["Spring Boot", "React", "Microservices", "Kafka", "OpenShift"],
                impact: "86% API performance improvement, eco-friendly solutions"
            },
            {
                name: "SOFLEARN - VR Medical Education Platform",
                description: "VR-based medical learning with AI virtual tutor and blockchain NFTs",
                technologies: ["VR", "AI", "Blockchain", "Unity", "NLP", "Smart Contracts"],
                impact: "30% reduction in medical training costs"
            },
            {
                name: "MetaSports AR Application",
                description: "Mixed reality multiplayer app for HoloLens 2 with AI integration",
                technologies: ["Mixed Reality", "HoloLens 2", "AI", "Unity"],
                impact: "Full HoloLens 2 compatibility achieved"
            },
            {
                name: "Lip-Reading System",
                description: "Deep learning-based system for enhanced accessibility",
                technologies: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
                impact: "Enhanced assistive communication technologies"
            }
        ],
        certifications: [
            "☁️ AWS Cloud Practitioner",
            "⚡ Microsoft Azure Fundamentals",
            "🎯 Google Cloud Digital Leader",
            "🏃‍♂️ Professional Scrum Master™ I (PSM I) - Score: 85%",
            "☕ Oracle Certified Professional (OCA) Java SE 8 - Score: 87%",
            "🌱 Eco-design Training Certificate",
            "📋 PMI ACP Training Certificate - Agile principles expertise"
        ],
        leadership: [
            "Vice-President IEEE ENET'Com Student Branch (2020-2021)",
            "Founding Member & Marketing Manager ENET'COM Junior Enterprise (2020-2023)",
            "Scrum Master for 50+ international team members",
            "Event coordinator for tech conferences and workshops",
            "Mentor for new team members and students"
        ],
        interests: [
            "🎨 Visual Arts - Painting enthusiast",
            "🏃‍♂️ Marathon running with Team Sofrecom",
            "🔬 Research in medical technology applications",
            "🌱 Sustainable and eco-friendly technology solutions",
            "🚀 Innovation and emerging technologies",
            "📚 Continuous learning and professional development"
        ]
    };

    const generateBotResponse = (userInput: string): string => {
        const input = userInput.toLowerCase();

        if (input.includes('name') || input.includes('who')) {
            return `His name is ${profileData.personal.name}! ✨ He's a brilliant ${profileData.personal.title} currently working at ${profileData.personal.currentCompany} since ${profileData.personal.startDate}. Isn't that amazing? 🚀`;
        }

        if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
            return `Here's how you can reach this wonderful person! 💌\n\n📧 Email: ${profileData.personal.email}\n📱 Phone: ${profileData.personal.phone}\n📍 Location: ${profileData.personal.location}\n\nFeel free to connect with him! 🌟`;
        }

        if (input.includes('language') || input.includes('speak') || input.includes('multilingual')) {
            return `Mohamed Amine is impressively multilingual! 🌍✨\n\n🔸 Mother tongue: ${profileData.languages.motherTongue}\n🔸 French: ${profileData.languages.french}\n🔸 English: ${profileData.languages.english}\n🔸 German: ${profileData.languages.german}\n\nHow cool is that? He can connect with people worldwide! 💫`;
        }

        if (input.includes('skill') || input.includes('technology') || input.includes('programming')) {
            return `Mohamed Amine has such incredible technical skills! 🎯✨\n\n💻 Programming: ${profileData.skills.programming.join(', ')}\n🛠️ Frameworks: ${profileData.skills.frameworks.join(', ')}\n☁️ Cloud Tech: ${profileData.skills.cloud.join(', ')}\n🗄️ Databases: ${profileData.skills.databases.join(', ')}\n🤖 AI/ML: ${profileData.skills.aiMl.join(', ')}\n\nHe's truly a tech wizard! 🧙‍♂️⭐`;
        }

        if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('university')) {
            return `His educational journey is so inspiring! 🎓💖\n\n✨ ${profileData.education[0].degree} in ${profileData.education[0].field}\n🏛️ ${profileData.education[0].institution}\n📅 ${profileData.education[0].period} - ${profileData.education[0].mention}\n\n✨ ${profileData.education[1].degree} in ${profileData.education[1].field}\n🏛️ ${profileData.education[1].institution}\n📅 ${profileData.education[1].period} - ${profileData.education[1].mention}\n\nExcellence runs in his DNA! 🌟`;
        }

        if (input.includes('experience') || input.includes('work') || input.includes('job') || input.includes('sofrecom')) {
            return `He's doing amazing work at ${profileData.personal.currentCompany}! 🚀💼\n\nAs a ${profileData.personal.title} since ${profileData.personal.startDate}, he works on the fantastic DISCO microservices platform (DTW Innovation Award laureate! 🏆). He creates beautiful RESTful APIs with Spring Boot, stunning React.js frontends, and implements cutting-edge microfrontend architecture!\n\nHe's truly making a difference! ✨`;
        }

        if (input.includes('achievement') || input.includes('award') || input.includes('nasa') || input.includes('competition')) {
            return `His achievements are absolutely incredible! 🏆✨\n\n🌟 ${profileData.achievements.join('\n🌟 ')}\n\nEach one shows his dedication and brilliance! I'm so proud to represent someone this accomplished! 💖`;
        }

        if (input.includes('project') || input.includes('portfolio') || input.includes('built')) {
            return `His projects are mind-blowing! 🚀💫\n\n🎨 ${profileData.projects.join('\n🎨 ')}\n\nFrom VR to AI, from AR to microservices - he's building the future! How exciting is that? ✨🌟`;
        }

        if (input.includes('certification') || input.includes('certificate') || input.includes('aws') || input.includes('azure')) {
            return `He's so well-certified! Look at this impressive collection! 📜✨\n\n🏅 ${profileData.certifications.join('\n🏅 ')}\n\nAlways learning, always growing! That's the spirit! 🌟💪`;
        }

        if (input.includes('marathon') || input.includes('sport') || input.includes('running') || input.includes('fitness')) {
            return `He's not just brilliant professionally - he's also an amazing athlete! 🏃‍♂️💨\n\n🌟 Ulysse Djerba Marathon (10 km) - 2025\n🌟 Vaga Run (5 km) - 2025\n🌟 Mahdia Run (16 km) - 2025\n\nRunning with Team Sofrecom shows his incredible team spirit! Strong body, brilliant mind! 💪✨`;
        }

        if (input.includes('leadership') || input.includes('leader') || input.includes('ieee') || input.includes('junior enterprise')) {
            return `His leadership skills are outstanding! 👑✨\n\n🌟 Vice-President of IEEE ENET'Com Student Branch (2020-2021)\n🌟 Founding Member & Marketing Manager of ENET'COM Junior Enterprise (2020-2023)\n🌟 Event Coordinator for multiple tech conferences and workshops\n\nA true leader who inspires others! 🚀💫`;
        }

        const lovelyResponses = [
            "I'm here to share all the wonderful things about Mohamed Amine! ✨ Ask me about his skills, achievements, projects, or anything else that sparks your curiosity! 💖",
            "There's so much to love about Mohamed Amine's journey! 🌟 Would you like to know about his technical expertise, amazing projects, or perhaps his inspiring achievements? 🚀",
            "I absolutely adore talking about his incredible story! 💫 Feel free to ask about his work experience, education, certifications, or his passion for marathons! 🏃‍♂️✨",
            "Let's dive into his fascinating world together! 🎉 I can tell you about his programming skills, leadership experience, innovative projects, or his multilingual talents! 🌍💖"
        ];

        return lovelyResponses[Math.floor(Math.random() * lovelyResponses.length)];
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setAminoEmotion('thinking');

        setTimeout(() => {
            const botResponse = generateBotResponse(inputValue);
            const botMessage: Message = {
                id: Date.now() + 1,
                type: 'bot',
                content: botResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
            setAminoEmotion('excited');
            setTimeout(() => setAminoEmotion('happy'), 2000);
        }, 1200 + Math.random() * 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                {/* Floating hearts animation */}
                {heartAnimation && (
                    <div className="absolute -inset-8 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <Heart
                                key={i}
                                className="absolute text-purple-900 animate-ping"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${10 + (i % 2) * 70}%`,
                                    animationDelay: `${i * 0.2}s`,
                                    fontSize: '12px'
                                }}
                            />
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(true)}
                    className="w-20 h-20 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 flex items-center justify-center text-white group relative overflow-hidden animate-pulse"
                    style={{
                        boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4), 0 0 60px rgba(236, 72, 153, 0.3)'
                    }}
                >
                    <AminoFace emotion={aminoEmotion} darkMode={darkMode} size="medium" />

                    {/* Notification dot */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-600 rounded-full animate-bounce flex items-center justify-center">
                        <Heart className="w-3 h-3 text-white" />
                    </div>

                    {/* Welcome speech bubble */}
                    {showWelcome && (
                        <div className="absolute -top-20 -left-12 px-4 py-3 rounded-2xl text-sm font-medium whitespace-nowrap bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-2xl border-2 border-white/20 animate-bounce">
                            <div className="flex items-center gap-2">
                                <span>✨ Hi! I'm Amino!</span>
                                <Heart className="w-4 h-4 animate-pulse" />
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500" />
                        </div>
                    )}

                    {/* Magical glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-500/20 animate-spin" style={{ animationDuration: '3s' }} />
                </button>
            </div>
        );
    }

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            isMinimized ? 'w-80 h-20' : 'w-96 h-[600px]'
        }`}>
            <div className={`w-full h-full rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border-2 ${
                darkMode
                    ? 'bg-gradient-to-br from-gray-900/90 via-purple-900/80 to-blue-900/90 border-purple-500/30'
                    : 'bg-gradient-to-br from-white/95 via-pink-50/90 to-purple-50/95 border-pink-200/50'
            }`} style={{
                boxShadow: '0 25px 80px rgba(168, 85, 247, 0.15), 0 0 60px rgba(236, 72, 153, 0.1)'
            }}>
                {/* Header */}
                <div className={`p-4 border-b-2 flex items-center justify-between relative overflow-hidden ${
                    darkMode
                        ? 'bg-gradient-to-r from-purple-800/50 to-blue-800/50 border-purple-600/30'
                        : 'bg-gradient-to-r from-pink-100/80 to-purple-100/80 border-pink-300/50'
                }`}>
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 animate-pulse" />

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="relative">
                            <AminoFace emotion={aminoEmotion} isTyping={isTyping} darkMode={darkMode} size="medium" />
                            {/* Heart particles around face */}
                            <div className="absolute -inset-2 pointer-events-none">
                                <Heart className="absolute top-0 right-0 w-2 h-2 text-pink-400 animate-bounce" style={{ animationDelay: '0s' }} />
                                <Heart className="absolute bottom-0 left-0 w-2 h-2 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                            </div>
                        </div>
                        <div>
                            <h3 className={`font-bold text-lg bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent`}>
                                 Amino
                            </h3>
                            <p className={`text-sm flex items-center gap-1 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                                Ask about Mohamed Amine

                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 relative z-10">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className={`p-3 rounded-full transition-all duration-300 ${
                                darkMode
                                    ? 'hover:bg-purple-700/50 text-purple-300 hover:text-white'
                                    : 'hover:bg-pink-200/50 text-purple-600 hover:text-purple-800'
                            }`}
                        >
                            {isMinimized ? (
                                <Maximize2 className="w-5 h-5" />
                            ) : (
                                <Minimize2 className="w-5 h-5" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`p-3 rounded-full transition-all duration-300 ${
                                darkMode
                                    ? 'hover:bg-red-700/50 text-red-400 hover:text-red-300'
                                    : 'hover:bg-red-200/50 text-red-500 hover:text-red-700'
                            }`}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(100% - 180px)' }}>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex items-start gap-3 max-w-[85%] ${
                                        message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                                    }`}>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                                            message.type === 'user'
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                                : 'bg-gradient-to-r from-pink-400 to-purple-500'
                                        }`}>
                                            {message.type === 'user' ? (
                                                <User className="w-5 h-5 text-white" />
                                            ) : (
                                                <AminoFace emotion="happy" darkMode={darkMode} />
                                            )}
                                        </div>
                                        <div className={`p-4 rounded-3xl shadow-lg backdrop-blur-sm border ${
                                            message.type === 'user'
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-400/30'
                                                : darkMode
                                                    ? 'bg-gradient-to-r from-gray-800/80 to-purple-900/60 text-gray-100 border-purple-600/30'
                                                    : 'bg-gradient-to-r from-pink-50/90 to-purple-50/90 text-gray-900 border-pink-300/50'
                                        }`}>
                                            <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg">
                                            <AminoFace emotion="thinking" isTyping={true} darkMode={darkMode} />
                                        </div>
                                        <div className={`p-4 rounded-3xl shadow-lg backdrop-blur-sm border ${
                                            darkMode
                                                ? 'bg-gradient-to-r from-gray-800/80 to-purple-900/60 border-purple-600/30'
                                                : 'bg-gradient-to-r from-pink-50/90 to-purple-50/90 border-pink-300/50'
                                        }`}>
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
                                                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className={`p-4 border-t-2 ${
                            darkMode
                                ? 'bg-gradient-to-r from-gray-900/50 to-purple-900/50 border-purple-600/30'
                                : 'bg-gradient-to-r from-pink-100/50 to-purple-100/50 border-pink-300/50'
                        }`}>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask about Mohamed Amine... ✨"
                                        className={`w-full p-4 pr-12 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                                            darkMode
                                                ? 'bg-gray-800/50 border-purple-600/50 text-gray-100 placeholder-purple-300/50 focus:border-purple-500 focus:ring-purple-500/20'
                                                : 'bg-white/80 border-pink-300/50 text-gray-900 placeholder-purple-400/60 focus:border-pink-400 focus:ring-pink-400/20'
                                        }`}
                                    />
                                    <Heart className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400 animate-pulse" />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                    className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-white transform hover:scale-105 disabled:scale-100"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Chatbot;