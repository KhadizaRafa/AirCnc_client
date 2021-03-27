import React from 'react';
import { connect } from 'react-redux';
import { addTravelInfo } from '../../Redux/action';
import Experience from '../Experience/Experience';
import NavBar from '../NavBar/NavBar';
import TravellingInfo from '../TravellingInfo/TravellingInfo';

const Home = ({addTravelInfo}) => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <TravellingInfo addTravelInfo={addTravelInfo}/>
                    </div>
                    <div className="col-md-8">
                        <Experience/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo : state.travelInfo
    }
}

const mapDispatchToProps = {
    addTravelInfo : addTravelInfo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);