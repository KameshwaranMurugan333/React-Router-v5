import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Home = (props) => {
    return <div>
        <p>I am Home Screen</p>
        <Link to={AppRoutes.login}>Go Back to Login</Link> <br/>
        <Link to={AppRoutes.profile}>Go to Profile</Link>
    </div>
}