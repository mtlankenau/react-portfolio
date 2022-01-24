import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Michael Lankenau</span>
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