import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const TourInfoForm = (props) => {
    const travelInfo = props.travelInfo.travelInfo[0]
    const {reserveBtn} = props
    const [apartmentDetail, setApartmentDetail] = useState([])
    const cardStyle = {
        borderRadius: "20px",
        boxShadow: "10px 10px 10px lightgray"
    }
    const baseUrl = 'https://mighty-woodland-88182.herokuapp.com'
    useEffect(() => {
        fetch(`${baseUrl}/apartmentDetails/${travelInfo.apartmentId}`)
            .then(res => res.json())
            .then(data => setApartmentDetail(data[0]))
    }, [])
    const  history = useHistory()
    const handleSubmit = () => {
        history.push('/reviewTravelInfo/houseRules')
    }
    return (
        <Card className="p-3" style={cardStyle}>
            <Card.Body>
                <Card.Title>${apartmentDetail.price}/ night</Card.Title>
                <Card.Text>
                    <FontAwesomeIcon icon={faStar} size="xs" className="main-color" />
                    <small>{apartmentDetail.rating}</small>
                    <small className="d-block font-weight-bold pt-2">Dates</small>
                    <div className="d-flex justify-content-between form-border">
                        <p className="d-inline m-0">{travelInfo.arrivalDate}</p>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        <p className="d-inline m-0">{travelInfo.departureDate}</p>
                    </div>
                    <div>
                        <small className="d-block font-weight-bold pt-2 pb-2">Guests</small>
                        <Accordion>
                            <Card>
                                <Card.Body className="d-flex justify-content-between p-0">
                                    <p className="pt-3 pl-3">{travelInfo.guest} Guests</p>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <FontAwesomeIcon icon={faCaretDown} size="lg" />
                                    </Accordion.Toggle>
                                </Card.Body>
                                <Accordion.Collapse eventKey="0">
                                    <ListGroup className="list-group-flush">
                                        {travelInfo.adults > 0 ? <ListGroupItem>Adullts : {travelInfo.adults} </ListGroupItem> : ''}
                                        {travelInfo.babies > 0 ? <ListGroupItem>Babies : {travelInfo.babies}</ListGroupItem> : ''}
                                        {travelInfo.children > 0 ? <ListGroupItem>Children : {travelInfo.children}</ListGroupItem> : ''}
                                    </ListGroup>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <small>${apartmentDetail.price} x {travelInfo.numberOfDays} nights</small>
                    <small>${apartmentDetail.price * travelInfo.numberOfDays}</small>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <small>Cleaning Fee</small>
                    <small>$10</small>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <small>Service Fee</small>
                    <small>$21</small>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <small className="font-weight-bold">Total</small>
                    <small>${travelInfo.totalTravelCost}</small>
                </ListGroupItem>
            </ListGroup>
            {!reserveBtn && 
                <Button className="pt-2 full-width-button" onClick={handleSubmit}>Reserve</Button>}
                <small className="text-center pt-2">You won't be charged yet</small>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo: state.travelInfo
    }
}
export default connect(
    mapStateToProps
)(TourInfoForm);
