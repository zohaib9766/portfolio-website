import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

const CountUp = ({ end, duration = 2, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration * 1000) {
          const nextCount = (progress / (duration * 1000)) * end;
          setCount(nextCount);
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="avatar-container">
              <div className="avatar-placeholder">
                ZK
              </div>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                Available for work
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="about-text">
              Full Stack MERN Developer with a strong academic background in Bioinformatics (CGPA 3.8/4.0). Passionate about building production-ready web applications and solving real-world problems with code. Experienced in React, Node.js, Express, MongoDB, Python, and Machine Learning. Open to Full Stack, Frontend, Backend, and AI/Data roles.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h3><CountUp end={3} suffix="+" /></h3>
                <p>Projects</p>
              </div>
              <div className="stat-card">
                <h3><CountUp end={3.8} decimals={1} /></h3>
                <p>CGPA</p>
              </div>
              <div className="stat-card">
                <h3><CountUp end={2} suffix="+" /></h3>
                <p>Internships</p>
              </div>
              <div className="stat-card">
                <h3><CountUp end={5} suffix="+" /></h3>
                <p>Skills</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
