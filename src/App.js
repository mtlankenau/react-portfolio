import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header>
        <Navigation
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
          ></Navigation>
      </Header>
      <main></main>
    </div>
  );
}

export default App;
