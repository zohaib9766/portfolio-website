import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const titles = ["Full Stack Developer", "MERN Developer", "React Developer", "AI/Data Enthusiast"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullTitle = titles[titleIndex];
      
      if (isDeleting) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length - 1));
        if (currentTitle === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length + 1));
        if (currentTitle === fullTitle) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, titleIndex, titles]);

  const particles = Array.from({ length: 20 });

  return (
    <section id="home" className="hero">
      {/* Particle Background */}
      <div className="particles">
        {particles.map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="greeting">Hi, I'm</h3>
          <h1 className="name gradient-text">Zohaib Khan</h1>
          <h2 className="typing-text">
            {currentTitle}
            <span className="cursor">|</span>
          </h2>
          <p className="bio">
            Full Stack MERN Developer | Bioinformatics | AI & Data
          </p>
          
          <div className="cta-buttons">
            <Link to="projects" smooth={true} duration={100} offset={-70} className="btn btn-primary">
              View My Work
            </Link>
            <a href="#" className="btn btn-outline">
              Download CV
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/zohaib9766" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/zohaib-khan00" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:zk795438@gmail.com"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                <br/>  <span className="property">name</span>: <span className="string">"Zohaib Khan"</span>,
                <br/>  <span className="property">skills</span>: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"MongoDB"</span>],
                <br/>  <span className="property">hardWorker</span>: <span className="boolean">true</span>,
                <br/>  <span className="property">problemSolver</span>: <span className="function">() =&gt;</span> {'{'}
                <br/>    <span className="keyword">return</span> <span className="string">"Always learning!"</span>;
                <br/>  {'}'}
                <br/>{'}'};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
