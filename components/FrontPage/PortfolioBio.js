import React, { useState, useEffect } from 'react';

const PortfolioBio = ({ isDarkMode = false }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
            {/* Status Banner - Made more compact */}
            <div className={`${isDarkMode ? 'bg-blue-900/80 border-blue-800' : 'bg-blue-100/90 border-blue-200'} border rounded-md py-2 px-3 font-medium text-center text-sm mb-4 transition-colors duration-300`}>
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available for Software Engineering Opportunities
            </div>

            {/* Main Bio - More concise */}
            <div className={`mb-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Software Engineer with 5+ years of experience building high-performance web applications.
                    I combine technical expertise with strong product thinking to deliver solutions that users love and businesses depend on.
                </p>
            </div>

            {/* Expertise Areas - More compact grid with smaller padding */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-gray-50/90'} p-3 rounded transition-all duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex items-center mb-1">
                        <span className={`mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            <CodeIcon />
                        </span>
                        <h3 className="font-bold text-sm">Tech Stack</h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        Expert in <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">Python</span>. Experienced with GraphQL and AWS for scalable solutions.
                    </p>
                </div>

                <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-gray-50/90'} p-3 rounded transition-all duration-500 delay-100 transform ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex items-center mb-1">
                        <span className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                            <AIIcon />
                        </span>
                        <h3 className="font-bold text-sm">AI Integration</h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        Specialized in implementing LLM-powered features, computer vision, and automation workflows that enhance products and create competitive advantages.
                    </p>
                </div>

                <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-gray-50/90'} p-3 rounded transition-all duration-500 delay-200 transform ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex items-center mb-1">
                        <span className={`mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                            <UsersIcon />
                        </span>
                        <h3 className="font-bold text-sm">UX Focus</h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        Create intuitive interfaces with accessibility in mind. Collaborate closely with designers to build beautiful, responsive experiences that users love.
                    </p>
                </div>

                <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-gray-50/90'} p-3 rounded transition-all duration-500 delay-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex items-center mb-1">
                        <span className={`mr-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                            <ImpactIcon />
                        </span>
                        <h3 className="font-bold text-sm">Results</h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        Reduced load times by 65%, increased user engagement by 40%, and helped scale products from prototype to millions of users while maintaining performance.
                    </p>
                </div>
            </div>

            {/* Compact Action Buttons */}{/* Removed for when I have time to fix my projects section */}
            {/* <div className={`flex justify-center space-x-3 transition-opacity duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <a
                    href="#projects"
                    className={`${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-1 px-4 rounded-md text-sm transition-colors duration-300`}
                >
                    View Projects
                </a>
                <a
                    href="/resume.pdf"
                    className={`${isDarkMode ? 'border-blue-500 text-blue-400 hover:bg-blue-900/30' : 'border-blue-600 text-blue-600 hover:bg-blue-50/80'} border font-medium py-1 px-4 rounded-md text-sm transition-colors duration-300`}
                >
                    Resume
                </a>
            </div> */}
        </div>
    );
};

// Smaller icon components for more compact layout
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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