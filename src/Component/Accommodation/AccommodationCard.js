import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import room from '../../images/light-airy.jpg';
import { useHistory } from 'react-router';

const AccommodationCard = ({apartment}) => {
    let history = useHistory();
    const apartment_image = {
        borderRadius: '30px'
    }
    const handleRoomDetails = (id)=>{
        history.push(`/apartmentDetails/${id}`)
    }
    return (
        <div onClick={() => handleRoomDetails(apartment._id)}>
        <Row className="pt-2"> 
            <Col md={4}>
                <img src={room} alt={apartment.image} className="w-100 pt-2" style={apartment_image}/>
            </Col>
            <Col md={8}>
                <h6>{apartment.name}</h6>
                <small>{apartment.guest} guests {apartment.bedrooms} bedrooms {apartment.beds} beds {apartment.bath} baths</small>
                <small className="d-block">WiFi Air conditioning Kitchen</small>
                <small className="d-block pt-5 text-muted">Cancellation facility available</small>
                <div className="d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon icon={faStar} size="xs" className="main-color" />
                        <small>{apartment.rating}</small>
                    </div>
                    <div>
                        <small className="d-block">${apartment.price}/night</small>
                        <small className="text-muted">$167 total</small>
                    </div>
                </div>
            </Col>
        </Row>
        <hr/>
    </div>
    );
};

export default AccommodationCard;