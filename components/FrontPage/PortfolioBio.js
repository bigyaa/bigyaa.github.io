import React from 'react';

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"
        />
    </svg>
);

const AIIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A2.5 2.5 0 0 0 1 13.5v1a2.5 2.5 0 0 0 1.928 2.497L3 17v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2l.072-.003A2.5 2.5 0 0 0 23 14.5v-1a2.5 2.5 0 0 0-1.928-2.497L21 10.975zM5 8h14v3h-2.5V9.5h-3V11h-3V9.5h-3V11H5V8zm14 6v3H5v-3h2.5v1.5h3V14h3v1.5h3V14H19z"
        />
    </svg>
);

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
        />
    </svg>
);

const ImpactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-24 h-12 text-black-600">
        <path
            fill="currentColor"
            d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zm0 0L10 7.5v9l3.05-2.29L16 12l-2.95-2.21zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H3V5h18v14z"
        />
    </svg>
);

const PortfolioBio = () => {
    return (
        <div className="space-y-4">
            {/* Status Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-black-800 font-medium text-center animate-pulse">
                🔍 Actively Seeking Full-Time Software Engineering Opportunities
            </div>

            {/* Main Bio */}
            <div className="space-y-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Software Engineer with 5+ years of experience in building high-performance web applications. Specializing in creating robust, user-centric solutions that drive business success through innovative technology.
                </p>
            </div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                    <CodeIcon />
                    <div>
                        <h3 className="font-semibold text-gray-900">Tech Stack</h3>
                        <p className="text-gray-700">
                            Proficient in <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">Python</span> for building modern web applications.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <AIIcon />
                    <div>
                        <h3 className="font-semibold text-gray-900">AI & Automation</h3>
                        <p className="text-gray-700">
                            Experience in implementing AI solutions and automation tools to enhance application capabilities and streamline workflows.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <UsersIcon />
                    <div>
                        <h3 className="font-semibold text-gray-900">User-Centric Design</h3>
                        <p className="text-gray-700">
                            Passionate about creating intuitive interfaces and exceptional user experiences that maximize engagement and satisfaction.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <ImpactIcon />
                    <div>
                        <h3 className="font-semibold text-gray-900">Measurable Impact</h3>
                        <p className="text-gray-700">
                            Proven track record of delivering solutions that optimize performance, reduce costs, and drive significant business growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 p-2 rounded-lg">
                <p className="text-gray-800 font-medium">
                    Looking to join a dynamic team where I can leverage my expertise in full-stack development and AI integration to create innovative solutions.
                </p>
            </div>
        </div>
    );
};

export default PortfolioBio;