import React from 'react';
import home from '../../images/home.png'
import checkIn from '../../images/checkmark-square-2.png'
import spark from '../../images/solid.png'
import host from '../../images/single-01.png'

const ApartmentCard = () => {
    return (
        <section id="apartment-card">
            <div className="mb-3">
                <div className="row">
                    <div className="col-md-1 p-3 m-1">
                        <img src={home} alt="Home"/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body pl-0">
                            <h5 className="card-title text-muted m-0 pb-1">Entire Home</h5>
                            <p className="card-text text-muted">You'll have the condominium to yourself</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-md-1 p-3 m-1">
                        <img src={checkIn} alt="Home"/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body pl-0">
                            <h5 className="card-title text-muted m-0 pb-1">Self check-in</h5>
                            <p className="card-text text-muted">You can check in with the doorman</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-md-1 p-3 m-1">
                        <img src={spark} alt="Home"/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body pl-0">
                            <h5 className="card-title text-muted m-0 pb-1">Sparkling clean</h5>
                            <p className="card-text text-muted">10 recent guests said this place was sparkling clean.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-md-1 p-3 m-1">
                        <img src={host} alt="Home"/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body pl-0">
                            <h5 className="card-title text-muted m-0 pb-1">Rowdra is a Superhost</h5>
                            <p className="card-text text-muted">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests</p>
                        </div>
                    </div>
                </div>
            </div>
        <hr/>
        </section>
    );
};

export default ApartmentCard;