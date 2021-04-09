import React from 'react';
import host_image from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg'
import {  Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TravelPurpose = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <h5>Travelling for work?</h5>
                    <p>Say hello to your host</p>
                    <p>Let Rowdra know a little about yourself and why you're coming</p>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Hey Rowdra" rows={5} col={2} />
                    </Form.Group>
                </Form>
                <Link to="/reviewTravelInfo/payment"><Button className="normal-button">Continue</Button></Link>
                </Col>
                <Col md={4} >
                    <img src={host_image} alt="host Img" className="w-25 rounded-circle" />
                    <small className="d-block">Rowdra</small>
                </Col>
            </Row>
        </Container>

    );
};

export default TravelPurpose;