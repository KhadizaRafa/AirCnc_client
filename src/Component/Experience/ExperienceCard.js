import React from 'react';
import { Card } from 'react-bootstrap';
import sliderFive from "../../images/light-airy.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Experience.css'

const ExperienceCard = ({experience}) => {
    return (
            <div className="m-2">
                <Card className="experience_card_block">
                    <Card.Img variant="top" src={sliderFive} />
                    <small style={{fontSize: '10px'}}>{experience.name}</small>
                    <Card.Body className="p-0">
                        <p className="font-weight-bold">{experience.info}</p>
                        <small className="text-muted d-block">${experience.price} per person</small>
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color"/> 
                        <small className="text-muted"> {experience.views}</small>
                    </Card.Body>
                </Card> 
            </div>
    );
};

export default ExperienceCard;