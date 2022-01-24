import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div>
      <h2>
        <span><FontAwesomeIcon icon={faUserCircle} size="lg" className="py-1"/></span>
        About Me
      </h2>
      <p>Welcome to my professional portfolio webpage! My name is Michael Lankenau and I am currently a web developer in training, enrolled in the University of Richmond's coding bootcamp.</p>
      <p>I am a 27 year old graduate from the Unversity of Virginia, who has been working in the environmental sciences industry for the past 4-5 years. I am hoping to use the material I learn from the coding bootcamp to either transition into a more technicial role within the environmental sciences industry or to change career paths entirely as a web developer.</p>
      <p>My goal is to use this webpage as a medium to showcase the coding skills that I have learned along my adventure. I plan to update the layout and styling of this webpage progressively and will continue to add more projects to showcase for you all in the future.</p>
      <p>Now that you know more about myself and my goals, please enjoy the rest of my portfolio page!</p>
    </div>
  );
}

export default About;