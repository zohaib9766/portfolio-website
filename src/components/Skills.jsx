import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaGitAlt, FaGithub, FaLinux 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, 
  SiVercel, SiWordpress, SiR 
} from 'react-icons/si';
import { FaChartBar } from 'react-icons/fa';
import '../styles/Skills.css';

const SkillBar = ({ skill, percentage, delay }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-bg">
        <motion.div 
          className="progress-fill gradient-bg"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendBackend = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 85 }
  ];

  const dataAI = [
    { name: "Python", level: 80 },
    { name: "Machine Learning", level: 70 },
    { name: "Pandas/NumPy", level: 75 },
    { name: "Data Visualization", level: 70 },
    { name: "R", level: 60 }
  ];

  const allTags = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Mongoose", icon: <FaDatabase /> },
    { name: "JWT Auth", icon: <FaDatabase /> },
    { name: "Python", icon: <FaPython /> },
    { name: "R", icon: <SiR /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "VS Code", icon: <FaHtml5 /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "WordPress", icon: <SiWordpress /> },
    { name: "Genomic Analysis", icon: <FaDatabase /> },
    { name: "NGS Processing", icon: <FaDatabase /> },
    { name: "Sequence Alignment", icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">My Skills</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="skills-content">
          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="category-title">Frontend & Backend</h3>
            <div className="skills-list">
              {frontendBackend.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} percentage={skill.level} delay={0.1 * index} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="category-title">Data & AI</h3>
            <div className="skills-list">
              {dataAI.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} percentage={skill.level} delay={0.1 * index} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="skills-tags"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {allTags.map((tag, index) => (
            <motion.div 
              key={index} 
              className="tag-pill"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="tag-icon">{tag.icon}</span>
              {tag.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
