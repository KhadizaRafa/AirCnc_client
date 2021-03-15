import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
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
            <ExperienceCard section_header={"Experiences"} responsive={responsiveForExperience}/>
            <ExperienceCard section_header={"Homes"} responsive={responsiveForHome}/>
             
           
        </section>
    );
};

export default Experience;