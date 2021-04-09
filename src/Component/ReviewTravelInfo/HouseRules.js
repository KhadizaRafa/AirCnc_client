import React from 'react';
import child from '../../images/child.png'
import pet from '../../images/ic_pets_48px.png'
import party from '../../images/forbidden.png'
import smoke from '../../images/ic_smoking_rooms_48px.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HouseRules = () => {
    const imgStyle = {
        border: '1px solid lightgray'
    }
    return (
        <section id="house-rule">
            <h1>Review House Rules</h1>
            <hr />
            <h5>Things to keep in mind</h5>


            <div className="row">
                <div className="col-md-1">
                    <img src={child} alt="Home" style={imgStyle} className="m-3 p-2" />
                </div>
                <div className="col-md-10">
                    <div className="card-body pl-0">
                        <p className="card-text text-muted">Suitable for children and infant</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <img src={pet} alt="Home" style={imgStyle} className="m-3 p-2" />
                </div>
                <div className="col-md-10">
                    <div className="card-body pl-0">
                        <p className="card-text text-muted">Pets allowed</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <img src={party} alt="Home" style={imgStyle} className="m-3 p-2" />
                </div>
                <div className="col-md-10">
                    <div className="card-body pl-0">
                        <p className="card-text text-muted">No parties or events</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <img src={smoke} alt="Home" style={imgStyle} className="m-3 p-2" />
                </div>
                <div className="col-md-10">
                    <div className="card-body pl-0">
                        <p className="card-text text-muted">Smoking allowed</p>
                    </div>
                </div>
            </div>
            <Link to="/reviewTravelInfo/travelPurpose"><Button className="normal-button">Agree and Continue</Button></Link>
        </section>
    );
};

export default HouseRules;