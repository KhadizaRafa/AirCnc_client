import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './TravellingInfo.css'

const TravellingInfo = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);

    const increaseCount = (value) => {
        value.match("adults") ? setAdults(adults + 1) : value.match("children") ? setChildren(children + 1) : setBabies(babies + 1)
    }
    const decreaseCount = (value) => {
        value.match("adults") ? setAdults(adults ? adults - 1 : 0) : value.match("children") ? setChildren(children ? children - 1 : 0) : setBabies(babies ? babies - 1 : 0)
    }

    return (
        <section id="travel-info">
            <h5  className="mb-3">Where do you want to go</h5>
            <Form>
                <Form.Group controlId="formGridLocation" className="p-2 arrival">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Add city, Landmark or address" />
                </Form.Group>
                <Form.Row className="mt-2 mb-2">
                    <div className="col-md-6">
                        <Form.Group controlId="formGridArrival" className="p-2 arrival">
                            <small className="text-muted">Arrival</small>
                            <Form.Control type="date" />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group controlId="formGridDeparture" className="p-2 arrival">
                            <small className="text-muted">Departure</small>
                            <Form.Control type="date" />
                        </Form.Group>
                    </div>
                </Form.Row>
                <Form.Group controlId="formGridGuest" className="guest">
                    <div className="guest-header">
                        <small className="text-muted">Guests</small>
                        <p>2 ADULTS, 1 CHILD</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <p>ADULTS</p>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="people-count-btn" onClick={() => decreaseCount("adults")}>-</button>
                            <span>{adults}</span>
                            <button type="button" className="people-count-btn" onClick={() => increaseCount("adults")}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="m-0">CHILD</p>
                            <small className="text-muted">Age 2-12</small>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="people-count-btn" onClick={() => decreaseCount("children")}>-</button>
                            <span>{children}</span>
                            <button type="button" className="people-count-btn" onClick={() => increaseCount("children")}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="m-0">BABIES</p>
                            <small className="text-muted">Younger than 2</small>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="people-count-btn" onClick={() => decreaseCount("babies")}>-</button>
                            <span>{babies}</span>
                            <button type="button" className="people-count-btn" onClick={() => increaseCount("babies")}>+</button>
                        </div>
                    </div>
                    <Button type="submit" className="outline-btn">Apply</Button>
                </Form.Group>
                
            </Form>
            <Button type="submit" className="full-width-button">Search</Button>
        </section>
    );
};

export default TravellingInfo;