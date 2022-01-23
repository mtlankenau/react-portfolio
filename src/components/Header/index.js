import React, { useState } from 'react';
import Navigation from '../Navigation';

const Header = () => {

  const [navSection] = useState(["About", "Portfolio", "Contact", "Resume"]);
  const [selectedNavSection, setSelectedNavSection] = useState(navSection[0]);

  return (
    <header className='flex-row px-1'>
      <h1>
        <a data-testid="link" href="https://github.com/mtlankenau" target="_blank">
          Michael Lankenau
        </a>
      </h1>
      <Navigation
        navSection={navSection}
        selectedNavSection={selectedNavSection}
        setSelectedNavSection={setSelectedNavSection}
      ></Navigation>
    </header>
  );
}

export default Header;