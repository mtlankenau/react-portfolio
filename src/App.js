import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  const [navSection] = useState(["About", "Portfolio", "Contact", "Resume"]);
  const [selectedNavSection, setSelectedNavSection] = useState(navSection[0]);

  return (
    <div>
      <Header
        navSection={navSection}
        selectedNavSection={selectedNavSection}
        setSelectedNavSection={setSelectedNavSection}
      ></Header>
      <main>
        <Project
          navSection={navSection}
          selectedNavSection={selectedNavSection}
          setSelectedNavSection={setSelectedNavSection}
        ></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
