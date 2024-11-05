// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-lightBlue p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold text-softPink">{project.name}</h3>
      <p className="mt-2">{project.description}</p>
    </motion.div>
  );
}

function Projects({projects}) {

  return (
    <section className="py-20 bg-softPink text-center text-background">
      <h2 className="text-4xl font-bold mb-8 text-lightPurple">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;