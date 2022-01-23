import React from 'react';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
// import Resume from '../Resume';

const Project = ({ selectedNavSection }) => {

  return (
    <div>
      {selectedNavSection === "About" ? (
        <h1>TEST: this is the {selectedNavSection} section</h1>
        // <About></About>
      ) : selectedNavSection === "Portfolio" ? (
        <h1>TEST: this is the {selectedNavSection} section</h1>
      ) : selectedNavSection === "Contact" ? (
        <h1>TEST: this is the {selectedNavSection} section</h1>
      ) : selectedNavSection === "Resume" && (
        <h1>TEST: this is the {selectedNavSection} section</h1>
      )}
    </div>
  );
}

export default Project;