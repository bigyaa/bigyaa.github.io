import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../SVGIcons";
import CTAButtons from "./CTAButtons";
import PortfolioBio from "./PortfolioBio";
import { SOCIAL_LINKS, TEXT_CONTENT, ARIA_LABELS, ANIMATION_VARIANTS, ANIMATION_DURATION } from "../../constants";

// Static contact links array
const contactLinks = [
  {
    href: SOCIAL_LINKS.EMAIL.href,
    label: SOCIAL_LINKS.EMAIL.label,
    icon: <EmailIcon aria-hidden="true" />,
  },
  {
    href: SOCIAL_LINKS.LINKEDIN.href,
    label: SOCIAL_LINKS.LINKEDIN.label,
    icon: <LinkedInIcon aria-hidden="true" />,
  },
  {
    href: SOCIAL_LINKS.GITHUB.href,
    label: SOCIAL_LINKS.GITHUB.label,
    icon: <GitHubIcon aria-hidden="true" />,
  },
];

// Animation configuration
const transition = { duration: ANIMATION_DURATION.SLOW, ease: "easeOut" };

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
        variants={ANIMATION_VARIANTS.fadeInUp}
        transition={transition}
      >
        {TEXT_CONTENT.HERO.NAME}
      </motion.h1>
    ),
    Title: () => (
      <motion.p
        className="text-xl text-gray-700 mb-8 font-medium"
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.fadeInUp}
        transition={{ ...transition, delay: 0.2 }}
      >
        {TEXT_CONTENT.HERO.TITLE}
      </motion.p>
    ),
    BioCard: () => (
      <motion.div
        className="bg-white p-10 rounded-lg shadow-2xl text-left mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.fadeInUp}
        transition={{ ...transition, delay: 0.4 }}
        role="region"
        aria-labelledby="summary-heading"
      >
        <h2 id="summary-heading" className="sr-only">
          {ARIA_LABELS.PROFESSIONAL_SUMMARY}
        </h2>
        <PortfolioBio isDarkMode={false} />
        <div className="flex items-center justify-center mt-4">
          <i className="text-gray-600 text-sm">{TEXT_CONTENT.HERO.BIO_NOTE}</i>
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
          variants={ANIMATION_VARIANTS.staggerChildren}
        >
          {contactLinks.map((link) => (
            <motion.div
              key={link.label}
              variants={ANIMATION_VARIANTS.fadeInUp}
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