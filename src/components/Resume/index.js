import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/mtlankenau-resume.pdf';

const Resume = () => {

  return (
    <section>
      <h2>
        <span><FontAwesomeIcon icon={faScroll} size="lg"/></span>
        Resume
      </h2>
      <a href={resume} download="mtlankenau-resume.pdf">Download my resume here</a>
      <div>
        <h3>Front-End Skills</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
          <li>Skill 6</li>
        </ul>
      </div>
      <div>
        <h3>Back-End Skills</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
          <li>Skill 6</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;