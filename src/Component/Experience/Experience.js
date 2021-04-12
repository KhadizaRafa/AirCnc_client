import React from 'react';
import ExperienceCard from './ExperienceCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = () => {
  const experienceData = [
    {
      name: 'NIGHTLIFE : NEW YORK',
      info: "Discover the city's party scene",
      price: 35,
      views: 64
    },
    {
      name: 'ENTERTAINMENT : VANCOUVER',
      info: "Tour with an Enthusiastic local!",
      price: 3,
      views: 1
    },
    {
      name: 'PHOTO CLASS : LOS ANGELES',
      info: "Must have L.A. Pictures!",
      price: 39,
      views: 179
    },
    {
      name: 'PHOTOGRAPHY : NEW YORK',
      info: "Retro Photoshoot in NYC",
      price: 49,
      views: 72
    }
  ]
  const houseData = [
    {
      name: 'NIGHTLIFE : NEW YORK',
      info: "Unique Cob Cottage",
      price: 128,
      views: 284
    },
    {
      name: 'ENTERTAINMENT : VANCOUVER',
      info: "The Joshua Tree House",
      price: 250,
      views: 269
    },
    {
      name: 'PHOTO CLASS : LOS ANGELES',
      info: "A Pirate's Life For Me- Houseboat",
      price: 209,
      views: 140
    }
  ]
  const responsiveForExperience = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const responsiveForHome = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <section id="experience" className="mt-4">
      <div className="d-flex justify-content-between">
        <h5 className="m-2">Experiences</h5>
        <small>See All</small>
      </div>
      <Carousel responsive={responsiveForExperience}>
        {
          experienceData.map(experience => <ExperienceCard experience={experience} />)
        }
      </Carousel>

      <div className="d-flex justify-content-between">
        <h5 className="m-2">Homes</h5>
        <small>See All</small>
      </div>
      <Carousel responsive={responsiveForHome}>
        {
          houseData.map(house => <ExperienceCard experience={house} />)
        }
      </Carousel>




    </section>
  );
};

export default Experience;