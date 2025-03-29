import React, { useState, useEffect, useMemo, memo } from 'react';

const PortfolioBio = memo(({ isDarkMode = false }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    const expertiseItems = useMemo(() => [
        {
            icon: CodeIcon,
            title: "Tech Stack",
            color: isDarkMode ? 'text-blue-400' : 'text-blue-600',
            content: <>Proficient in <Highlight>JavaScript</Highlight> ecosystems, <Highlight>React</Highlight>, <Highlight>TypeScript</Highlight>, <Highlight>Node.js</Highlight>, and modern web technologies.</>
        },
        {
            icon: AIIcon,
            title: "AI Integration",
            color: isDarkMode ? 'text-purple-400' : 'text-purple-600',
            content: <>Specialized in LLM-powered features, NLP, and automation workflows that create competitive advantages.</>
        },
        {
            icon: UsersIcon,
            title: "UX Focus",
            color: isDarkMode ? 'text-green-400' : 'text-green-600',
            content: <>Create intuitive, accessible interfaces. Collaborate with designers to build beautiful, responsive experiences.</>
        },
        {
            icon: ImpactIcon,
            title: "Results",
            color: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
            content: <>Reduced load times by 65%, increased engagement by 40%, scaled products to millions of users.</>
        }
    ], [isDarkMode]);

    return (
        <div className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
            {/* Status Banner with optimized animation */}
            <div className={`${isDarkMode ? 'bg-blue-900/80 border-blue-800' : 'bg-blue-100/90 border-blue-200'} 
                border rounded-lg p-3 font-medium text-center text-sm mb-4 transition-all duration-300
                hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>Available for Software Engineering Opportunities</span>
                </div>
            </div>

            {/* Main Bio with optimized text rendering */}
            <div className={`mb-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} 
                    motion-safe:animate-fade-in`}>
                    Software Engineer with 5+ years of experience building high-performance web applications.
                    I combine technical expertise with strong product thinking to deliver solutions that users love and businesses depend on.
                </p>
            </div>

            {/* Optimized Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {expertiseItems.map((item, index) => (
                    <ExpertiseCard
                        key={item.title}
                        index={index}
                        isDarkMode={isDarkMode}
                        isVisible={isVisible}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
});

const ExpertiseCard = memo(({ icon: Icon, title, content, color, isDarkMode, index, isVisible }) => (
    <div className={`
        ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-gray-50/90 hover:bg-gray-100/90'} 
        p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] 
        motion-safe:animate-fade-in-up delay-${index * 100}
        ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}
    `}>
        <div className="flex items-center mb-2">
            <span className={`mr-2 ${color}`}>
                <Icon />
            </span>
            <h3 className="font-bold text-sm">{title}</h3>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            {content}
        </p>
    </div>
));

const Highlight = ({ children }) => (
    <span className="font-medium underline decoration-dotted decoration-2 underline-offset-4">
        {children}
    </span>
);

// Optimized SVG icons with aria-labels
const CodeIcon = () => (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const AIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 16.5L12 21l-1.5-4.5L6 15l4.5-1.5L12 9l1.5 4.5L18 15l-4.5 1.5z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ImpactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

export default PortfolioBio;