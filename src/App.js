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
import Login from "./Component/Authentication/Login/Login";
import SignUp from "./Component/Authentication/SIgnUp/SignUp";
import ForgotPassword from "./Component/Authentication/ForgotPassword/ForgotPassword";
import { AuthProvider } from "./Component/Authentication/Contexts/AuthContext";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import UserProfile from "./Component/UserProfile/UserProfile";

function App() {
  return (
    <Router>
         <AuthProvider>
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
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>
          <PrivateRoute path="/user-profile">
            <UserProfile/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </AuthProvider>
    </Router>
  );
}

export default App;
