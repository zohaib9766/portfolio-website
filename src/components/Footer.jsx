import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <h2 className="footer-name gradient-text">Zohaib Khan</h2>
        <p className="footer-tagline">Full Stack Developer | Bioinformatics | AI</p>
        
        <div className="footer-social">
          <a href="https://github.com/zohaib9766" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/zohaib-khan00" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:zk795438@gmail.com"><FaEnvelope /></a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Zohaib Khan. Built with React + Vite</p>
          <p className="footer-small">Designed & Developed by Zohaib Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
