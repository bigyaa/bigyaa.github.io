import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../SVGIcons";
import CTAButtons from "./CTAButtons";
import PortfolioBio from "./PortfolioBio";

// Static contact links array
const contactLinks = [
  {
    href: "mailto:bigya.js@gmail.com",
    label: "Email",
    icon: <EmailIcon aria-hidden="true" />,
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

// Animation configuration
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.6, ease: "easeOut" };

// Memoized social link component
const SocialLink = memo(({ href, label, icon }) => (
  <motion.a
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
));

const Hero = memo(({ resume }) => {
  // Memoize animated components
  const MotionElements = useMemo(() => ({
    H1: () => (
      <motion.h1
        id="hero-heading"
        className="text-5xl font-extrabold text-gray-900 mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={transition}
      >
        Bigya Bajracharya
      </motion.h1>
    ),
    Title: () => (
      <motion.p
        className="text-xl text-gray-700 mb-8 font-medium"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ ...transition, delay: 0.2 }}
      >
        Software Engineer | Full-Stack Developer
      </motion.p>
    ),
    BioCard: () => (
      <motion.div
        className="bg-white p-10 rounded-lg shadow-2xl text-left mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ ...transition, delay: 0.4 }}
        role="region"
        aria-labelledby="summary-heading"
      >
        <h2 id="summary-heading" className="sr-only">
          Professional Summary
        </h2>
        <PortfolioBio isDarkMode={false} />
        <div className="flex items-center justify-center mt-4">
          <i className="text-gray-600 text-sm">PS: the background is a drawing board 🎨🖌️</i>
        </div>
      </motion.div>
    )
  }), []);

  return (
    <section
      className="relative py-24 min-h-screen flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="text-center relative z-10 max-w-4xl px-6">
        <MotionElements.H1 />
        <MotionElements.Title />

        <MotionElements.BioCard />

        {/* Social Links - Animated as group */}
        <motion.div
          className="flex justify-center gap-6 my-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {contactLinks.map((link) => (
            <motion.div
              key={link.label}
              variants={fadeInUp}
              transition={transition}
            >
              <SocialLink {...link} />
            </motion.div>
          ))}
        </motion.div>

        {/* Conditional CTA with stable key */}
        {resume && <CTAButtons key="cta-buttons" />}
      </div>
    </section>
  );
});

export default Hero;