import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AccommodationCard from './AccommodationCard';
import GoogleMap from './GoogleMap';

const Accommodation = () => {
    const pill_styles = {
        borderRadius: "50px",
        margin: "2px"
    }
    return (
        <Container>
            <Row>
                <Col className="md-6 pt-4">
                    <small>252 stays Apr 13-17 3 guests</small>
                    <h5>Stay in Dhaka Division</h5>
                    <Button variant="outline-secondary" style={pill_styles}>Secondary</Button>
                    <AccommodationCard />


                </Col>
                <Col className="md-6">
                    <GoogleMap/>
                </Col>
            </Row>
        </Container>
    );
};

export default Accommodation;