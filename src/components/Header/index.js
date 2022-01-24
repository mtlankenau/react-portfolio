import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <header className="d-flex align-items-center flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light sticky-top">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-1">Michael Lankenau</span>
      </a>
      <Navigation
        navSection={navSection}
        selectedNavSection={selectedNavSection}
        setSelectedNavSection={setSelectedNavSection}
      ></Navigation>
    </header>
  );
}

export default Header;