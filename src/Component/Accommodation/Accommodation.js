import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import AccommodationCard from './AccommodationCard';

const Accommodation = (props) => {
    const travelInfo = props.travelInfo.travelInfo[0]
    const [apartments,setApartments] = useState([])
    const baseUrl = 'https://mighty-woodland-88182.herokuapp.com'
    useEffect(() =>{
        fetch(`${baseUrl}/allApartments`)
        .then(res => res.json())
        .then(data => setApartments(data))
    },[])
    const pill_styles = {
        borderRadius: "50px",
        margin: "2px"
    }
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return (
            <Row>
                <Col md={{span:5, offset: 1 }}>
                    <small>
                        {travelInfo.numberOfDays} stays {travelInfo.arrivalDate} to {travelInfo.departureDate} {travelInfo.guest} guests</small>
                    <h5>Stay in {travelInfo.location} Division</h5>
                    <Button variant="outline-secondary" style={pill_styles}>Secondary</Button>
                    {
                        apartments.map(apartment => <AccommodationCard key={apartment._id} apartment={apartment}/> )
                    }
                </Col>
                <Col md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703724756!2d90.27923971281079!3d23.78057325785754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616960836129!5m2!1sen!2sbd"  style={mapStyles}  loading="lazy"></iframe>
                </Col>
            </Row>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo : state.travelInfo
    }
}

export default connect(
    mapStateToProps
  )(Accommodation);