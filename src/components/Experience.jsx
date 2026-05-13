import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Research Volunteer",
      company: "Centre of Advanced Studies (CAS), University of Agriculture Faisalabad",
      date: "2026 – Present",
      isCurrent: true,
      bullets: [
        "Working on cotton genome sequencing of Gossypium hirsutum using Oxford Nanopore reads",
        "Assisting in genome assembly workflows and large-scale sequencing data processing",
        "Utilizing bioinformatics tools and Linux-based pipelines"
      ]
    },
    {
      role: "Bioinformatics Intern",
      company: "NIBGE, Faisalabad",
      date: "Jun 2025 – Jul 2025",
      isCurrent: false,
      bullets: [
        "Processed large-scale genomic datasets using Linux and Python scripting",
        "Performed variant analysis and contributed to biological data interpretation",
        "Prepared technical reports and supported research workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Experience</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-date">{exp.date}</span>
                  {exp.isCurrent && <span className="badge-current">Current</span>}
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
