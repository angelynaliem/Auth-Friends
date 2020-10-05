// // Step 1: Set up PrivateRoute to check if it renders/works

import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ( { component: Component, ...rest } ) => {

    return (

        <Route
        {...rest}
        render = {props => {
            if (localStorage.getItem("token")) {
                return <Component {...props} />
            } else {
                return <Redirect to="/login" />
        }}
    }
    >
        </Route>
        )
}

export default PrivateRoute;

// import React from "react";
