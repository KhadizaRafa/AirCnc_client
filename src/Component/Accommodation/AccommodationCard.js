import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import room from '../../images/201916769776917542.jpg';

const AccommodationCard = () => {
    return (
        <Row className="pt-2"> 
            <Col className="md-3">
                <img src={room} className="w-100 rounded-25" />
            </Col>
            <Col className="md-8">
                <h6>Apartment in Lost Paranoma</h6>
                <small>4 guests 2 bedrooms 2 beds 2 baths</small>
                <small className="d-block">WiFi Air conditioning Kitchen</small>
                <small className="d-block pt-5 text-muted">Cancellation facility available</small>
                <div className="d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color" />
                        <small> 4.9 (20)</small>
                    </div>
                    <div>
                        <small className="d-block">$34/night</small>
                        <small className="text-muted">$167 total</small>
                    </div>
                </div>


            </Col>
        </Row>
    );
};

export default AccommodationCard;