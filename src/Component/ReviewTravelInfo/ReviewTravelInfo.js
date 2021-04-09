import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import TourInfoForm from '../TourInfoForm/TourInfoForm';
import HouseRules from './HouseRules';
import Payment from './Payment';
import TravelPurpose from './TravelPurpose';

const ReviewTravelInfo = () => {
    const { name } = useParams()
    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <div className="bs-example">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active"><Link to="/reviewTravelInfo/houseRules">1. Review house Rules</Link></li>
                                <li className="breadcrumb-item"><Link to="/reviewTravelInfo/travelPurpose">2. Who's Coming</Link></li>
                                <li className="breadcrumb-item"><Link to="/reviewTravelInfo/payment">3.Confirm and pay</Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div>
                        {
                            name === 'houseRules' ? <HouseRules /> :
                            name === 'travelPurpose' ? <TravelPurpose/>:
                            name === 'payment' ? <Payment/>:''
                        }
                    </div>
                </Col>
                <Col md={4}>
                    <TourInfoForm />
                </Col>
            </Row>
        </Container>
    );
};


export default ReviewTravelInfo;

