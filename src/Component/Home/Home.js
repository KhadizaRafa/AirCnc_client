import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { addTravelInfo } from '../../Redux/action';
import Experience from '../Experience/Experience';
import TravellingInfo from '../TravellingInfo/TravellingInfo';

const Home = ({ addTravelInfo }) => {
    const [guests, setGuests] = useState(0);
    let history = useHistory();

    const handleGuest = (adults, babies, children) => {
        let newGuestCount = adults + children + babies;
        setGuests(newGuestCount)
    }
    const submit = values => {
        const moment = require('moment')
        const diffInDays = moment(values.departureDate).diff(moment(values.arrivalDate), 'days');
        const travelObject = { ...values, guest: guests, numberOfDays:diffInDays };
        addTravelInfo(travelObject)
        history.push('/accommodation')
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <TravellingInfo onSubmit={submit} handleGuest={handleGuest} />
                    </div>
                    <div className="col-md-8">
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo: state.travelInfo
    }
}

const mapDispatchToProps = {
    addTravelInfo: addTravelInfo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);