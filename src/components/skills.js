import React from 'react';
import './css/skill.css';

const Skills = () => {
  const downloadResume = () => {
    // Replace 'your-resume-file.pdf' with the actual filename or path on your server
    const downloadUrl = 'https://drive.google.com/file/d/10IvlvN7x4oo2sw5oWN4Rh7wfkag_MkVw/view?usp=drive_link';
    window.open(downloadUrl, '_blank');
  };
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
       
        <div className="skills-content">
          <div className="skills-category">
            <h3>Language</h3>
            <ul>
              <li>C++</li>
              <li>C</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Library/Framework</h3>
            <ul>
              <li>.NET</li>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>Sql</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Computer Essentials</h3>
            <ul>
              <li>Data Structure And Algorithm</li>
              <li>Operating System</li>
              <li>Oops</li>
              <li>DBMS</li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <ul>
              <li>VScode</li>
              <li>MS-Office</li>
              <li>Git-Hub</li>
              <li>Git</li>
              <li>Azure LAW</li>
              <li>Azure Key vault</li>
              <li>Azure MSI</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-buttons">
          <button className="download-button" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
    </section>
  );
};

export default Skills;
