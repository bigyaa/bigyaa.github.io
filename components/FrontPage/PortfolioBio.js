import React from 'react';
import { AIIcon, CodeIcon, ImpactIcon, UsersIcon } from '../SVGIcons';

const PortfolioBio = () => {
    return (
        <div className="space-y-4">
            {/* Status Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-black font-medium text-center animate-pulse">
                <span role="img" aria-label="search">🔍</span> Actively Seeking Full-Time Software Engineering Opportunities
            </div>

            {/* Main Bio */}
            <div className="space-y-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Software Engineer with 5+ years of experience in building high-performance web applications. 
                    Specializing in creating robust, user-centric solutions that drive business success through innovative technology.
                </p>
            </div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                    <CodeIcon />
                    <div>
                        <h3 className="font-semibold text-gray-900">Tech Stack</h3>
                        <p className="text-gray-700">
                            Proficient in <span className="font-medium">React</span>, 
                            <span className="font-medium">TypeScript</span>, 
                            <span className="font-medium">Node.js</span>, 
                            and <span className="font-medium">Python</span> 
                            for building modern web applications.
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
        </div>
    );
};

export default PortfolioBio;