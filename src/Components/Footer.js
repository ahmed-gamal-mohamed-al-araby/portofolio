import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ahmed Gamal</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ahmed-gamal-mohamed-al-araby" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ahmed-gamal-32a9151b0/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:ahmedgamalalaraby@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer