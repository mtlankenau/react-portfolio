import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

const Project = ({ selectedNavSection }) => {

  return (
    <div>
      {selectedNavSection === "About" ? (
        <About></About>
      ) : selectedNavSection === "Portfolio" ? (
        <Portfolio></Portfolio>
      ) : selectedNavSection === "Contact" ? (
        <Contact></Contact>
      ) : selectedNavSection === "Resume" && (
        <Resume></Resume>
      )}
    </div>
  );
}

export default Project;