import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderFive from "../../images/light-airy.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Experience.css'

const ExperienceCard = ({section_header,responsive}) => {
    return (
        <section id="experience-card">
            <div className="d-flex justify-content-between">
                 <h5  className="m-2">{section_header}</h5> 
                 <small>See All</small>     
            </div>
             <Carousel responsive={responsive}>
            <div className="m-2">
                <Card className="experience_card_block">
                    <Card.Img variant="top" src={sliderFive} />
                    <small className="font-weight-bold">NIGHTLIFE : NEW YORK</small>
                    <Card.Body className="p-0">
                        <h6>Discover the city's party scene</h6>
                        <small className="text-muted d-block">$35 per person</small>
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <small className="text-muted"> 64</small>
                    </Card.Body>
                </Card>
            </div>
        </Carousel>
        </section>
    );
};

export default ExperienceCard;