import React from 'react';
import { motion } from 'framer-motion';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './SVGIcons';

const Hero = () => {
  const contactLinks = [
    {
      href: 'mailto:bigya.in.tech@gmail.com',
      label: 'bigya.in.tech@gmail.com',
      icon: <EmailIcon />,
    },
    {
      href: 'https://www.linkedin.com/in/bigyabajracharya',
      label: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
    {
      href: 'https://github.com/bigyaa',
      label: 'GitHub',
      icon: <GitHubIcon />,
    },
  ];

  const callToActionButtons = [
    {
      label: 'View My Work',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      onClick: () =>
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }),
    },
    {
      label: 'View Resume',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      onClick: () =>
        window.open(
          'https://github.com/bigyaa/bigyaa.github.io/blob/main/src/data/Bigya_Bajracharya_Resume.pdf',
          '_blank'
        ),
    },
  ];

  return (
    <section className="relative py-20 min-h-screen flex items-center justify-center">
      <div className="text-center relative z-10 max-w-4xl px-4">
        {/* Intro Header */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bigya Bajracharya
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Software Engineer • Actively Seeking Full-Time Opportunities
        </motion.p>

        {/* Professional Summary Card */}
        <motion.div
          className="bg-white p-8 md:p-10 rounded-lg shadow-xl text-left mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I’m a passionate Software Engineer with 5+ years of experience in{' '}
            <strong>React</strong>, <strong>TypeScript</strong>,{' '}
            <strong>Node.js</strong>, <strong>Python</strong>, and{' '}
            <strong>AI-powered solutions</strong>. I excel at building scalable,
            efficient, and user-centric web applications. Let’s leverage my
            expertise to elevate your business with innovative tech solutions.
          </p>

          {/* Contact / Social Links */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-6 justify-center">
            {contactLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors justify-center"
              >
                {icon}
                <span className="ml-2">{label}</span>
              </a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {callToActionButtons.map(
              ({ label, bgColor, hoverColor, onClick }, idx) => (
                <motion.button
                  key={idx}
                  className={`flex-1 sm:flex-none px-6 py-3 ${bgColor} text-white font-semibold rounded-md ${hoverColor} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                  onClick={onClick}
                >
                  {label}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;