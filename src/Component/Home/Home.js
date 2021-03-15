import React from 'react';
import Experience from '../Experience/Experience';
import NavBar from '../NavBar/NavBar';
import TravellingInfo from '../TravellingInfo/TravellingInfo';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <TravellingInfo />
                    </div>
                    <div className="col-md-8">
                        <Experience/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;