import React from 'react';

const Portfolio = () => {

  const projects = [
    {
      name: "Pokegen",
      screenshot: "pokegen.jpg",
      link: "https://desolate-ridge-10974.herokuapp.com/",
      repo: "https://github.com/mtlankenau/Pokemon-Generator"
    },
    {
      name: "Music Finder",
      screenshot: "music-finder.jpg",
      link: "https://mtlankenau.github.io/music-finder/",
      repo: "https://github.com/mtlankenau/music-finder"
    },
    {
      name: "Pizza Hunt",
      screenshot: "pizza-hunt.jpg",
      link: "https://pizza-hunt-mtlankenau.herokuapp.com/",
      repo: "https://github.com/mtlankenau/pizza-hunt"
    },
    {
      name: "Photo Port",
      screenshot: "photo-port.jpg",
      link: "https://mtlankenau.github.io/photo-port/",
      repo: "https://github.com/mtlankenau/photo-port"
    },
    {
      name: "Food Festival",
      screenshot: "food-festival.jpg",
      link: "https://mtlankenau.github.io/food-festival/",
      repo: "https://github.com/mtlankenau/food-festival"
    },
    {
      name: "Zoo Keepr",
      screenshot: "zoo-keepr.jpg",
      link: "https://fathomless-hamlet-47859.herokuapp.com/",
      repo: "https://github.com/mtlankenau/zookeepr"
    }
  ];

  return (
    <div>
      {projects.map((project) => (
        <div className="mx-1" key={project.name}>
          <h2>{project.name}</h2>
          <img
            src={require(`../../assets/${project.screenshot}`)}
            alt={project.name}
            className=""
          />
          <a href={project.link}>View the deployed application here</a>
          <a href={project.repo}>View the GitHub repository here</a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;