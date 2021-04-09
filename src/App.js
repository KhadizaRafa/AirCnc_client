import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Accommodation from './Component/Accommodation/Accommodation';
import Apartment from "./Component/Apartment/Apartment";
import Home from './Component/Home/Home';
import NavBar from "./Component/NavBar/NavBar";
import ReviewTravelInfo from "./Component/ReviewTravelInfo/ReviewTravelInfo";
import Login from "./Component/Shared/Login/Login";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/accommodation">
            <Accommodation/>
          </Route>
          <Route exact path="/apartmentDetails/:id">
            <Apartment/>
          </Route>
          <Route exact path="/reviewTravelInfo/:name">
            <ReviewTravelInfo/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
