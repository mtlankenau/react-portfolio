import React from 'react';

const Navigation = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        {navSection.map((section) => (
          <li className={`mx-1 ${selectedNavSection === section && `navActive`}`} key={section}>
            <span onClick={() => {setSelectedNavSection(section)}}>{section}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;