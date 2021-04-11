import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useAuth } from '../Authentication/Contexts/AuthContext'

const UserProfile = (props) => {
     
    const [apartmentDetail, setApartmentDetail] = useState([])
    const { currentUser } = useAuth();
    const history = useHistory()
    const numberOfDays = travelInfo.numberOfDays == 0? 1 : travelInfo.numberOfDays
    const baseUrl = 'http://localhost:5000'

    useEffect(() => {
        fetch(`${baseUrl}/apartmentDetails/${travelInfo.apartmentId}`)
            .then(res => res.json())
            .then(data => setApartmentDetail(data[0]))
    }, [])


    const handleBooking= (e) => {
        const newTravelInfo = { ...travelInfo};
        travelInfo.email = currentUser.email;
        fetch(`${baseUrl}/addUserTravelInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTravelInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/user-profile');
                }
            })
        e.preventDefault();
    }
    
    return (
        <Container className="mt-5">
            <h3>INVOICE</h3>
            <p>Bill of : {currentUser.email}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th># of Nights</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Room</td>
                        <td>{apartmentDetail.name}</td>
                        <td>{travelInfo.arrivalDate}</td>
                        <td>{travelInfo.departureDate}</td>
                        <td>{travelInfo.numberOfDays}</td>
                        <td>$ {apartmentDetail.price}</td>
                        <td>$ {apartmentDetail.price * numberOfDays}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Other Charges</td>
                        <td colSpan="4">Service Charge</td>
                        <td>$ 21</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="4">Cleaning Charge</td>
                        <td>$ 10</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="6">Total</td>
                        <td>$ {apartmentDetail.price * travelInfo.numberOfDays + 10 + 21}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleBooking}>Confirm Booking</Button>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo: state.travelInfo
    }
}
export default connect(
    mapStateToProps
)(UserProfile);
