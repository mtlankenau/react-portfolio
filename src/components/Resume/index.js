import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/mtlankenau-resume.pdf';

const Resume = () => {

  const frontEndSkills = ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design", "React", "Bootstrap"];
  const backEndSkills = ["APIs", "Node", "Express", "MySQL & Sequelize", "MongoDB & Mongoose", "REST", "GraphQL"];

  return (
    <section>
      <h2>
        <span><FontAwesomeIcon icon={faScroll} size="lg" className="py-1"/></span>
        Resume
      </h2>
      <a href={resume} download="mtlankenau-resume.pdf" className="btn btn-primary mt-2 mb-4">Download my resume here</a>
      <div>
        <h3>Front-End Skills</h3>
        <ul>
          {frontEndSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Back-End Skills</h3>
        <ul>
          {backEndSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;