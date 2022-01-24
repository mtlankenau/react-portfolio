import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

  const projects = [
    {
      name: "Pokegen",
      screenshot: "pokegen.jpg",
      link: "https://desolate-ridge-10974.herokuapp.com/",
      repo: "https://github.com/mtlankenau/Pokemon-Generator",
      description: "lorem ipsum blah blah blah"
    },
    {
      name: "Music Finder",
      screenshot: "music-finder.jpg",
      link: "https://mtlankenau.github.io/music-finder/",
      repo: "https://github.com/mtlankenau/music-finder",
      description: "lorem ipsum blah blah blah"
    },
    {
      name: "Pizza Hunt",
      screenshot: "pizza-hunt.jpg",
      link: "https://pizza-hunt-mtlankenau.herokuapp.com/",
      repo: "https://github.com/mtlankenau/pizza-hunt",
      description: "lorem ipsum blah blah blah"
    },
    {
      name: "Photo Port",
      screenshot: "photo-port.jpg",
      link: "https://mtlankenau.github.io/photo-port/",
      repo: "https://github.com/mtlankenau/photo-port",
      description: "lorem ipsum blah blah blah"
    },
    {
      name: "Food Festival",
      screenshot: "food-festival.jpg",
      link: "https://mtlankenau.github.io/food-festival/",
      repo: "https://github.com/mtlankenau/food-festival",
      description: "lorem ipsum blah blah blah"
    },
    {
      name: "Zoo Keepr",
      screenshot: "zoo-keepr.jpg",
      link: "https://fathomless-hamlet-47859.herokuapp.com/",
      repo: "https://github.com/mtlankenau/zookeepr",
      description: "lorem ipsum blah blah blah"
    }
  ];

  return (
    <div>
      <h2>
        <span><FontAwesomeIcon icon={faLaptopCode} size="lg"/></span>
        Portfolio
      </h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((project) => (
          <div className="col" key={project.name}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={require(`../../assets/${project.screenshot}`)}
                  className="card-img-top"
                  alt={project.name}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.repo} target="_blank" rel="noreferrer">View GitHub repository here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;