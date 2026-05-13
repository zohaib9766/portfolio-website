import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUtensils, FaTasks, FaDna, FaMicroscope, FaBrain } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Bella Cucina – Restaurant App",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      description: "Full stack food ordering system with JWT authentication, secure password handling with bcrypt, and complete CRUD operations.",
      icon: <FaUtensils />,
      github: "https://github.com/zohaib9766",
      badge: "Full Stack"
    },
    {
      title: "TaskFlow – Task Manager",
      tags: ["React", "JavaScript", "Vercel"],
      description: "Modern productivity app with task CRUD operations, filtering, search features. Live deployed on Vercel.",
      icon: <FaTasks />,
      github: "https://github.com/zohaib9766",
      badge: "Live on Vercel",
      badgeColor: "green"
    },
    {
      title: "Helix Bind AI – Bioinformatics Platform",
      tags: ["Python", "ML", "Data Visualization", "Bioinformatics"],
      description: "AI-driven system for transcription factor binding site prediction with automated workflows and data visualization.",
      icon: <FaDna />,
      badge: "AI / Bio"
    },
    {
      title: "Breast Cancer Biomarker Classification",
      tags: ["Python", "LightGBM", "UMAP", "Scikit-learn"],
      description: "Applied UMAP for dimensionality reduction and LightGBM for classification on gene expression datasets.",
      icon: <FaMicroscope />,
      badge: "ML / Data"
    },
    {
      title: "Alzheimer's Network Pharmacology",
      tags: ["Python", "Network Analysis", "Biology"],
      description: "Identified drug targets and pathways using biological network analysis to interpret compound-target relationships.",
      icon: <FaBrain />,
      badge: "Research"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Projects</h2>
          <p className="section-subtitle">Things I've Built</p>
          <div className="underline"></div>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className={`project-badge ${project.badgeColor === 'green' ? 'badge-green' : ''}`}>
                  {project.badge}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
