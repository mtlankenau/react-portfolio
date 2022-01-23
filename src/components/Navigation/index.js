import React from 'react';

const Navigation = (props) => {

  const {
    aboutSelected,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && `navActive`}`}>
            <span onClick={() => setAboutSelected(true)}>About Me</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && `navActive`}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && `navActive`}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && `navActive`}`}>
            <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;