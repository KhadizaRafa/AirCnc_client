import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import masterCard from '../../images/masterCard.png';
import visa from '../../images/visa.jpg'
import amex from '../../images/1200px-American_Express_logo_(2018).svg.png'
import paypal from '../../images/paypal_mb8k.png'

const Payment = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    const paymentStyle = {
        border: '1px solid lightgray',
        padding: '5%',
        margin: '2% 0'
    }

    return (
        <Container>
            <h5>Payment Selector</h5>
            <fieldset>
                <Form.Group>
                    <Col sm={12} style={paymentStyle}>
                        <Row>
                            <Col md={8}>
                                <Form.Check
                                    type="radio"
                                    label="Credit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className="font-weight-bold"
                                    selected = "true"
                                />
                                <p className="pl-3">Safe money transfer using your bank account.Visa, Meastro, Discover, American Express</p>
                            </Col>
                            <Col md={4} className="d-flex justify-content-between">
                                <img src={masterCard} className="w-25 h-50" />
                                <img src={visa} className="w-25 h-50" />
                                <img src={amex} className="w-25 h-50" />
                            </Col>
                        </Row>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label className="text-muted">CARD NUMBER</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label className="text-muted">NAME ON CARD</Form.Label>
                                    <Form.Control type="text" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide name.
                        </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label className="text-muted">EXPIRY DATE</Form.Label>
                                    <Form.Control type="text" placeholder="MM/YY" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid expiry date.
                        </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label className="text-muted">CITY CODE</Form.Label>
                                    <Form.Control type="text" placeholder="" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a city code.
                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col sm={12} style={paymentStyle}>
                        <Row>
                            <Col md={10}>
                                <Form.Check
                                    type="radio"
                                    label="Paypal"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <p className="pl-3">You will be redirected to paypal website to complete your purchase securely</p>
                            </Col>
                            <Col md={2}>
                                <img src={paypal} className="w-100" />
                            </Col>
                        </Row>
                    </Col>
                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="normal-button">Continue to pay</Button>
                    </div>
                </Form.Group>
            </fieldset>
        </Container>
    );
};

export default Payment;