import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './TravellingInfo.css'

let TravellingInfo = (props) => {
    const { handleSubmit,handleGuest,increaseCount,decreaseCount,adults,babies,children,guests } = props
    return (
        <section id="travel-info">
            <h5  className="mb-3">Where do you want to go</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGridLocation" className="p-2 arrival">
                    <Form.Label>Location</Form.Label>
                    <Field className="input" name="location" component="input" type="text" placeholder="Add city, Landmark or address" required/>
                </Form.Group>
                <Form.Row className="mt-2 mb-2">
                    <div className="col-md-6">
                        <Form.Group controlId="formGridArrival" className="p-2 arrival">
                            <small className="text-muted">Arrival</small>
                            <Field className="input" name="arrivalDate" component="input" type="date" required/>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group controlId="formGridDeparture" className="p-2 arrival">
                            <small className="text-muted">Departure</small>
                            <Field className="input" name="departureDate" component="input" type="date" required/>
                        </Form.Group>
                    </div>
                </Form.Row>
                <Form.Group controlId="formGridGuest" className="guest">
                    <div className="guest-header">
                        <small className="text-muted d-block">Guests</small>
                        {adults>0? <small> Adults : {adults}</small> : '' }
                        {children>0? <small> Children : {children}</small> :''}
                        {babies>0? <small> Babies : {babies}</small> : '' }
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
                    <Button className="outline-btn" onClick={()=>handleGuest(adults,children,babies)}>Apply</Button>
                </Form.Group>
                {guests > 0  && <Button type="submit" className="full-width-button">Search</Button>}
            </Form>
            
        </section>
    );
};
  
TravellingInfo = reduxForm({
    form: 'traveling-info'
  })(TravellingInfo);

  export default TravellingInfo;