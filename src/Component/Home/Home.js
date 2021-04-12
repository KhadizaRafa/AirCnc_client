import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { updateTravelInfo } from '../../Redux/action';
import Experience from '../Experience/Experience';
import TravellingInfo from '../TravellingInfo/TravellingInfo';

const Home = ({ updateTravelInfo }) => {
    const [guests, setGuests] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);
    let history = useHistory();

    const increaseCount = (value) => {
        value.match("adults") ? setAdults(adults + 1) : value.match("children") ? setChildren(children + 1) : setBabies(babies + 1)
    }
    const decreaseCount = (value) => {
        value.match("adults") ? setAdults(adults ? adults - 1 : 0) : value.match("children") ? setChildren(children ? children - 1 : 0) : setBabies(babies ? babies - 1 : 0)
    }

    const handleGuest = (adults, babies, children) => {
        let newGuestCount = adults + children + babies;
        setGuests(newGuestCount)
    }
    const submit = values => {
        let date = new Date();
        const id = Math.floor(date.getTime()/1000.0);
        const moment = require('moment')
        const diffInDays = moment(values.departureDate).diff(moment(values.arrivalDate), 'days');
        const travelObject = {
             ...values,
             id:id,
             adults:adults,
             babies:babies, 
             children:children, 
             guest: guests, 
             numberOfDays:diffInDays,
             email:''
            };
            updateTravelInfo(travelObject)
        history.push('/accommodation')
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <TravellingInfo onSubmit={submit} 
                             handleGuest={handleGuest}
                             increaseCount={increaseCount}
                             decreaseCount={decreaseCount}
                             adults={adults}
                             children={children}
                             babies={babies}
                             guests={guests}/>
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
    updateTravelInfo: updateTravelInfo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);