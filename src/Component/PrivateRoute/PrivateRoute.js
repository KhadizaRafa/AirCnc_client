import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Authentication/Contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    let {currentUser} = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;