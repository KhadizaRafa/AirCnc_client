import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import room from '../../images/light-airy.jpg';
import apartment_1 from '../../images/apartment_1.jpeg';
import host_image from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ApartmentCard from './ApartmentCard';
import TourInfoForm from '../TourInfoForm/TourInfoForm';

const Apartment = (props) => {
    const { id } = useParams()
    const [apartmentDetail, setApartmentDetail] = useState([])
    const baseUrl = 'https://mighty-woodland-88182.herokuapp.com'
    useEffect(() => {
        fetch(`${baseUrl}/apartmentDetails/${id}`)
            .then(res => res.json())
            .then(data => setApartmentDetail(data[0]))
    }, [])

    return (
        <section id="apartment-detail">
            <Row>
                <Col md={6} className="p-0">
                    <img src={apartment_1} className="w-100" />
                </Col>
                <Col md={6} className="p-0">
                    <img src={room} className="w-100" />
                </Col>
            </Row>
            <Container className="mt-5">
                <Row>
                    <Col md={7}>
                        <div className="d-flex justify-content-end">
                            <div>
                                <h2>{apartmentDetail.name}</h2>
                                <p className="text-muted m-0">Dhaka,Bangladesh</p>
                                <p className="text-muted">{apartmentDetail.guest} guests {apartmentDetail.bedrooms} bedrooms {apartmentDetail.beds} beds {apartmentDetail.bath} baths</p>
                            </div>
                            <div>
                                <img src={host_image} alt="host Img" className="w-50 rounded-circle" />
                                <p className="text-muted ml-3 p-1">Rowdra</p>
                            </div>
                            <hr />
                        </div>
                        <ApartmentCard />
                        <div>
                            <p className="text-muted">{apartmentDetail.description}</p>
                            <h5>Reviews</h5>
                            <FontAwesomeIcon icon={faStar} size="xs" className="main-color" />
                            <small>{apartmentDetail.rating}</small>
                        </div>
                    </Col>
                    <Col md={4}>
                        <TourInfoForm />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


export default Apartment;
