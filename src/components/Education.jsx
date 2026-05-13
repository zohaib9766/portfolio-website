import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const certifications = [
    { title: "Generative AI Application Developer", issuer: "Pak Angels", year: "2025" },
    { title: "Google Agile Essentials", issuer: "Coursera", year: "2025" },
    { title: "Genomic Data Science", issuer: "Coursera", year: "2025" }
  ];

  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Education</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="education-content">
          <motion.div 
            className="degree-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="degree-icon">
              <FaGraduationCap />
            </div>
            <div className="degree-info">
              <span className="degree-years">2022 – Present</span>
              <h3 className="degree-title">BS Bioinformatics</h3>
              <h4 className="degree-uni">University of Agriculture Faisalabad</h4>
            </div>
            <div className="cgpa-badge">
              CGPA: 3.8 / 4.0
            </div>
          </motion.div>

          <div className="certifications-section">
            <motion.h3 
              className="cert-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Certifications
            </motion.h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaCertificate className="cert-icon" />
                  <div className="cert-details">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
