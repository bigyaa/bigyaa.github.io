import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './SVGIcons';

function Footer() {
  const socialLinks = [
    {
      href: 'https://github.com/bigyaa',
      icon: <GitHubIcon />,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/bigyabajracharya',
      icon: <LinkedInIcon />,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:bigya.in.tech@gmail.com',
      icon: <EmailIcon />,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-pink-50 to-gray-100 text-gray-800 pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
            Let’s Build Something Amazing Together!
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            I'm actively seeking new opportunities and available to start immediately.
            Let’s connect and discuss how I can contribute to your team’s success.
          </p>
          <motion.a
            href="mailto:bigya.in.tech@gmail.com"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-5 text-gray-800">Connect with Me</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
                <span className="font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mb-2">&copy; {new Date().getFullYear()} Bigya Bajracharya. All rights reserved.</p>
          <p className="flex items-center justify-center text-sm text-gray-500">
            Built with
            <span className="mx-1">❤️</span>
            and
            <span className="mx-1">☕</span>
            by Bigya
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;