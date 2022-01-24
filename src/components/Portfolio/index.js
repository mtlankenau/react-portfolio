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
      description: "Log in and generate your own pokemon cards! View all cards created, your own dashboard, and card collections by user."
    },
    {
      name: "Music Finder",
      screenshot: "music-finder.jpg",
      link: "https://mtlankenau.github.io/music-finder/",
      repo: "https://github.com/mtlankenau/music-finder",
      description: "Find music artist's albums and their upcoming live concerts! Simply enter their name in the search bar and click search. Save all of your favorites to view later on!"
    },
    {
      name: "Pizza Hunt",
      screenshot: "pizza-hunt.jpg",
      link: "https://pizza-hunt-mtlankenau.herokuapp.com/",
      repo: "https://github.com/mtlankenau/pizza-hunt",
      description: "Create and share your favorite pizzas! This application utilizes MongoDB & Mongoose back-end technologies and IndexedDB API for client-side storage."
    },
    {
      name: "Photo Port",
      screenshot: "photo-port.jpg",
      link: "https://mtlankenau.github.io/photo-port/",
      repo: "https://github.com/mtlankenau/photo-port",
      description: "View a personal art project! This application utilizes React front-end technology to dynamically render different components on a single-page-application (SPA)."
    },
    {
      name: "Food Festival",
      screenshot: "food-festival.jpg",
      link: "https://mtlankenau.github.io/food-festival/",
      repo: "https://github.com/mtlankenau/food-festival",
      description: "View the schedule and buy tickets for a nearby food festival! This application serves as a progressive web application (PWA) and uses service-workers."
    },
    {
      name: "Zoo Keepr",
      screenshot: "zoo-keepr.jpg",
      link: "https://fathomless-hamlet-47859.herokuapp.com/",
      repo: "https://github.com/mtlankenau/zookeepr",
      description: "View and add information about your favorite animals and zookeepers! This application serves as an introduction to server-side CRUD operations using Express.js."
    }
  ];

  return (
    <div>
      <h2>
        <span><FontAwesomeIcon icon={faLaptopCode} size="lg" className="py-1"/></span>
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
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub repository here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;