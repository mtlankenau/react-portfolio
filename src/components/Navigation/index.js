import React from 'react';

const Navigation = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <nav>
      <ul className="nav nav-pills justify-content-end">
        {navSection.map((section) => (
          <li className="nav-item" key={section}>
            <a className={`nav-link ${selectedNavSection === section && `active`}`} onClick={() => {setSelectedNavSection(section)}}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;