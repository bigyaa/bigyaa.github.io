import React from "react";
import { motion } from "framer-motion";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../SVGIcons";
import CTAButtons from "./CTAButtons";
import PortfolioBio from "./PortfolioBio";

// Animation variants for smooth fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Hero component for the portfolio front page
 * 
 * Renders a hero section with personal information, professional summary,
 * social media links, and call-to-action buttons.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.resume - Resume data object that determines if CTA buttons should be displayed
 * @returns {JSX.Element} Hero section with animated content and contact links
 * 
 * @example
 * // Basic usage
 * <Hero resume={resumeData} />
 * 
 * @example
 * // Without resume data
 * <Hero resume={null} />
 */
const Hero = ({ resume }) => {
  const contactLinks = [
    {
      href: "mailto:bigya.js@gmail.com",
      label: "Email",
      icon: <EmailIcon aria-hidden="true" />, // Marking icon as decorative
    },
    {
      href: "https://www.linkedin.com/in/bigyabajracharya",
      label: "LinkedIn",
      icon: <LinkedInIcon aria-hidden="true" />,
    },
    {
      href: "https://github.com/bigyaa",
      label: "GitHub",
      icon: <GitHubIcon aria-hidden="true" />,
    },
  ];

  return (
    <section
      className="relative py-24 min-h-screen flex items-center justify-center"
      aria-labelledby="hero-heading"
    >

      <div className="text-center relative z-10 max-w-4xl px-6">
        {/* Name & Title */}
        <motion.h1
          id="hero-heading"
          className="text-5xl font-extrabold text-gray-900 mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Bigya Bajracharya
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-8 font-medium"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Software Engineer | Full-Stack Developer
        </motion.p>

        {/* Professional Summary Card */}
        <motion.div
          className="bg-white p-10 rounded-lg shadow-2xl text-left mx-auto max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          role="region"
          aria-labelledby="summary-heading"
        >
          <h2 id="summary-heading" className="sr-only">
            Professional Summary
          </h2>
          <PortfolioBio />
          <div className="flex items-center justify-center mt-4"><i>PS: the background is a drawing board 🎨🖌️</i></div>
          <br />

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {contactLinks.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-700 rounded-full shadow-md hover:bg-blue-100 hover:text-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${label}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          {resume ? <CTAButtons /> : <></>}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;