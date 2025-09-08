import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../SVGIcons';
import { SOCIAL_LINKS, TEXT_CONTENT, ARIA_LABELS, ANIMATION_DURATION, LAYOUT } from '../../constants';

function Footer() {
  const socialLinks = [
    {
      href: SOCIAL_LINKS.GITHUB.href,
      icon: <GitHubIcon />,
      label: SOCIAL_LINKS.GITHUB.label
    },
    {
      href: SOCIAL_LINKS.LINKEDIN.href,
      icon: <LinkedInIcon />,
      label: SOCIAL_LINKS.LINKEDIN.label
    },
    {
      href: SOCIAL_LINKS.EMAIL.href,
      icon: <EmailIcon />,
      label: SOCIAL_LINKS.EMAIL.label
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-pink-50 to-gray-100 text-gray-800 pt-16 pb-12">
      <div className={`${LAYOUT.MAX_WIDTH} mx-auto ${LAYOUT.CONTAINER_PADDING}`}>
        {/* CTA Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION.SLOW }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
            {TEXT_CONTENT.FOOTER.TITLE}
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            {TEXT_CONTENT.FOOTER.DESCRIPTION}
          </p>
          <motion.a
            href={SOCIAL_LINKS.EMAIL.href}
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            {TEXT_CONTENT.FOOTER.CTA_BUTTON}
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-5 text-gray-800">{ARIA_LABELS.CONNECT_WITH_ME}</h3>
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
          transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.4 }}
        >
          <p className="mb-2">&copy; {new Date().getFullYear()} {TEXT_CONTENT.FOOTER.COPYRIGHT}</p>
          <p className="flex items-center justify-center text-sm text-gray-500">
            {TEXT_CONTENT.FOOTER.BUILT_WITH}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;