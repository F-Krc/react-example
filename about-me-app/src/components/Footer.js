import React from "react";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2023. All Rights Reserved.</p>
      <span>Created by F-Krc</span>
      <Link to="https://github.com/F-Krc" className="icon" target="_blank">
        <FaGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/fatih-karaca-12ba58249" className="icon" target="_blank">
        <FaLinkedin />
      </Link>
    </footer>
  );
}

export default Footer;

