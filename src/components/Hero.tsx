import React from "react";
import { motion } from "framer-motion";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./SVGIcons";
import CTAButtons from "./CTAButtons";

// Animation variants for smooth fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const contactLinks = [
    {
      href: "mailto:bigya.in.tech@gmail.com",
      label: "Email",
      icon: <EmailIcon />,
    },
    {
      href: "https://www.linkedin.com/in/bigyabajracharya",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://github.com/bigyaa",
      label: "GitHub",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <section className="relative py-24 min-h-screen flex items-center justify-center">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-[-5rem] left-[-10rem] w-96 h-96 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5rem] right-[-10rem] w-96 h-96 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <div className="text-center relative z-10 max-w-4xl px-6">
        {/* Name & Title */}
        <motion.h1
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
          Software Engineer • Actively Seeking Full-Time Opportunities
        </motion.p>

        {/* Professional Summary Card */}
        <motion.div
          className="bg-white p-10 rounded-lg shadow-2xl text-left mx-auto max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I’m a passionate Software Engineer with 5+ years of experience in{" "}
            <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Node.js</strong>, <strong>Python</strong>, and{" "}
            <strong>AI-powered solutions</strong>. I excel at building scalable,
            efficient, and user-centric web applications. Let’s leverage my
            expertise to elevate your business with innovative tech solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {contactLinks.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-700 rounded-full shadow-md hover:bg-blue-100 hover:text-blue-500 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <CTAButtons />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;