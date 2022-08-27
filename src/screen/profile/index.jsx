import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Profile = (props) => {
    return <div>
        <p>I am Profile Screen</p>
        <Link to={AppRoutes.home}>Go Back to Home</Link> <br/>
        <Link to={AppRoutes.login}>Go to Login</Link>
    </div>
}